# otp-profiler

Component library for processing OTP profile results. Requires an instance of OTP that is accessible via JSONP requests.

## Installation

```bash
$ component install conveyal/otp-profiler
$ npm install otp-profiler
```

## Usage

For example data returned, see `test/index.js`.

```javascript
var Profiler = require('otp-profiler');

// O/D points
var od = {
  from: {
    name: 'Home',
    lat: 38.895,
    lon: -77.09
  },
  to: {
    name: 'Work',
    lat: 38.894,
    lon: -77.01
  }
};

// Create new instance
var profiler = new Profiler({
  host: 'http://localhost:8080/otp-rest-servlet',
  limit: 3 // limit the number of options to profile, defaults to 3
});
```

### .profile(options, callback)

```javascript
// Request a profile options
profiler.profile(od, function(err, profile) {
  console.log(profile); // Outputs the profile of the journey
});
```

### .routes(callback)

```javascript
// Request possible routes
profiler.routes(function(err, routes) {
  console.log(routes); // Outputs all usable transit routes
});
```

### .journey(options, callback)

If options does not contain a `profile` or `routes` object it will retreive them automatically.

```javascript
// Request a journey plan
profiler.journey(od, function(err, callback) {
  console.log(journey); // Outputs a journey plan
})
```

### .convertOtpData(options)

Converts raw JSON returned from OTP into a simpler format for use with [transitive](https://github.com/conveyal/transitive.js).

### .patterns(options, callback)

Helper function for asynchronously retrieving all patterns for a given `profile` object.

```javascript
profiler.patterns({
  profile: profile,
  limit: 3
}, function(err, patterns) {
  console.log(patterns); // All used patterns for a given profile
});
```

### .getUniquePatternIds(profile, limit)

Helper function that returns all unique patterns for the first `limit` options in the passed in profile.

## License

The MIT License (MIT)

Copyright (c) 2013 Conveyal

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
