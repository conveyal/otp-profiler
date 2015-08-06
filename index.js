var Batch = require('batch')
var clone
var otpProfileToTransitive = require('otp-profile-to-transitive')
var superagent = require('superagent')

try {
  clone = require('clone')
} catch (e) {
  clone = require('component-clone')
}

/**
 * "store" routes & pattens
 */

var store = {
  patterns: {},
  routes: null
}

/**
 * Expose `Profiler`
 */

module.exports = Profiler

/**
 * Profiler
 *
 * @param {Object} options
 */

function Profiler (opts) {
  if (!(this instanceof Profiler)) return new Profiler(opts)
  if (!opts.host) throw new Error('Profiler requires a host.')

  this.host = opts.host
  this.limit = opts.limit || 3
}

/**
 * Get a journey.
 *
 * @param {Object} options
 * @param {Function} callback
 */

Profiler.prototype.journey = function (opts, callback) {
  var batch = new Batch()
  var profiler = this

  // If a profile isn't passed, retrieve the profile
  batch.push(function (done) {
    if (opts.profile) {
      done(null, opts.profile)
    } else {
      profiler.profile(opts, done)
    }
  })

  // Get routes asynchronously
  batch.push(function (done) {
    if (opts.routes) {
      done(null, opts.routes)
    } else {
      profiler.routes(done)
    }
  })

  batch.end(function (err, results) {
    if (err) {
      callback(err)
    } else {
      opts.profile = results[0]
      opts.routes = results[1]

      profiler.patterns(opts, function (err, patterns) {
        if (err) {
          callback(err)
        } else {
          opts.patterns = patterns
          callback(null, otpProfileToTransitive(opts))
        }
      })
    }
  })
}

/**
 * Patterns
 *
 * @param {Object} options
 * @param {Function} callback
 */

Profiler.prototype.patterns = function (opts, callback) {
  var batch = new Batch()
  var profiler = this

  // Load all the patterns
  getUniquePatternIds(opts.profile).forEach(function (id) {
    batch.push(function (done) {
      profiler.pattern(id, done)
    })
  })

  batch.end(callback)
}

/**
 * Get unique pattern ids from a profile
 *
 * @param {Object} profile
 * @return {Array} of pattern ids
 */

function getUniquePatternIds (profile) {
  // Iterate over each option and add the pattern if it does not already exist
  return profile.options
    .reduce(function (transit, option) {
      return transit.concat(option.transit || [])
    }, [])
    .reduce(function (segmentPatterns, transit) {
      if (transit && transit.segmentPatterns) {
        return segmentPatterns.concat(transit.segmentPatterns)
      } else {
        return segmentPatterns
      }
    }, [])
    .reduce(function (ids, pattern) {
      if (ids.indexOf(pattern.patternId) === -1) {
        return ids.concat(pattern.patternId)
      } else {
        return ids
      }
    }, [])
}

/**
 * Load a pattern
 *
 * @param {String} id
 * @param {Function} callback
 */

Profiler.prototype.pattern = function (id, callback) {
  if (store.patterns[id]) {
    callback(null, store.patterns[id])
  } else {
    this.request('/index/patterns/' + encodeURIComponent(id), function (err, pattern) {
      if (err) {
        callback(err)
      } else {
        store.patterns[id] = pattern
        callback(null, pattern)
      }
    })
  }
}

/**
 * Profile
 *
 * @param {Object} query parameters to pass in
 * @param {Function} callback
 */

Profiler.prototype.profile = function (params, callback) {
  var qs = clone(params)
  qs.from = params.from.lat + ',' + params.from.lon
  qs.to = params.to.lat + ',' + params.to.lon

  // Options limit
  qs.limit = qs.limit || this.limit

  // Remove invalid options
  delete qs.profile
  delete qs.routes

  // Request the profile
  this.request('/profile', qs, callback)
}

/**
 * Routes. Get an index of all routes available.
 *
 * @param {Function} callback
 */

Profiler.prototype.routes = function (callback) {
  if (store.routes !== null) {
    callback(null, store.routes)
  } else {
    this.request('/index/routes', function (err, routes) {
      if (err) {
        callback(err)
      } else {
        store.routes = routes
        callback(null, routes)
      }
    })
  }
}

/**
 * Request
 *
 * @param {String} path
 * @param {Function} callback
 */

Profiler.prototype.request = function (path, params, callback) {
  if (arguments.length === 2) {
    callback = params
    params = null
  }

  superagent
    .get(this.host + path)
    .query(params)
    .end(function (err, res) {
      if (err || res.error || !res.ok) {
        callback(err || res.error || res.text, res)
      } else {
        callback(null, res.body)
      }
    })
}
