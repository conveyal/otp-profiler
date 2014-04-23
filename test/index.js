var assert = require('assert');
var Profiler = require('otpprofiler.js');
var mocha = window ? window.mocha : global.mocha;

/**
 * Set the timeout to 10 seconds
 */

mocha.timeout('10s');

/**
 * TransitiveLoader Config
 */

var config = {
  fromLocation: {
    name: 'Start',
    lat: 38.895,
    lon: -77.09
  },
  toLocation: {
    name: 'End',
    lat: 38.894,
    lon: -77.01
  }
};

/**
 * OTP Endpoint
 */

var endpoint = 'http://localhost:8080/otp-rest-servlet';

/**
 * Mocha BDD
 */

describe('otpprofiler.js', function() {
  describe('#profile()', function() {
    it('should request a profile correctly', function(done) {
      var profiler = new Profiler({
        host: endpoint
      });

      profiler.profile({
        from: config.fromLocation,
        to: config.toLocation
      }, function(err, results) {
        assert.deepEqual(results, PROFILE);
        assert(results.options.length === 3);
        done(err);
      });
    });
  });

  describe('#routes()', function() {
    it('should request all of the available routes', function(done) {
      var profiler = new Profiler({
        host: endpoint
      });

      profiler.routes(function(err, results) {
        assert.deepEqual(results, ROUTES);
        done(err);
      });
    });
  });

  describe('#journey()', function() {
    it('should request patterns for a given O/D journey', function(done) {
      var profiler = new Profiler({
        host: endpoint,
        limit: 1
      });

      profiler.journey({
        from: config.fromLocation,
        to: config.toLocation
      }, function(err, results) {
        assert.deepEqual(results, JOURNEYS);
        done(err);
      });
    });
  });
});

/**
 * Test data
 */

var PROFILE = {
  'options': [{
    'segments': [{
      'walkTime': 300,
      'walkDistance': 420,
      'waitStats': {
        'min': 0,
        'avg': 724,
        'max': 1806,
        'num': 6918
      },
      'route': '80',
      'from': '27247',
      'to': '2278',
      'fromName': 'RT 29 LEE HWY & HIGHLAND ST',
      'toName': 'NW 18TH ST & NW PENNSYLVANIA AV',
      'routeShortName': '3Y',
      'routeLongName': null,
      'rideStats': {
        'min': 810,
        'avg': 1158,
        'max': 1440,
        'num': 4
      },
      'segmentPatterns': [{
        'patternId': '67407f4a',
        'fromIndex': 21,
        'toIndex': 32,
        'nTrips': 6
      }]
    }, {
      'walkTime': 0,
      'walkDistance': 0,
      'waitStats': {
        'min': 60,
        'avg': 421,
        'max': 558,
        'num': 7
      },
      'route': '106',
      'from': '2278',
      'to': '27329',
      'fromName': 'NW 18TH ST & NW PENNSYLVANIA AV',
      'toName': 'NORTH CAPITOL ST NE & MASSACHUSETTS',
      'routeShortName': '80',
      'routeLongName': null,
      'rideStats': {
        'min': 1182,
        'avg': 1210,
        'max': 1380,
        'num': 7
      },
      'segmentPatterns': [{
        'patternId': '62e16aa0',
        'fromIndex': 13,
        'toIndex': 29,
        'nTrips': 145
      }]
    }],
    'finalWalkTime': 482,
    'stats': {
      'min': 2834,
      'avg': 4349,
      'max': 5966,
      'num': 1
    },
    'summary': 'routes 3Y, 80 via NW 18TH ST & NW PENNSYLVANIA AV'
  }, {
    'segments': [{
      'walkTime': 300,
      'walkDistance': 420,
      'waitStats': {
        'min': 0,
        'avg': 724,
        'max': 1806,
        'num': 6918
      },
      'route': '80',
      'from': '27247',
      'to': '27405',
      'fromName': 'RT 29 LEE HWY & HIGHLAND ST',
      'toName': 'K ST NW & 17TH ST NW (MAIN) WEST',
      'routeShortName': '3Y',
      'routeLongName': null,
      'rideStats': {
        'min': 1032,
        'avg': 1286,
        'max': 1608,
        'num': 3
      },
      'segmentPatterns': [{
        'patternId': '67407f4a',
        'fromIndex': 21,
        'toIndex': 35,
        'nTrips': 6
      }]
    }, {
      'walkTime': 0,
      'walkDistance': 0,
      'waitStats': {
        'min': 204,
        'avg': 548,
        'max': 1248,
        'num': 5
      },
      'route': '170',
      'from': '27405',
      'to': '5068',
      'fromName': 'K ST NW & 17TH ST NW (MAIN) WEST',
      'toName': 'NW E ST & NW 2ND ST',
      'routeShortName': 'D6',
      'routeLongName': null,
      'rideStats': {
        'min': 936,
        'avg': 1059,
        'max': 1242,
        'num': 5
      },
      'segmentPatterns': [{
        'patternId': '333827b4',
        'fromIndex': 44,
        'toIndex': 59,
        'nTrips': 123
      }]
    }],
    'finalWalkTime': 366,
    'stats': {
      'min': 2838,
      'avg': 4342,
      'max': 6570,
      'num': 1
    },
    'summary': 'routes 3Y, D6 via K ST NW & 17TH ST NW (MAIN) WEST'
  }, {
    'segments': [{
      'walkTime': 300,
      'walkDistance': 420,
      'waitStats': {
        'min': 0,
        'avg': 724,
        'max': 1806,
        'num': 6918
      },
      'route': '80',
      'from': '27247',
      'to': '5548',
      'fromName': 'RT 29 LEE HWY & HIGHLAND ST',
      'toName': 'NW I ST & NW 14TH ST',
      'routeShortName': '3Y',
      'routeLongName': null,
      'rideStats': {
        'min': 1314,
        'avg': 1608,
        'max': 1950,
        'num': 3
      },
      'segmentPatterns': [{
        'patternId': '67407f4a',
        'fromIndex': 21,
        'toIndex': 39,
        'nTrips': 6
      }]
    }, {
      'walkTime': 210,
      'walkDistance': 295,
      'waitStats': {
        'min': 270,
        'avg': 350,
        'max': 510,
        'num': 6
      },
      'route': '6610',
      'from': '11758',
      'to': '11762',
      'fromName': 'G ST & 14TH ST NW fs eb',
      'toName': 'CONSTITUTION AVE & 3RD ST NW eb',
      'routeShortName': '922',
      'routeLongName': 'KENT ISLAND - WASHINGTON',
      'rideStats': {
        'min': 360,
        'avg': 360,
        'max': 360,
        'num': 7
      },
      'segmentPatterns': [{
        'patternId': '1fc73205',
        'fromIndex': 24,
        'toIndex': 28,
        'nTrips': 10
      }, {
        'patternId': '4ea4f68f',
        'fromIndex': 13,
        'toIndex': 17,
        'nTrips': 8
      }]
    }],
    'finalWalkTime': 496,
    'stats': {
      'min': 2950,
      'avg': 4576,
      'max': 5632,
      'num': 1
    },
    'summary': 'routes 3Y, 922 via NW I ST & NW 14TH ST'
  }]
};

/**
 * TEST ROUTES
 */

var ROUTES = [{
  'agency': '1',
  'id': '2',
  'shortName': null,
  'longName': 'Fredericksburg Line',
  'mode': 'RAIL',
  'color': 'ff0000'
}, {
  'agency': 'MCRO',
  'id': '2832',
  'shortName': 'T2',
  'longName': 'T2 Rockville-Friendship Heights',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': '1',
  'id': '4',
  'shortName': null,
  'longName': 'Manassas Line',
  'mode': 'RAIL',
  'color': '6496ff'
}, {
  'agency': 'MCRO',
  'id': '2831',
  'shortName': 'L8',
  'longName': 'L8 Aspen Hill-Friendship Heights',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': '1',
  'id': 'ES',
  'shortName': null,
  'longName': 'Baltimore - Ocean City',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2836',
  'shortName': '2',
  'longName': 'Silver Spring-Lyttonsville',
  'mode': 'BUS',
  'color': 'C0DCC0'
}, {
  'agency': 'DC',
  'id': '143',
  'shortName': 'B25',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '144',
  'shortName': 'B27',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2835',
  'shortName': '1',
  'longName': 'Silver Spring-Friendship Heights',
  'mode': 'BUS',
  'color': '808000'
}, {
  'agency': 'MCRO',
  'id': '2838',
  'shortName': '4',
  'longName': 'Silver Spring-Kensington',
  'mode': 'BUS',
  'color': '00FF00'
}, {
  'agency': 'DC',
  'id': '145',
  'shortName': 'B29',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '146',
  'shortName': 'B30',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2837',
  'shortName': '3',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'DC',
  'id': '147',
  'shortName': 'B31',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '148',
  'shortName': 'B8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2839',
  'shortName': '5',
  'longName': 'Silver Spring-Twinbrook Station',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': 'DC',
  'id': '149',
  'shortName': 'B9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '140',
  'shortName': 'B21',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_53B',
  'shortName': '53B',
  'longName': 'Ballston Metro-Old Glebe-East Falls Church Metro',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '142',
  'shortName': 'B24',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '141',
  'shortName': 'B22',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_53A',
  'shortName': '53A',
  'longName': 'Ballston Metro-Old Glebe-East Falls Church Metro',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '134',
  'shortName': 'A48',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '135',
  'shortName': 'A6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_53W',
  'shortName': '53W',
  'longName': 'Westover Loop',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '132',
  'shortName': 'A42',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '133',
  'shortName': 'A46',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '138',
  'shortName': 'A9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '139',
  'shortName': 'B2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '136',
  'shortName': 'A7',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '137',
  'shortName': 'A8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '131',
  'shortName': 'A4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '130',
  'shortName': 'A2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2854',
  'shortName': '20',
  'longName': 'Silver Spring-Hillandale',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2853',
  'shortName': '19',
  'longName': 'Silver Spring-Northwood',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2856',
  'shortName': '22',
  'longName': 'Silver Spring-Hillandale',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '1_52',
  'shortName': '52',
  'longName': 'Ballston-Virginia Hospital-East Falls Church',
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_51',
  'shortName': '51',
  'longName': 'Ballston-Virginia Hospital Center',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2855',
  'shortName': '21',
  'longName': 'Silver Spring-Briggs Chaney P&R',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '129',
  'shortName': 'A12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2850',
  'shortName': '16',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2852',
  'shortName': '18',
  'longName': 'Silver Spring Metro/Takoma -Langley',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2851',
  'shortName': '17',
  'longName': 'Silver Spring-Langley Park',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '125',
  'shortName': '9A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '126',
  'shortName': '9E',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '300',
  'shortName': 'Z29',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '127',
  'shortName': '9S',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '128',
  'shortName': 'A11',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '302',
  'shortName': 'Z8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '121',
  'shortName': '93',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '122',
  'shortName': '94',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2857',
  'shortName': '23',
  'longName': 'Friendship Heights-Sibley Hospital',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '301',
  'shortName': 'Z6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '123',
  'shortName': '96',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '124',
  'shortName': '97',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '303',
  'shortName': 'Z9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2859',
  'shortName': '25',
  'longName': 'Takoma Metro Station-Langley Park',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '120',
  'shortName': '92',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2845',
  'shortName': '11',
  'longName': 'Silver Spring-Friendship Heights',
  'mode': 'BUS',
  'color': 'DF0070'
}, {
  'agency': '1',
  'id': '1_41',
  'shortName': '41',
  'longName': 'Columbia Pike-Ballston-Court House',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2844',
  'shortName': '10',
  'longName': 'Twinbrook Station-Hillandale',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'MCRO',
  'id': '2843',
  'shortName': '9',
  'longName': 'Silver Spring-Wheaton',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'MCRO',
  'id': '2842',
  'shortName': '8',
  'longName': 'Silver Spring-Wheaton',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'MCRO',
  'id': '2841',
  'shortName': '7',
  'longName': 'Wheaton-Forest Glen',
  'mode': 'BUS',
  'color': 'FF00FF'
}, {
  'agency': '1',
  'id': '1_45',
  'shortName': '45',
  'longName': 'Columbia Pike-DHS/Sequoia-Rosslyn',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2840',
  'shortName': '6',
  'longName': 'Parkside/Grosvenor-Montgomery Mall',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'DC',
  'id': '118',
  'shortName': '8Z',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_42',
  'shortName': '42',
  'longName': 'Ballston-Pentagon',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '119',
  'shortName': '90',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '116',
  'shortName': '8S',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '117',
  'shortName': '8W',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '114',
  'shortName': '89',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '115',
  'shortName': '89M',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '112',
  'shortName': '87',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2848',
  'shortName': '14',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '113',
  'shortName': '88',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2847',
  'shortName': '13',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '110',
  'shortName': '84',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2846',
  'shortName': '12',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': 'FF80C0'
}, {
  'agency': 'DC',
  'id': '111',
  'shortName': '86',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': 'ORANGE',
  'shortName': 'Orange',
  'longName': 'Metrorail Orange Line',
  'mode': 'SUBWAY',
  'color': 'f89038'
}, {
  'agency': 'MCRO',
  'id': '2879',
  'shortName': '48',
  'longName': 'Wheaton-Rockville',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'DC',
  'id': '188',
  'shortName': 'F8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '228',
  'shortName': 'M9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '229',
  'shortName': 'N2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '187',
  'shortName': 'F6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '189',
  'shortName': 'G12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_75',
  'shortName': '75',
  'longName': 'Shirlington-Ballston-VA Square',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '220',
  'shortName': 'K9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2871',
  'shortName': '39',
  'longName': 'Glenmont-Briggs Chaney P&R',
  'mode': 'BUS',
  'color': '800000'
}, {
  'agency': 'DC',
  'id': '221',
  'shortName': 'L1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2872',
  'shortName': '41',
  'longName': 'Aspen Hill-Glenmont',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2873',
  'shortName': '42',
  'longName': 'Montgomery Mall-White Flint',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '1_77',
  'shortName': '77',
  'longName': 'Shirlington-Lyon Park-Court House',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '222',
  'shortName': 'L2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '223',
  'shortName': 'L8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '224',
  'shortName': 'M2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '225',
  'shortName': 'M4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2877',
  'shortName': '46',
  'longName': 'Mont.College-Rockv-Medical Center',
  'mode': 'BUS',
  'color': 'AE92E4'
}, {
  'agency': 'DC',
  'id': '226',
  'shortName': 'M6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2878',
  'shortName': '47',
  'longName': 'Rockville-Montgomery Mall-Bethesda',
  'mode': 'BUS',
  'color': '008080'
}, {
  'agency': '1',
  'id': '1_74',
  'shortName': '74',
  'longName': 'Douglas Park-Arlington Village/View-Pentagon City',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '227',
  'shortName': 'M8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2880',
  'shortName': '49',
  'longName': 'Rockville-Glenmont',
  'mode': 'BUS',
  'color': '00009F'
}, {
  'agency': 'DC',
  'id': '180',
  'shortName': 'E6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '181',
  'shortName': 'F1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '182',
  'shortName': 'F12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '183',
  'shortName': 'F13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '184',
  'shortName': 'F14',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '185',
  'shortName': 'F2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '186',
  'shortName': 'F4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '219',
  'shortName': 'K6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '179',
  'shortName': 'E4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '178',
  'shortName': 'E3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2868',
  'shortName': '36',
  'longName': 'Bethesda-Potomac-via Hillandale Rd',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '177',
  'shortName': 'E2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '217',
  'shortName': 'K13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2869',
  'shortName': '37',
  'longName': 'Potomac-Wheaton Metro Station',
  'mode': 'BUS',
  'color': '1D9260'
}, {
  'agency': 'DC',
  'id': '218',
  'shortName': 'K2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '176',
  'shortName': 'DCWE',
  'longName': 'DC Circulator: Georgetown-Union Station',
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6589',
  'shortName': '202',
  'longName': 'GAITHERSBURG - FORT MEADE',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '211',
  'shortName': 'J4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '212',
  'shortName': 'J5',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2860',
  'shortName': '26',
  'longName': 'Montgomery Mall-Glenmont',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '210',
  'shortName': 'J3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '215',
  'shortName': 'K11',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_62',
  'shortName': '62',
  'longName': 'Court House Metro-Lorcom Lane-Ballston Metro',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2866',
  'shortName': '33',
  'longName': 'Glenmont-Medical Center',
  'mode': 'BUS',
  'color': '8A6F91'
}, {
  'agency': 'DC',
  'id': '216',
  'shortName': 'K12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2867',
  'shortName': '34',
  'longName': 'Aspen Hill-Friendship Heights',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2864',
  'shortName': '31',
  'longName': 'Wheaton-Glenmont',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '213',
  'shortName': 'J7',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '214',
  'shortName': 'J9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6593',
  'shortName': 'MARC',
  'longName': 'PENN - WASHINGTON',
  'mode': 'RAIL',
  'color': 'FF8000'
}, {
  'agency': '1',
  'id': '6592',
  'shortName': 'MARC',
  'longName': 'BRUNSWICK - WASHINGTON',
  'mode': 'RAIL',
  'color': 'FF8000'
}, {
  'agency': '1',
  'id': '6595',
  'shortName': '310',
  'longName': 'COLUMBIA - BALTIMORE',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6594',
  'shortName': 'MARC',
  'longName': 'CAMDEN - WASHINGTON',
  'mode': 'RAIL',
  'color': 'FF8000'
}, {
  'agency': 'MCRO',
  'id': '2870',
  'shortName': '38',
  'longName': 'Wheaton-White Flint Mall',
  'mode': 'BUS',
  'color': '636F11'
}, {
  'agency': '1',
  'id': '6597',
  'shortName': '410',
  'longName': 'CHURCHVILLE BALTIMORE',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6596',
  'shortName': '320',
  'longName': 'LAUREL - BALTIMORE',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6599',
  'shortName': '420',
  'longName': 'HAVRE DE GRACE - HOPKINS',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6598',
  'shortName': '411',
  'longName': 'HICKORY TO HOPKINS HOSP',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '170',
  'shortName': 'D6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '171',
  'shortName': 'D8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '174',
  'shortName': 'DCN22',
  'longName': 'DC Circulator: Union Station - Navy Yard via Capitol Hill',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '175',
  'shortName': 'DCPOTSKY',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '172',
  'shortName': 'DC98',
  'longName': 'DC Circulator: Woodley Park - Adams Morgan-McPherson Square Metro',
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6591',
  'shortName': '204',
  'longName': 'FREDERICK - COLLEGE PARK',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6590',
  'shortName': '203',
  'longName': 'COLUMBIA - BETHESDA',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '173',
  'shortName': 'DCDGR',
  'longName': 'DC Circulator: Dupont - Georgetown - Rosslyn',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '169',
  'shortName': 'D5',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '166',
  'shortName': 'D2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '206',
  'shortName': 'J11',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '207',
  'shortName': 'J12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '165',
  'shortName': 'D14',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '168',
  'shortName': 'D4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '208',
  'shortName': 'J13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '209',
  'shortName': 'J2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '167',
  'shortName': 'D3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '202',
  'shortName': 'H6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '203',
  'shortName': 'H8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2898',
  'shortName': '71',
  'longName': 'Shady Grove-Kingsview Park and Ride',
  'mode': 'BUS',
  'color': '408080'
}, {
  'agency': 'DC',
  'id': '204',
  'shortName': 'H9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '205',
  'shortName': 'J1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2893',
  'shortName': '64',
  'longName': 'Shady Grove-Montgomery Village',
  'mode': 'BUS',
  'color': '008080'
}, {
  'agency': 'MCRO',
  'id': '2894',
  'shortName': '65',
  'longName': 'Shady Grove-Montg. Village -Express',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'MCRO',
  'id': '2895',
  'shortName': '66',
  'longName': 'Shady Grove-Traville Transit Center',
  'mode': 'BUS',
  'color': '8080C0'
}, {
  'agency': 'DC',
  'id': '200',
  'shortName': 'H3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '201',
  'shortName': 'H4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2896',
  'shortName': '67',
  'longName': 'Shady Grove-Traville Transit Center',
  'mode': 'BUS',
  'color': '008040'
}, {
  'agency': 'DC',
  'id': '9',
  'shortName': '15M',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '8',
  'shortName': '15L',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': 'CS',
  'shortName': null,
  'longName': 'Baltimore - Wilmington_DE',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '161',
  'shortName': 'C8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '3',
  'shortName': '10E',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '2',
  'shortName': '10B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '162',
  'shortName': 'D1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '1',
  'shortName': '10A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '163',
  'shortName': 'D12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '164',
  'shortName': 'D13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '7',
  'shortName': '15K',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '6',
  'shortName': '13G',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '5',
  'shortName': '13F',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '160',
  'shortName': 'C4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '4',
  'shortName': '11Y',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '159',
  'shortName': 'C29',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '158',
  'shortName': 'C28',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '157',
  'shortName': 'C26',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '156',
  'shortName': 'C22',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '155',
  'shortName': 'C21',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '154',
  'shortName': 'C2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2888',
  'shortName': '58',
  'longName': 'Shady Grove-Lakeforest',
  'mode': 'BUS',
  'color': '804000'
}, {
  'agency': '1',
  'id': '1_84',
  'shortName': '84',
  'longName': 'Douglas Park-Nauck-Pentagon City',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2886',
  'shortName': '56',
  'longName': 'Rockville-Lakeforest',
  'mode': 'BUS',
  'color': 'FFBD9D'
}, {
  'agency': 'MCRO',
  'id': '2887',
  'shortName': '57',
  'longName': 'Shady Grove-Lakeforest',
  'mode': 'BUS',
  'color': 'FF8000'
}, {
  'agency': 'MCRO',
  'id': '2884',
  'shortName': '54',
  'longName': 'Rockville-Lakeforest',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': 'MCRO',
  'id': '2885',
  'shortName': '55',
  'longName': 'Rockville-Germantown Transit Center',
  'mode': 'BUS',
  'color': 'FF4FA7'
}, {
  'agency': 'MCRO',
  'id': '2882',
  'shortName': '52',
  'longName': 'Olney-Montg General Hospital-Rockv.',
  'mode': 'BUS',
  'color': '8080C0'
}, {
  'agency': '1',
  'id': '1_87',
  'shortName': '87',
  'longName': 'Pentagon Metro-Army Navy Drive-Shirlington',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2883',
  'shortName': '53',
  'longName': 'Shady Grove-Glenmont',
  'mode': 'BUS',
  'color': 'FFFF80'
}, {
  'agency': 'MCRO',
  'id': '2892',
  'shortName': '63',
  'longName': 'Rockville-Shady Grove',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'MCRO',
  'id': '2891',
  'shortName': '61',
  'longName': 'Shady Grove-Germantown Transit',
  'mode': 'BUS',
  'color': '000080'
}, {
  'agency': 'MCRO',
  'id': '2890',
  'shortName': '60',
  'longName': 'Shady Grove-Montgomery Village',
  'mode': 'BUS',
  'color': '004000'
}, {
  'agency': 'DC',
  'id': '152',
  'shortName': 'C13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '153',
  'shortName': 'C14',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '150',
  'shortName': 'C11',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '151',
  'shortName': 'C12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2770',
  'shortName': '36',
  'longName': 'Bethesda-Potomac-via Hillandale Rd',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2771',
  'shortName': '37',
  'longName': 'Potomac-Wheaton Metro Station',
  'mode': 'BUS',
  'color': '1D9260'
}, {
  'agency': 'MCRO',
  'id': '2768',
  'shortName': '33',
  'longName': 'Glenmont-Medical Center',
  'mode': 'BUS',
  'color': '8A6F91'
}, {
  'agency': 'MCRO',
  'id': '2767',
  'shortName': '32',
  'longName': 'Bethesda-Naval Ship R&D Center',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2766',
  'shortName': '31',
  'longName': 'Wheaton-Glenmont',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2765',
  'shortName': '30',
  'longName': 'Bethesda-Medical Center',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2764',
  'shortName': '29',
  'longName': 'Bethesda-Glen Echo/Friendship Hghts',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2763',
  'shortName': '28',
  'longName': 'FREE-Silver Spring VanGo Shuttle',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2762',
  'shortName': '26',
  'longName': 'Montgomery Mall-Glenmont',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2769',
  'shortName': '34',
  'longName': 'Aspen Hill-Friendship Heights',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2781',
  'shortName': '48',
  'longName': 'Wheaton-Rockville',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'MCRO',
  'id': '2777',
  'shortName': '44',
  'longName': 'Twinbrook-Rockville',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2776',
  'shortName': '43',
  'longName': 'Shady Grove-Traville Transit Center',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'MCRO',
  'id': '2779',
  'shortName': '46',
  'longName': 'Mont.College-Rockv-Medical Center',
  'mode': 'BUS',
  'color': 'AE92E4'
}, {
  'agency': 'MCRO',
  'id': '2778',
  'shortName': '45',
  'longName': 'Rockv.Regional/Rockv.Senior/Twinbr',
  'mode': 'BUS',
  'color': '800040'
}, {
  'agency': 'DC',
  'id': 'RED',
  'shortName': 'Red',
  'longName': 'Metrorail Red Line',
  'mode': 'SUBWAY',
  'color': 'e94333'
}, {
  'agency': 'MCRO',
  'id': '2772',
  'shortName': '38',
  'longName': 'Wheaton-White Flint Mall',
  'mode': 'BUS',
  'color': '636F11'
}, {
  'agency': 'MCRO',
  'id': '2775',
  'shortName': '42',
  'longName': 'Montgomery Mall-White Flint',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2741',
  'shortName': '5',
  'longName': 'Silver Spring-Twinbrook Station',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': 'MCRO',
  'id': '2740',
  'shortName': '4',
  'longName': 'Silver Spring-Kensington',
  'mode': 'BUS',
  'color': '00FF00'
}, {
  'agency': 'MCRO',
  'id': '2746',
  'shortName': '10',
  'longName': 'Twinbrook Station-Hillandale',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'MCRO',
  'id': '2745',
  'shortName': '9',
  'longName': 'Silver Spring-Wheaton',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'MCRO',
  'id': '2744',
  'shortName': '8',
  'longName': 'Silver Spring-Wheaton',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'MCRO',
  'id': '2743',
  'shortName': '7',
  'longName': 'Wheaton-Forest Glen',
  'mode': 'BUS',
  'color': 'FF00FF'
}, {
  'agency': '1',
  'id': '6818',
  'shortName': '610',
  'longName': 'WALDORF - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2749',
  'shortName': '13',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2748',
  'shortName': '12',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': 'FF80C0'
}, {
  'agency': '1',
  'id': '6819',
  'shortName': '620',
  'longName': 'WALDORF - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2747',
  'shortName': '11',
  'longName': 'Silver Spring-Friendship Heights',
  'mode': 'BUS',
  'color': 'DF0070'
}, {
  'agency': 'DC',
  'id': '195',
  'shortName': 'H1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '194',
  'shortName': 'G8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '197',
  'shortName': 'H12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '196',
  'shortName': 'H11',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '191',
  'shortName': 'G14',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '190',
  'shortName': 'G13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '193',
  'shortName': 'G2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '192',
  'shortName': 'G16',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2760',
  'shortName': '24',
  'longName': 'Hillandale-Takoma',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2751',
  'shortName': '15',
  'longName': 'Silver Spring-Langley Park',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2750',
  'shortName': '14',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2753',
  'shortName': '17',
  'longName': 'Silver Spring-Langley Park',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2752',
  'shortName': '16',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2755',
  'shortName': '19',
  'longName': 'Silver Spring-Northwood',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2754',
  'shortName': '18',
  'longName': 'Silver Spring Metro/Takoma -Langley',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2757',
  'shortName': '21',
  'longName': 'Silver Spring-Briggs Chaney P&R',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2756',
  'shortName': '20',
  'longName': 'Silver Spring-Hillandale',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2758',
  'shortName': '22',
  'longName': 'Silver Spring-Hillandale',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '198',
  'shortName': 'H13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '199',
  'shortName': 'H2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': 'BLUE',
  'shortName': 'Blue',
  'longName': 'Metrorail Blue Line',
  'mode': 'SUBWAY',
  'color': '0d7bba'
}, {
  'agency': '1',
  'id': '6723',
  'shortName': '950',
  'longName': 'KENT IS - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6722',
  'shortName': '929',
  'longName': 'COLUMBIA - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2737',
  'shortName': '1',
  'longName': 'Silver Spring-Friendship Heights',
  'mode': 'BUS',
  'color': '808000'
}, {
  'agency': '1',
  'id': '6725',
  'shortName': '995',
  'longName': 'CLARKSVILLE - WASHINGTON',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2738',
  'shortName': '2',
  'longName': 'Silver Spring-Lyttonsville',
  'mode': 'BUS',
  'color': 'C0DCC0'
}, {
  'agency': 'MCRO',
  'id': '2739',
  'shortName': '3',
  'longName': 'Silver Spring-Takoma',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': '1',
  'id': '6822',
  'shortName': '650',
  'longName': 'LA PLATA, WALDORF & ACCOKEEK - DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6820',
  'shortName': '630',
  'longName': 'LA PLATA/WALDORF - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6821',
  'shortName': '640',
  'longName': 'WALDORF & ACCOKEEK - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6720',
  'shortName': '915',
  'longName': 'COLUMBIA - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6715',
  'shortName': '904',
  'longName': 'NORTH BEACH/PINDELL - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6716',
  'shortName': '905',
  'longName': 'CHARLOTTE HALL/WALDORF WASHINGTON D',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6710',
  'shortName': '64X',
  'longName': 'NORTH AVE - RIVIERA BEACH EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'MCRO',
  'id': '2910',
  'shortName': '97',
  'longName': 'Germantown Transit-Gunners Lake',
  'mode': 'BUS',
  'color': '400040'
}, {
  'agency': 'MCRO',
  'id': '2911',
  'shortName': '98',
  'longName': 'Germantown Transit Center-Kingsview',
  'mode': 'BUS',
  'color': '8080FF'
}, {
  'agency': 'MCRO',
  'id': '2813',
  'shortName': '98',
  'longName': 'Germantown Transit Center-Kingsview',
  'mode': 'BUS',
  'color': '8080FF'
}, {
  'agency': 'MCRO',
  'id': '2814',
  'shortName': '100',
  'longName': 'Shady Grove-Germantown Transit',
  'mode': 'BUS',
  'color': '008080'
}, {
  'agency': '1',
  'id': '6713',
  'shortName': '902',
  'longName': 'ST LEONARD - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2811',
  'shortName': '96',
  'longName': 'Grosvenor-Rock Spring-Montg Mall',
  'mode': 'BUS',
  'color': 'DCB8B8'
}, {
  'agency': 'MCRO',
  'id': '2812',
  'shortName': '97',
  'longName': 'Germantown Transit-Gunners Lake',
  'mode': 'BUS',
  'color': '400040'
}, {
  'agency': '1',
  'id': '6719',
  'shortName': '909',
  'longName': 'CALIFORNIA-WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2909',
  'shortName': '96',
  'longName': 'Grosvenor-Rock Spring-Montg Mall',
  'mode': 'BUS',
  'color': 'DCB8B8'
}, {
  'agency': 'MCRO',
  'id': '2806',
  'shortName': '81',
  'longName': 'Rockville-White Flint',
  'mode': 'BUS',
  'color': 'FF8000'
}, {
  'agency': 'MCRO',
  'id': '2808',
  'shortName': '90',
  'longName': 'Shady Grove-Damascus',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6704',
  'shortName': '411',
  'longName': 'HICKORY TO HOPKINS HOSP',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6701',
  'shortName': '310',
  'longName': 'COLUMBIA - BALTIMORE',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'MCRO',
  'id': '2802',
  'shortName': '75',
  'longName': 'Clarksburg Correctional-Germantown',
  'mode': 'BUS',
  'color': 'FFC4E1'
}, {
  'agency': 'MCRO',
  'id': '2803',
  'shortName': '76',
  'longName': 'Shady Grove-Poolesville',
  'mode': 'BUS',
  'color': '804040'
}, {
  'agency': 'MCRO',
  'id': '2804',
  'shortName': '78',
  'longName': 'Shady Grove-Kingsview Park and Ride',
  'mode': 'BUS',
  'color': 'FF8080'
}, {
  'agency': 'MCRO',
  'id': '2805',
  'shortName': '79',
  'longName': 'Shady Grove-Germantown Transit',
  'mode': 'BUS',
  'color': '808000'
}, {
  'agency': 'MCRO',
  'id': '2901',
  'shortName': '76',
  'longName': 'Shady Grove-Poolesville',
  'mode': 'BUS',
  'color': '804040'
}, {
  'agency': 'MCRO',
  'id': '2903',
  'shortName': '79',
  'longName': 'Shady Grove-Germantown Transit',
  'mode': 'BUS',
  'color': '808000'
}, {
  'agency': 'MCRO',
  'id': '2904',
  'shortName': '81',
  'longName': 'Rockville-White Flint',
  'mode': 'BUS',
  'color': 'FF8000'
}, {
  'agency': 'MCRO',
  'id': '2801',
  'shortName': '74',
  'longName': 'Shady Grove-Germantown Transit',
  'mode': 'BUS',
  'color': '8000FF'
}, {
  'agency': 'MCRO',
  'id': '2905',
  'shortName': '83',
  'longName': 'Germantown Transit Center-Milestone',
  'mode': 'BUS',
  'color': '54621E'
}, {
  'agency': 'MCRO',
  'id': '2907',
  'shortName': '93',
  'longName': 'Health & Human Services-Twinbrook',
  'mode': 'BUS',
  'color': '808000'
}, {
  'agency': 'MCRO',
  'id': '2908',
  'shortName': '94',
  'longName': 'MARC Rail-Clarksburg',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': '1',
  'id': '6609',
  'shortName': '915',
  'longName': 'COLUMBIA - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6608',
  'shortName': '909',
  'longName': 'CALIFORNIA-WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '49',
  'shortName': '24T',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6600',
  'shortName': '64X',
  'longName': 'NORTH AVE - RIVIERA BEACH EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'DC',
  'id': '48',
  'shortName': '23C',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6603',
  'shortName': '903',
  'longName': 'CHARLOTTE HALL - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6602',
  'shortName': '902',
  'longName': 'ST LEONARD - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6605',
  'shortName': '905',
  'longName': 'CHARLOTTE HALL/WALDORF WASHINGTON D',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '45',
  'shortName': '22A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6604',
  'shortName': '904',
  'longName': 'NORTH BEACH WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '44',
  'shortName': '21D',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '47',
  'shortName': '23A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '46',
  'shortName': '22B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '51',
  'shortName': '25B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '52',
  'shortName': '25C',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '53',
  'shortName': '25D',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '54',
  'shortName': '25E',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '50',
  'shortName': '25A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6610',
  'shortName': '922',
  'longName': 'KENT ISLAND - WASHINGTON',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6614',
  'shortName': '995',
  'longName': 'CLARKSVILLE - WASHINGTON',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6613',
  'shortName': '991',
  'longName': 'HAGERSTOWN - ROCK SPRINGS',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6612',
  'shortName': '950',
  'longName': 'KENT IS - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': '1',
  'id': '6611',
  'shortName': '929',
  'longName': 'COLUMBIA - WASHINGTON DC',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '59',
  'shortName': '28T',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '58',
  'shortName': '28G',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '57',
  'shortName': '28F',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '56',
  'shortName': '28A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '55',
  'shortName': '26A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '64',
  'shortName': '29H',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '65',
  'shortName': '29K',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '62',
  'shortName': '29E',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '63',
  'shortName': '29G',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '60',
  'shortName': '28X',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '61',
  'shortName': '29C',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '67',
  'shortName': '29X',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '66',
  'shortName': '29N',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '69',
  'shortName': '2B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '68',
  'shortName': '2A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '70',
  'shortName': '2T',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '71',
  'shortName': '31',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '72',
  'shortName': '32',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '73',
  'shortName': '34',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'PRTC',
  'id': '1649',
  'shortName': 'L200',
  'longName': 'Lake Ridge Crystal City OmniRide',
  'mode': 'BUS',
  'color': 'FF00FF'
}, {
  'agency': 'DC',
  'id': '74',
  'shortName': '36',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': 'WS',
  'shortName': null,
  'longName': 'Baltimore - Grantsville',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'PRTC',
  'id': '1647',
  'shortName': 'DumfLK',
  'longName': 'Dumfries OmniLink',
  'mode': 'BUS',
  'color': '008000'
}, {
  'agency': 'DC',
  'id': '75',
  'shortName': '37',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '76',
  'shortName': '38B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'PRTC',
  'id': '1648',
  'shortName': 'L100',
  'longName': 'Lake Ridge Washington OmniRide',
  'mode': 'BUS',
  'color': 'FF00FF'
}, {
  'agency': 'PRTC',
  'id': '1645',
  'shortName': 'DL',
  'longName': 'DC Lake Ridge Dale City OmniRide',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'PRTC',
  'id': '1646',
  'shortName': 'DLX',
  'longName': 'Commuter Lot Shuttle',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'PRTC',
  'id': '1643',
  'shortName': 'D300',
  'longName': 'Dale City Navy Yard OmniRide',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'PRTC',
  'id': '1644',
  'shortName': 'DaleLK',
  'longName': 'Dale City OmniLink',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'PRTC',
  'id': '1641',
  'shortName': 'D100',
  'longName': 'Dale City Washington OmniRide',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'PRTC',
  'id': '1642',
  'shortName': 'D200',
  'longName': 'Dale City Crystal City OmniRide',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'PRTC',
  'id': '1640',
  'shortName': 'CCC',
  'longName': 'Cross County Connector',
  'mode': 'BUS',
  'color': '400080'
}, {
  'agency': 'DC',
  'id': '79',
  'shortName': '3T',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '78',
  'shortName': '3A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '77',
  'shortName': '39',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '82',
  'shortName': '43',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '83',
  'shortName': '4A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '80',
  'shortName': '3Y',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '81',
  'shortName': '42',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '86',
  'shortName': '53',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '87',
  'shortName': '54',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '84',
  'shortName': '4B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '85',
  'shortName': '52',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'PRTC',
  'id': '1639',
  'shortName': 'C1',
  'longName': 'Capitol Hill OmniRide',
  'mode': 'BUS',
  'color': '804000'
}, {
  'agency': 'PRTC',
  'id': '1670',
  'shortName': 'WoodLK',
  'longName': 'Woodbridge Lake Ridge Omnilink',
  'mode': 'BUS',
  'color': 'FF00FF'
}, {
  'agency': 'PRTC',
  'id': '1671',
  'shortName': 'G',
  'longName': 'Gainesville',
  'mode': 'BUS',
  'color': 'C66300'
}, {
  'agency': 'PRTC',
  'id': '1663',
  'shortName': 'T',
  'longName': 'Tysons Corner OmniRide',
  'mode': 'BUS',
  'color': '52A3A3'
}, {
  'agency': 'DC',
  'id': '10',
  'shortName': '16A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '17',
  'shortName': '16K',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '18',
  'shortName': '16L',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '15',
  'shortName': '16H',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '16',
  'shortName': '16J',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '13',
  'shortName': '16E',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '14',
  'shortName': '16G',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '11',
  'shortName': '16B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '12',
  'shortName': '16D',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '19',
  'shortName': '16P',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'PRTC',
  'id': '1660',
  'shortName': 'Rt1LK',
  'longName': 'Route 1 OmniLink',
  'mode': 'BUS',
  'color': '008000'
}, {
  'agency': 'PRTC',
  'id': '1651',
  'shortName': 'M',
  'longName': 'Manassas OmniRide',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'PRTC',
  'id': '1650',
  'shortName': 'LH',
  'longName': 'Linton Hall Metro Direct',
  'mode': 'BUS',
  'color': 'C66300'
}, {
  'agency': 'PRTC',
  'id': '1653',
  'shortName': 'MC',
  'longName': 'Montclair OmniRide',
  'mode': 'BUS',
  'color': '008000'
}, {
  'agency': 'PRTC',
  'id': '1652',
  'shortName': 'ManLK',
  'longName': 'Manassas OmniLink',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'PRTC',
  'id': '1655',
  'shortName': 'MPLK',
  'longName': 'Manassas Park OmniLink',
  'mode': 'BUS',
  'color': 'CEA604'
}, {
  'agency': 'PRTC',
  'id': '1654',
  'shortName': 'MMD',
  'longName': 'Manassas Metro Direct',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'PRTC',
  'id': '1657',
  'shortName': 'R',
  'longName': 'Rosslyn Ballston OmniRide',
  'mode': 'BUS',
  'color': '800040'
}, {
  'agency': 'PRTC',
  'id': '1659',
  'shortName': 'Rt1',
  'longName': 'Route 1 OmniRide',
  'mode': 'BUS',
  'color': '008000'
}, {
  'agency': 'DC',
  'id': '21',
  'shortName': '16Y',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '20',
  'shortName': '16X',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'PRTC',
  'id': '1658',
  'shortName': 'RS',
  'longName': 'South Route 1 OmniRide',
  'mode': 'BUS',
  'color': '008000'
}, {
  'agency': 'DC',
  'id': '22',
  'shortName': '17A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '23',
  'shortName': '17B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '24',
  'shortName': '17F',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '25',
  'shortName': '17G',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '26',
  'shortName': '17H',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '27',
  'shortName': '17K',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '28',
  'shortName': '17L',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '29',
  'shortName': '17M',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_87X',
  'shortName': '87X',
  'longName': 'Pentagon Metro-Army Navy Drive-Shirlington',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': 'YELLOW',
  'shortName': 'Yellow',
  'longName': 'Metrorail Yellow Line',
  'mode': 'SUBWAY',
  'color': 'fde310'
}, {
  'agency': 'DC',
  'id': '30',
  'shortName': '18E',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '32',
  'shortName': '18G',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '31',
  'shortName': '18F',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '35',
  'shortName': '18P',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '36',
  'shortName': '18R',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '33',
  'shortName': '18H',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '34',
  'shortName': '18J',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '39',
  'shortName': '1B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '37',
  'shortName': '18S',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '38',
  'shortName': '1A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': 'GREEN',
  'shortName': 'Green',
  'longName': 'Metrorail Green Line',
  'mode': 'SUBWAY',
  'color': '009d57'
}, {
  'agency': '1',
  'id': '1_87A',
  'shortName': '87A',
  'longName': 'Pentagon Metro-Army Navy Drive-Shirlington',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'PRTC',
  'id': '1672',
  'shortName': 'PWMD',
  'longName': 'Prince William Metro Direct',
  'mode': 'BUS',
  'color': '008080'
}, {
  'agency': 'DC',
  'id': '43',
  'shortName': '21A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '42',
  'shortName': '1Z',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '41',
  'shortName': '1E',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '40',
  'shortName': '1C',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6693',
  'shortName': 'LIGHT RAIL',
  'longName': 'LIGHT RAIL',
  'mode': 'TRAM',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4486',
  'shortName': '555',
  'longName': 'Sunset Hills - WFC',
  'mode': 'BUS',
  'color': '008000'
}, {
  'agency': 'Fairfax Connector',
  'id': '4487',
  'shortName': '557',
  'longName': '557',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4484',
  'shortName': '553',
  'longName': '553',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6691',
  'shortName': '160',
  'longName': 'WHISPERING WOOD/ESSEX- HOPKINS HOSP',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6692',
  'shortName': '19X',
  'longName': 'STATE CTR. - CARNEY/GOUCHER BLV EXP',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'Fairfax Connector',
  'id': '4485',
  'shortName': '554',
  'longName': '554',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4530',
  'shortName': '632',
  'longName': 'WESTFIELDS',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4482',
  'shortName': '551',
  'longName': '551',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6697',
  'shortName': '204',
  'longName': 'FREDERICK - COLLEGE PARK',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4483',
  'shortName': '552',
  'longName': '552',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4531',
  'shortName': '301',
  'longName': 'Hayfield - Telegraph Rd Line',
  'mode': 'BUS',
  'color': 'FF8000'
}, {
  'agency': 'Fairfax Connector',
  'id': '4480',
  'shortName': '495',
  'longName': 'EXPRESS CONNECTOR BURKE VRE',
  'mode': 'BUS',
  'color': 'FF80C0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4481',
  'shortName': '505',
  'longName': 'RTC - WFC',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6554',
  'shortName': '044',
  'longName': 'ROSEDALE IND PK - SECURITY SQ. MALL',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2791',
  'shortName': '59',
  'longName': 'Rockville-Montgomery Village',
  'mode': 'BUS',
  'color': '008000'
}, {
  'agency': '1',
  'id': '6555',
  'shortName': '046',
  'longName': 'CEDONIA-PARADISE QUICKBUS',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': 'DC',
  'id': '250',
  'shortName': 'R4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6552',
  'shortName': '03X',
  'longName': 'CROMWELL BRIDGE - INNER HARBOR EXP',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'DC',
  'id': '252',
  'shortName': null,
  'longName': 'Richmond Highway Express Bus',
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2793',
  'shortName': '61',
  'longName': 'Shady Grove-Germantown Transit',
  'mode': 'BUS',
  'color': '000080'
}, {
  'agency': '1',
  'id': '6553',
  'shortName': '040',
  'longName': 'SECURITY SQ. / MIDDLE RIVER.',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': '1',
  'id': '6550',
  'shortName': '036',
  'longName': 'NORTHERN PKWY & YORK - RIVERVIEW',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6690',
  'shortName': '15X',
  'longName': 'PERRY HALL - PACA STREET EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'DC',
  'id': '258',
  'shortName': 'S2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2787',
  'shortName': '55',
  'longName': 'Rockville-Germantown Transit Center',
  'mode': 'BUS',
  'color': 'FF4FA7'
}, {
  'agency': 'DC',
  'id': '257',
  'shortName': 'S1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'Fairfax Connector',
  'id': '4529',
  'shortName': '631',
  'longName': 'LITTLE ROCKY RUN',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'DC',
  'id': '259',
  'shortName': 'S4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6549',
  'shortName': '035',
  'longName': 'WHITEMARSH P&R - UMBC / BLIND IND.',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2784',
  'shortName': '52',
  'longName': 'Olney-Montg General Hospital-Rockv.',
  'mode': 'BUS',
  'color': '8080C0'
}, {
  'agency': '1',
  'id': '6548',
  'shortName': '033',
  'longName': 'ROGERS STATION - MORAVIA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'MCRO',
  'id': '2783',
  'shortName': '51',
  'longName': 'Glenmont-Norbeck P&R',
  'mode': 'BUS',
  'color': 'A6DF7B'
}, {
  'agency': '1',
  'id': '6547',
  'shortName': '030',
  'longName': 'BAYVIEW - EDMONDSON VILLAGE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6546',
  'shortName': '029',
  'longName': 'CHERRY HILL STATION SHUTTLE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6545',
  'shortName': '027',
  'longName': 'PLAZA STATION - PORT COVINGTON',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4524',
  'shortName': '162',
  'longName': 'Huntington-Hospital Loop',
  'mode': 'BUS',
  'color': '8080FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4523',
  'shortName': '161',
  'longName': 'Huntington-Hospital Loop',
  'mode': 'BUS',
  'color': '8080FF'
}, {
  'agency': '1',
  'id': '6689',
  'shortName': '150',
  'longName': 'COLUMBIA-SARATOGA EXT.',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6688',
  'shortName': '120',
  'longName': 'WHITE MARSH - MONUMENT & RUTLAND',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'Fairfax Connector',
  'id': '4528',
  'shortName': '630',
  'longName': 'CENTREVILLE',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4479',
  'shortName': '494',
  'longName': 'EXPRESS CONNECTOR SPRINGFIELD',
  'mode': 'BUS',
  'color': 'FF80C0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4527',
  'shortName': '623',
  'longName': 'Fairfax Govt Center',
  'mode': 'BUS',
  'color': '000080'
}, {
  'agency': 'Fairfax Connector',
  'id': '4526',
  'shortName': '622',
  'longName': 'Fairfax Towne Center',
  'mode': 'BUS',
  'color': '00FF00'
}, {
  'agency': 'Fairfax Connector',
  'id': '4478',
  'shortName': '493',
  'longName': 'EXPRESS CONNECTOR LORTON VRE',
  'mode': 'BUS',
  'color': 'FF80C0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4477',
  'shortName': '466',
  'longName': 'VIENNA-OAKTON',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4525',
  'shortName': '621',
  'longName': 'Fairfax Govt Center',
  'mode': 'BUS',
  'color': 'F4AD4D'
}, {
  'agency': 'Fairfax Connector',
  'id': '4473',
  'shortName': '425',
  'longName': 'TWP/WFC',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'Fairfax Connector',
  'id': '4474',
  'shortName': '427',
  'longName': 'TWP/WFC',
  'mode': 'BUS',
  'color': '00FF00'
}, {
  'agency': 'Fairfax Connector',
  'id': '4475',
  'shortName': '462',
  'longName': 'Vienna DunnLoring',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4476',
  'shortName': '463',
  'longName': 'Vienna Metro/Dunn Loring',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4470',
  'shortName': '395',
  'longName': 'Backlick/Pentagon Express',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4471',
  'shortName': '401',
  'longName': 'Backlick - Gallows Road Line',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4472',
  'shortName': '402',
  'longName': 'Tysons-Gallows-Springfield Line',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'DC',
  'id': '262',
  'shortName': 'T18',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '263',
  'shortName': 'T2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6564',
  'shortName': '056',
  'longName': 'GLYNDON - OWINGS MILLS MALL',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6565',
  'shortName': '057',
  'longName': 'SECURITY SQ. MALL/SSA - ROGERS STA.',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '260',
  'shortName': 'S9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '261',
  'shortName': 'SHUTTLE',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6560',
  'shortName': '052',
  'longName': 'MILFORD MILL RD-MONDAWMIN STAT',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6561',
  'shortName': '053',
  'longName': 'OLD COURT METRO-MONDAWMIN METRO',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6562',
  'shortName': '054',
  'longName': 'RANDALLSTOWN - NORTH & PENN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '269',
  'shortName': 'U8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2799',
  'shortName': '70',
  'longName': 'Germantown-Bethesda EXPRESS',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': 'DC',
  'id': '268',
  'shortName': 'U6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '267',
  'shortName': 'U5',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '266',
  'shortName': 'U4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'MCRO',
  'id': '2795',
  'shortName': '64',
  'longName': 'Shady Grove-Montgomery Village',
  'mode': 'BUS',
  'color': '008080'
}, {
  'agency': '1',
  'id': '6559',
  'shortName': '051',
  'longName': 'ROGERS STATION-PATAPSCO STATION',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '265',
  'shortName': 'U2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '264',
  'shortName': 'TAGS',
  'longName': 'Springfield Circulator-Metro Park Shuttle',
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6558',
  'shortName': '050',
  'longName': 'BELAIR EDISON SHUTTLE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4467',
  'shortName': '372',
  'longName': 'Lorton-Alban Road',
  'mode': 'BUS',
  'color': 'FF00FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4466',
  'shortName': '371',
  'longName': 'Lorton-Fullerton Road',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4469',
  'shortName': '394',
  'longName': 'Saratoga - Pentagon Express',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4468',
  'shortName': '373',
  'longName': 'LORTON-FULLERTON ROAD',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4460',
  'shortName': '310',
  'longName': 'Franconia-Rolling Valley Line',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4461',
  'shortName': '321',
  'longName': 'Greater Springfield Circulator',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6676',
  'shortName': '061',
  'longName': 'BELLEMORE - CHARLES AND PRATT',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6673',
  'shortName': '059',
  'longName': 'OWINGS MILLS MALL - RP STATION',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6674',
  'shortName': '05X',
  'longName': 'CEDONIA - EUTAW & SARATOGA EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6671',
  'shortName': '057',
  'longName': 'SECURITY SQ. MALL/SSA - ROGERS STA.',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4464',
  'shortName': '334',
  'longName': 'Newington Circulator',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6672',
  'shortName': '058',
  'longName': 'RP STATION - WHITE MARSH',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4465',
  'shortName': '335',
  'longName': '335',
  'mode': 'BUS',
  'color': 'FF00FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4462',
  'shortName': '322',
  'longName': 'Greater Springfield Circulator',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4463',
  'shortName': '333',
  'longName': 'NGA CIRCULATOR',
  'mode': 'BUS',
  'color': 'FF80C0'
}, {
  'agency': '1',
  'id': '6670',
  'shortName': '056',
  'longName': 'GLYNDON - OWINGS MILLS MALL',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6573',
  'shortName': '077',
  'longName': 'OLD COURT STA - PATAPSCO STA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6570',
  'shortName': '061',
  'longName': 'BELLEMORE - CHARLES AND PRATT',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6571',
  'shortName': '064',
  'longName': 'NORTH AVE - CURTIS BAY / ENERGY PKY',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6576',
  'shortName': '098',
  'longName': 'HAMPDEN SHUTTLE',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': '1',
  'id': '6577',
  'shortName': '099',
  'longName': 'OLD COURT - BWI AIRPORT',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6574',
  'shortName': '091',
  'longName': 'SINAI HOSPITAL - DOWNTOWN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '230',
  'shortName': 'N3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '232',
  'shortName': 'N6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6569',
  'shortName': '060',
  'longName': 'RP STATION - MT. WASH/GREENSPRING',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '231',
  'shortName': 'N4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '234',
  'shortName': 'NH3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6568',
  'shortName': '05X',
  'longName': 'CEDONIA - EUTAW & SARATOGA EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6567',
  'shortName': '059',
  'longName': 'OWINGS MILLS MALL - RP STATION',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '233',
  'shortName': 'NH1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '236',
  'shortName': 'P17',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '235',
  'shortName': 'P12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '238',
  'shortName': 'P19',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '237',
  'shortName': 'P18',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'Fairfax Connector',
  'id': '4458',
  'shortName': '305',
  'longName': 'Newington Forest - Silverbrook Road',
  'mode': 'BUS',
  'color': 'FF8000'
}, {
  'agency': 'DC',
  'id': '239',
  'shortName': 'P6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'Fairfax Connector',
  'id': '4456',
  'shortName': '232',
  'longName': 'Beulah/Kingstowne',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4455',
  'shortName': '231',
  'longName': 'Beulah/Kingstowne',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6669',
  'shortName': '055',
  'longName': 'FOX RIDGE - TOWSON',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6668',
  'shortName': '054',
  'longName': 'RANDALLSTOWN - NORTH & PENN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6667',
  'shortName': '053',
  'longName': 'OLD COURT METRO-MONDAWMIN METRO',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4459',
  'shortName': '306',
  'longName': 'GMU Line',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6666',
  'shortName': '052',
  'longName': 'MILFORD MILL RD-MONDAWMIN STAT',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6684',
  'shortName': 'METRO',
  'longName': 'METRO',
  'mode': 'SUBWAY',
  'color': '008000'
}, {
  'agency': '1',
  'id': '6686',
  'shortName': '104',
  'longName': 'CROMWELL BRIDGE - JOHNS HOPKINS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6687',
  'shortName': '10X',
  'longName': 'ROLLING ROAD - DOWNTOWN EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'Fairfax Connector',
  'id': '4450',
  'shortName': '152',
  'longName': 'Richmond Hwy Line',
  'mode': 'BUS',
  'color': '0080FF'
}, {
  'agency': '1',
  'id': '6680',
  'shortName': '091',
  'longName': 'SINAI HOSPITAL - DOWNTOWN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4451',
  'shortName': '159',
  'longName': 'Engleside Limited Stop',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6681',
  'shortName': '097',
  'longName': 'MONDAWMIN SHUTTLE',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': '1',
  'id': '6682',
  'shortName': '098',
  'longName': 'HAMPDEN SHUTTLE',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': '1',
  'id': '6580',
  'shortName': '104',
  'longName': 'CROMWELL BRIDGE - JOHNS HOPKINS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6683',
  'shortName': '099',
  'longName': 'OLD COURT - BWI AIRPORT',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4454',
  'shortName': '171',
  'longName': 'Huntington - Lorton Line',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': '1',
  'id': '6581',
  'shortName': '10X',
  'longName': 'ROLLING ROAD - DOWNTOWN EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6583',
  'shortName': '150',
  'longName': 'COLUMBIA-SARATOGA EXT.',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6584',
  'shortName': '15X',
  'longName': 'PERRY HALL - PACA STREET EXPRESS',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6585',
  'shortName': '160',
  'longName': 'WHISPERING WOOD/ESSEX- HOPKINS HOSP',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'DC',
  'id': '240',
  'shortName': 'Q1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '241',
  'shortName': 'Q2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6586',
  'shortName': '19X',
  'longName': 'STATE CTR. - CARNEY/GOUCHER BLV EXP',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': '1',
  'id': '6587',
  'shortName': 'LIGHT RAIL',
  'longName': 'LIGHT RAIL',
  'mode': 'TRAM',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6588',
  'shortName': '201',
  'longName': 'GAITHERSBURG - BWI BUS DIST',
  'mode': 'BUS',
  'color': 'A6CAF0'
}, {
  'agency': 'DC',
  'id': '245',
  'shortName': 'R1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '244',
  'shortName': 'Q6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6578',
  'shortName': 'METRO',
  'longName': 'METRO',
  'mode': 'SUBWAY',
  'color': '008000'
}, {
  'agency': 'DC',
  'id': '243',
  'shortName': 'Q5',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '242',
  'shortName': 'Q4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '249',
  'shortName': 'R3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '248',
  'shortName': 'R2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '247',
  'shortName': 'R12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '246',
  'shortName': 'R11',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'Fairfax Connector',
  'id': '4447',
  'shortName': '101',
  'longName': 'Fort Hunt Road Line',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'Fairfax Connector',
  'id': '4449',
  'shortName': '151',
  'longName': 'Richmond Hwy Line',
  'mode': 'BUS',
  'color': '0080FF'
}, {
  'agency': '1',
  'id': '6677',
  'shortName': '064',
  'longName': 'NORTH AVE - CURTIS BAY / ENERGY PKY',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4448',
  'shortName': '109',
  'longName': 'Huntington - Rose Hill Loop',
  'mode': 'BUS',
  'color': '00FF00'
}, {
  'agency': '1',
  'id': '6679',
  'shortName': '077',
  'longName': 'OLD COURT STA - PATAPSCO STA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '90',
  'shortName': '62',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '294',
  'shortName': 'Y7',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '293',
  'shortName': 'Y5',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '296',
  'shortName': 'Y9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '295',
  'shortName': 'Y8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '290',
  'shortName': 'X3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '292',
  'shortName': 'X9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '291',
  'shortName': 'X8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6650',
  'shortName': '024',
  'longName': 'WHISPERING WOODS - MORAVIA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '98',
  'shortName': '7C',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '97',
  'shortName': '7B',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '96',
  'shortName': '7A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '95',
  'shortName': '79',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6654',
  'shortName': '033',
  'longName': 'ROGERS STATION - MORAVIA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '94',
  'shortName': '74',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6653',
  'shortName': '030',
  'longName': 'BAYVIEW - EDMONDSON VILLAGE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '93',
  'shortName': '70',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '92',
  'shortName': '64',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6651',
  'shortName': '027',
  'longName': 'PLAZA STATION - PORT COVINGTON',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '91',
  'shortName': '63',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6646',
  'shortName': '020',
  'longName': 'SECURITY SQUARE MALL  -  DUNDALK',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6647',
  'shortName': '021',
  'longName': 'FELLS POINT - MONDAWMIN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6644',
  'shortName': '018',
  'longName': 'GLEN - BAAS & TALMUDICAL',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': '1',
  'id': '6645',
  'shortName': '019',
  'longName': 'STATE CENTER - GOUCHER/CARNEY',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6648',
  'shortName': '022',
  'longName': 'BAYVIEW - MONDAWMIN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '88',
  'shortName': '5A',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6649',
  'shortName': '023',
  'longName': 'RT40 & ROLLING - FOX RIDGE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '89',
  'shortName': '60',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '297',
  'shortName': 'Z11',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '298',
  'shortName': 'Z13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '299',
  'shortName': 'Z2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_61B',
  'shortName': '61B',
  'longName': 'Rosslyn-Court House Metro Shuttle',
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '1_61A',
  'shortName': '61A',
  'longName': 'Rosslyn-Court House Metro Shuttle',
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6661',
  'shortName': '046',
  'longName': 'CEDONIA-PARADISE QUICKBUS',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': '1',
  'id': '6660',
  'shortName': '044',
  'longName': 'ROSEDALE IND PK - SECURITY SQ. MALL',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6663',
  'shortName': '048',
  'longName': 'TOWSON - TRANSIT CTR',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': '1',
  'id': '6662',
  'shortName': '047',
  'longName': 'WALBROOK-OVERLEA QUICKBUS',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': '1',
  'id': '6665',
  'shortName': '051',
  'longName': 'ROGERS STATION-PATAPSCO STATION',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '106',
  'shortName': '80',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '105',
  'shortName': '7Y',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6656',
  'shortName': '036',
  'longName': 'NORTHERN PKWY & YORK - RIVERVIEW',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6657',
  'shortName': '038',
  'longName': 'NORTH BEND-COLD SPRING & GRANDVIEW',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '104',
  'shortName': '7X',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '103',
  'shortName': '7W',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6658',
  'shortName': '03X',
  'longName': 'CROMWELL BRIDGE - INNER HARBOR EXP',
  'mode': 'BUS',
  'color': 'FF0000'
}, {
  'agency': 'DC',
  'id': '102',
  'shortName': '7P',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6659',
  'shortName': '040',
  'longName': 'SECURITY SQ. / MIDDLE RIVER.',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': 'DC',
  'id': '99',
  'shortName': '7F',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '101',
  'shortName': '7M',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '100',
  'shortName': '7H',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '109',
  'shortName': '83',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '108',
  'shortName': '82',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '107',
  'shortName': '81',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '270',
  'shortName': 'V12',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '272',
  'shortName': 'V15',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6533',
  'shortName': '013',
  'longName': 'CANTON/FELLS POINT - WALBROOK',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '271',
  'shortName': 'V14',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '274',
  'shortName': 'V7',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '273',
  'shortName': 'V5',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6530',
  'shortName': '010',
  'longName': 'RT. 40/ROLLING - BULLNECK RD.',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6632',
  'shortName': '005',
  'longName': 'MONDAWMIN - CEDONIA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6631',
  'shortName': '004',
  'longName': 'TURNERS STATION - C C B C ESSEX',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6630',
  'shortName': '003',
  'longName': 'SHEPPARD PRATT/CROMWELL-DOWNTOWN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4505',
  'shortName': '652',
  'longName': 'AVION-FRANKLIN FARM',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6629',
  'shortName': '001',
  'longName': 'SINAI - FORT McHENRY',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4506',
  'shortName': '924',
  'longName': '924',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4499',
  'shortName': '640',
  'longName': 'SULLY',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4503',
  'shortName': '650',
  'longName': 'CHANTILLY',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4504',
  'shortName': '651',
  'longName': 'SULLYFIELD',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4501',
  'shortName': '642',
  'longName': 'Sully Station',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4502',
  'shortName': '644',
  'longName': 'Centreville PnR Express',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4500',
  'shortName': '641',
  'longName': 'SOUTH CENTREVILLE',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': 'DC',
  'id': '275',
  'shortName': 'V8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6525',
  'shortName': '004',
  'longName': 'TURNERS STATION - C C B C ESSEX',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6526',
  'shortName': '005',
  'longName': 'MONDAWMIN - CEDONIA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '276',
  'shortName': 'V9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '277',
  'shortName': 'W13',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6524',
  'shortName': '003',
  'longName': 'SHEPPARD PRATT/CROMWELL-DOWNTOWN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '278',
  'shortName': 'W14',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6529',
  'shortName': '009',
  'longName': 'LUTHERVILLE-INTERNATIONAL CIRCLE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4509',
  'shortName': '929',
  'longName': '929',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'DC',
  'id': '279',
  'shortName': 'W15',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6527',
  'shortName': '007',
  'longName': 'MONDAWMIN - CANTON',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4507',
  'shortName': '926',
  'longName': '926',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': '1',
  'id': '6528',
  'shortName': '008',
  'longName': 'LUTHERVILLE - UMTC',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '281',
  'shortName': 'W2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '280',
  'shortName': 'W19',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6540',
  'shortName': '020',
  'longName': 'SECURITY SQUARE MALL  -  DUNDALK',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6542',
  'shortName': '022',
  'longName': 'BAYVIEW - MONDAWMIN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '285',
  'shortName': 'W6',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '284',
  'shortName': 'W5',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6541',
  'shortName': '021',
  'longName': 'FELLS POINT - MONDAWMIN',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4490',
  'shortName': '595',
  'longName': 'Pentagon Express',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6544',
  'shortName': '024',
  'longName': 'WHISPERING WOODS - MORAVIA',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '283',
  'shortName': 'W4',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '282',
  'shortName': 'W3',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6543',
  'shortName': '023',
  'longName': 'RT40 & ROLLING - FOX RIDGE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6641',
  'shortName': '015',
  'longName': 'SECURITY MALL - OVERLEA/PERRY HALL',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4492',
  'shortName': '605',
  'longName': '605',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6640',
  'shortName': '014',
  'longName': 'UMTC/PATAPSCO - ANNAPOLIS',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4491',
  'shortName': '597',
  'longName': 'Crystal City Express',
  'mode': 'BUS',
  'color': '00FFFF'
}, {
  'agency': '1',
  'id': '6643',
  'shortName': '017',
  'longName': 'PATAPSCO STATION-PARKWAY CENTER',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6642',
  'shortName': '016',
  'longName': 'MONDAWMIN - BROOKLYN HOMES',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6637',
  'shortName': '011',
  'longName': 'TOWSONTOWNE - CANTON CROSSING',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4514',
  'shortName': '981',
  'longName': 'TWP - Dulles Airport',
  'mode': 'BUS',
  'color': 'FFFF00'
}, {
  'agency': 'Fairfax Connector',
  'id': '4488',
  'shortName': '574',
  'longName': '574',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': 'Fairfax Connector',
  'id': '4489',
  'shortName': '585',
  'longName': '585',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4515',
  'shortName': 'RIBS 1',
  'longName': 'Ribs 1',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6638',
  'shortName': '012',
  'longName': 'STELLA MARIS - NORTH AVE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4516',
  'shortName': 'RIBS 2',
  'longName': 'Ribs 2',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6639',
  'shortName': '013',
  'longName': 'CANTON/FELLS POINT - WALBROOK',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4517',
  'shortName': 'RIBS 3',
  'longName': 'Ribs 3',
  'mode': 'BUS',
  'color': 'FF80C0'
}, {
  'agency': '1',
  'id': '6633',
  'shortName': '007',
  'longName': 'MONDAWMIN - CANTON',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4510',
  'shortName': '950',
  'longName': '950',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6634',
  'shortName': '008',
  'longName': 'LUTHERVILLE - UMTC',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4511',
  'shortName': '951',
  'longName': '951',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4512',
  'shortName': '952',
  'longName': '952',
  'mode': 'BUS',
  'color': 'C0C0C0'
}, {
  'agency': '1',
  'id': '6635',
  'shortName': '009',
  'longName': 'LUTHERVILLE-INTERNATIONAL CIRCLE',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4513',
  'shortName': '980',
  'longName': '980',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6636',
  'shortName': '010',
  'longName': 'RT. 40/ROLLING - BULLNECK RD.',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': '1',
  'id': '6534',
  'shortName': '014',
  'longName': 'UMTC/PATAPSCO - ANNAPOLIS',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '288',
  'shortName': 'X1',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6535',
  'shortName': '015',
  'longName': 'SECURITY MALL - OVERLEA/PERRY HALL',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '289',
  'shortName': 'X2',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6536',
  'shortName': '016',
  'longName': 'MONDAWMIN - BROOKLYN HOMES',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'DC',
  'id': '286',
  'shortName': 'W8',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': 'DC',
  'id': '287',
  'shortName': 'W9',
  'longName': null,
  'mode': 'BUS',
  'color': null
}, {
  'agency': '1',
  'id': '6537',
  'shortName': '017',
  'longName': 'PATAPSCO STATION-PARKWAY CENTER',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4518',
  'shortName': 'RIBS 4',
  'longName': 'Ribs 4',
  'mode': 'BUS',
  'color': 'FFFFFF'
}, {
  'agency': '1',
  'id': '6538',
  'shortName': '018',
  'longName': 'GLEN - BAAS & TALMUDICAL',
  'mode': 'BUS',
  'color': '800080'
}, {
  'agency': '1',
  'id': '6539',
  'shortName': '019',
  'longName': 'STATE CENTER - GOUCHER/CARNEY',
  'mode': 'BUS',
  'color': '0000FF'
}, {
  'agency': 'Fairfax Connector',
  'id': '4519',
  'shortName': 'RIBS 5',
  'longName': 'Ribs 5',
  'mode': 'BUS',
  'color': '00FFFF'
}];

/**
 * Journeys
 */

var JOURNEYS = {
  'stops': [{
    'stop_id': '3666',
    'stop_name': 'N GEORGE MASON DR & LEE HW',
    'stop_lat': 38.896343,
    'stop_lon': -77.133643
  }, {
    'stop_id': '32057',
    'stop_name': 'N GEORGE MASON DR & PATRICK HENRY DR',
    'stop_lat': 38.894329,
    'stop_lon': -77.131685
  }, {
    'stop_id': '8100',
    'stop_name': 'PATRICK HENRY DR & N HARRISON ST',
    'stop_lat': 38.893235,
    'stop_lon': -77.133554
  }, {
    'stop_id': '8113',
    'stop_name': 'N HARRISON ST & LEE HW',
    'stop_lat': 38.896293,
    'stop_lon': -77.137679
  }, {
    'stop_id': '29143',
    'stop_name': 'RT 29 LEE HWY & N GREENBRIER CT',
    'stop_lat': 38.896282,
    'stop_lon': -77.136147
  }, {
    'stop_id': '27281',
    'stop_name': 'RT 29 LEE HWY & GEORGE MASON DR',
    'stop_lat': 38.896228,
    'stop_lon': -77.133152
  }, {
    'stop_id': '27282',
    'stop_name': 'RT 29 LEE HWY & EDISON ST',
    'stop_lat': 38.89628,
    'stop_lon': -77.130728
  }, {
    'stop_id': '27289',
    'stop_name': 'RT 29 LEE HWY & CULPEPER ST',
    'stop_lat': 38.896389,
    'stop_lon': -77.126815
  }, {
    'stop_id': '27309',
    'stop_name': 'RT 29 LEE HWY & GLEBE RD',
    'stop_lat': 38.897285,
    'stop_lon': -77.124083
  }, {
    'stop_id': '27328',
    'stop_name': 'RT 29 LEE HWY & ALBEMARLE ST',
    'stop_lat': 38.897965,
    'stop_lon': -77.122099
  }, {
    'stop_id': '27338',
    'stop_name': 'RT 29 LEE HWY & WOODROW ST',
    'stop_lat': 38.898557,
    'stop_lon': -77.119599
  }, {
    'stop_id': '27330',
    'stop_name': 'RT 29 LEE HWY & VERMONT ST',
    'stop_lat': 38.898044,
    'stop_lon': -77.11645
  }, {
    'stop_id': '27311',
    'stop_name': 'RT 29 LEE HWY & THOMAS ST',
    'stop_lat': 38.897433,
    'stop_lon': -77.115226
  }, {
    'stop_id': '27302',
    'stop_name': 'RT 29 LEE HWY & UTAH ST',
    'stop_lat': 38.897132,
    'stop_lon': -77.114251
  }, {
    'stop_id': '27300',
    'stop_name': 'RT 29 LEE HWY & STAFFORD ST',
    'stop_lat': 38.896998,
    'stop_lon': -77.112407
  }, {
    'stop_id': '27301',
    'stop_name': 'RT 29 LEE HWY & RANDOLPH ST',
    'stop_lat': 38.896978,
    'stop_lon': -77.110115
  }, {
    'stop_id': '27294',
    'stop_name': 'RT 29 LEE HWY & QUINCY ST',
    'stop_lat': 38.896724,
    'stop_lon': -77.10802
  }, {
    'stop_id': '27280',
    'stop_name': 'RT 29 LEE HWY & OAKLAND ST',
    'stop_lat': 38.896249,
    'stop_lon': -77.106058
  }, {
    'stop_id': '27266',
    'stop_name': 'RT 29 LEE HWY & MONROE ST',
    'stop_lat': 38.895833,
    'stop_lon': -77.104384
  }, {
    'stop_id': '27277',
    'stop_name': 'RT 29 LEE HWY & #3206',
    'stop_lat': 38.896186,
    'stop_lon': -77.101108
  }, {
    'stop_id': '27263',
    'stop_name': 'RT 29 LEE HWY & SPOUT RUN PKWY',
    'stop_lat': 38.895841,
    'stop_lon': -77.097472
  }, {
    'stop_id': '27247',
    'stop_name': 'RT 29 LEE HWY & HIGHLAND ST',
    'stop_lat': 38.89503,
    'stop_lon': -77.094856
  }, {
    'stop_id': '27236',
    'stop_name': 'RT 29 LEE HWY & DANVILLE ST',
    'stop_lat': 38.894556,
    'stop_lon': -77.092735
  }, {
    'stop_id': '27239',
    'stop_name': 'RT 29 LEE HWY & CLEVELAND ST',
    'stop_lat': 38.89469,
    'stop_lon': -77.091399
  }, {
    'stop_id': '27253',
    'stop_name': 'RT 29 LEE HWY & ADAMS ST',
    'stop_lat': 38.895342,
    'stop_lon': -77.088201
  }, {
    'stop_id': '27268',
    'stop_name': 'RT 29 LEE HWY & VEITCH ST',
    'stop_lat': 38.895981,
    'stop_lon': -77.085936
  }, {
    'stop_id': '27279',
    'stop_name': 'RT 29 LEE HWY & #1802-1804',
    'stop_lat': 38.896293,
    'stop_lon': -77.082252
  }, {
    'stop_id': '27321',
    'stop_name': 'RT 29 LEE HWY & QUINN ST',
    'stop_lat': 38.897798,
    'stop_lon': -77.078215
  }, {
    'stop_id': '27336',
    'stop_name': 'RT 29 LEE HWY & FORT MYER DR',
    'stop_lat': 38.898332,
    'stop_lon': -77.073047
  }, {
    'stop_id': '32075',
    'stop_name': 'E ST NW & 19TH ST NW',
    'stop_lat': 38.895995,
    'stop_lon': -77.043466
  }, {
    'stop_id': '6718',
    'stop_name': 'NW 18TH ST & NW F ST',
    'stop_lat': 38.897225,
    'stop_lon': -77.041623
  }, {
    'stop_id': '7969',
    'stop_name': 'NW 18TH ST & NW G ST',
    'stop_lat': 38.898113,
    'stop_lon': -77.041589
  }, {
    'stop_id': '2278',
    'stop_name': 'NW 18TH ST & NW PENNSYLVANIA AV',
    'stop_lat': 38.899316,
    'stop_lon': -77.041633
  }, {
    'stop_id': '7970',
    'stop_name': 'NW 18TH ST & NW I ST',
    'stop_lat': 38.901415,
    'stop_lon': -77.041545
  }, {
    'stop_id': '7971',
    'stop_name': 'NW 18TH ST & NW K ST',
    'stop_lat': 38.902492,
    'stop_lon': -77.041724
  }, {
    'stop_id': '27405',
    'stop_name': 'K ST NW & 17TH ST NW (MAIN) WEST',
    'stop_lat': 38.902456,
    'stop_lon': -77.039724
  }, {
    'stop_id': '27404',
    'stop_name': 'K ST NW & 16TH ST NW (MAIN)',
    'stop_lat': 38.902462,
    'stop_lon': -77.036823
  }, {
    'stop_id': '27402',
    'stop_name': 'K ST NW & 15TH ST NW (MAIN)',
    'stop_lat': 38.902459,
    'stop_lon': -77.034819
  }, {
    'stop_id': '27403',
    'stop_name': 'K ST NW & 14TH ST NW (MAIN)',
    'stop_lat': 38.902451,
    'stop_lon': -77.032186
  }, {
    'stop_id': '5548',
    'stop_name': 'NW I ST & NW 14TH ST',
    'stop_lat': 38.900919,
    'stop_lon': -77.032087
  }, {
    'stop_id': '12598',
    'stop_name': 'TERMINAL/KENNEDY CENTER;25TH ST & F ST',
    'stop_lat': 38.898099,
    'stop_lon': -77.053251
  }, {
    'stop_id': '5498',
    'stop_name': 'NW H ST & NW 24TH ST',
    'stop_lat': 38.89953,
    'stop_lon': -77.051567
  }, {
    'stop_id': '5499',
    'stop_name': 'NW H ST & NW 23RD ST',
    'stop_lat': 38.899527,
    'stop_lon': -77.050338
  }, {
    'stop_id': '8050',
    'stop_name': 'NW 23RD ST & NW G ST',
    'stop_lat': 38.898486,
    'stop_lon': -77.050246
  }, {
    'stop_id': '7061',
    'stop_name': 'NW F ST & NW 22ND ST',
    'stop_lat': 38.897296,
    'stop_lon': -77.049097
  }, {
    'stop_id': '7062',
    'stop_name': 'NW F ST & NW 21ST ST',
    'stop_lat': 38.897299,
    'stop_lon': -77.046843
  }, {
    'stop_id': '7449',
    'stop_name': 'NW VIRGINIA AV & NW 21ST ST',
    'stop_lat': 38.894948,
    'stop_lon': -77.04629
  }, {
    'stop_id': '5869',
    'stop_name': '19TH STREET & VIRGINIA AV NW',
    'stop_lat': 38.893076,
    'stop_lon': -77.042788
  }, {
    'stop_id': '6720',
    'stop_name': 'NW 18TH ST & NW C ST',
    'stop_lat': 38.893413,
    'stop_lon': -77.041649
  }, {
    'stop_id': '6719',
    'stop_name': 'NW 18TH ST & NW D ST',
    'stop_lat': 38.894241,
    'stop_lon': -77.041613
  }, {
    'stop_id': '27251',
    'stop_name': '18TH ST NW & E ST NW (S)',
    'stop_lat': 38.895236,
    'stop_lon': -77.041607
  }, {
    'stop_id': '4756',
    'stop_name': 'NW I ST & 18TH ST',
    'stop_lat': 38.901174,
    'stop_lon': -77.041604
  }, {
    'stop_id': '5637',
    'stop_name': 'NW K ST & NW 18TH ST',
    'stop_lat': 38.902322,
    'stop_lon': -77.041603
  }, {
    'stop_id': '27401',
    'stop_name': 'K ST NW & 13TH ST NW (MAIN)',
    'stop_lat': 38.902437,
    'stop_lon': -77.029915
  }, {
    'stop_id': '7675',
    'stop_name': 'NW 13TH ST & NW I ST',
    'stop_lat': 38.901497,
    'stop_lon': -77.029765
  }, {
    'stop_id': '5506',
    'stop_name': 'NW H ST & NW 11TH ST',
    'stop_lat': 38.899735,
    'stop_lon': -77.027311
  }, {
    'stop_id': '5490',
    'stop_name': 'NW H ST & NW 9TH ST',
    'stop_lat': 38.899741,
    'stop_lon': -77.024163
  }, {
    'stop_id': '5489',
    'stop_name': 'NW H ST & NW 7TH ST',
    'stop_lat': 38.899724,
    'stop_lon': -77.021543
  }, {
    'stop_id': '5488',
    'stop_name': 'NW H ST & NW 6TH ST',
    'stop_lat': 38.899738,
    'stop_lon': -77.020177
  }, {
    'stop_id': '27357',
    'stop_name': 'H ST NW & BET 5TH ST NW & 4TH ST NW',
    'stop_lat': 38.899705,
    'stop_lon': -77.017114
  }, {
    'stop_id': '5865',
    'stop_name': 'NW MASSACHUSETTS AV & NW NEW JERSEY AV',
    'stop_lat': 38.898908,
    'stop_lon': -77.012939
  }, {
    'stop_id': '5864',
    'stop_name': 'NW MASSACHUSETTS AV & NW G ST',
    'stop_lat': 38.898154,
    'stop_lon': -77.010998
  }, {
    'stop_id': '27329',
    'stop_name': 'NORTH CAPITOL ST NE & MASSACHUSETTS',
    'stop_lat': 38.898264,
    'stop_lon': -77.008955
  }, {
    'stop_id': '27363',
    'stop_name': 'NORTH CAPITOL ST NE & H ST NE',
    'stop_lat': 38.899963,
    'stop_lon': -77.008952
  }, {
    'stop_id': '27380',
    'stop_name': 'NORTH CAPITOL ST NE & I ST NE',
    'stop_lat': 38.901072,
    'stop_lon': -77.00894
  }, {
    'stop_id': '27428',
    'stop_name': 'NORTH CAPITOL ST & K ST',
    'stop_lat': 38.90304,
    'stop_lon': -77.008927
  }, {
    'stop_id': '27452',
    'stop_name': 'NORTH CAPITOL ST & M ST',
    'stop_lat': 38.905457,
    'stop_lon': -77.008889
  }, {
    'stop_id': '27468',
    'stop_name': 'NORTH CAPITOL ST NE & N ST NE',
    'stop_lat': 38.907085,
    'stop_lon': -77.008888
  }, {
    'stop_id': '28810',
    'stop_name': 'NORTH CAPITOL ST & P ST',
    'stop_lat': 38.909449,
    'stop_lon': -77.008936
  }, {
    'stop_id': '27506',
    'stop_name': 'NORTH CAPITOL ST NE & FLORIDA AVE N',
    'stop_lat': 38.910439,
    'stop_lon': -77.008894
  }, {
    'stop_id': '27547',
    'stop_name': 'NORTH CAPITOL ST & RANDOLPH PL',
    'stop_lat': 38.913184,
    'stop_lon': -77.008933
  }, {
    'stop_id': '27563',
    'stop_name': 'NORTH CAPITOL ST & T ST',
    'stop_lat': 38.915352,
    'stop_lon': -77.008871
  }, {
    'stop_id': '27573',
    'stop_name': 'NORTH CAPITOL ST & RHODE ISLAND AVE',
    'stop_lat': 38.916648,
    'stop_lon': -77.008863
  }, {
    'stop_id': '27586',
    'stop_name': 'NORTH CAPITOL ST & V ST',
    'stop_lat': 38.91838,
    'stop_lon': -77.008839
  }, {
    'stop_id': '27608',
    'stop_name': 'NORTH CAPITOL ST & ADAMS ST',
    'stop_lat': 38.920347,
    'stop_lon': -77.008847
  }, {
    'stop_id': '27623',
    'stop_name': 'NORTH CAPITOL ST & BRYANT ST NE',
    'stop_lat': 38.921191,
    'stop_lon': -77.008913
  }, {
    'stop_id': '27632',
    'stop_name': 'NORTH CAPITOL ST & CHANNING ST NE',
    'stop_lat': 38.922241,
    'stop_lon': -77.008909
  }, {
    'stop_id': '27656',
    'stop_name': 'NORTH CAPITOL ST & EVARTS ST',
    'stop_lat': 38.924321,
    'stop_lon': -77.008904
  }, {
    'stop_id': '28885',
    'stop_name': 'MICHIGAN AVE NE & NORTH CAPITOL ST',
    'stop_lat': 38.926664,
    'stop_lon': -77.008234
  }, {
    'stop_id': '5918',
    'stop_name': 'NE MICHIGAN AV & NE FRANKLIN ST',
    'stop_lat': 38.927223,
    'stop_lon': -77.005676
  }, {
    'stop_id': '5919',
    'stop_name': 'NE MICHIGAN AV & NE IRVING ST',
    'stop_lat': 38.93018,
    'stop_lon': -77.002742
  }, {
    'stop_id': '5920',
    'stop_name': 'NE MICHIGAN AV & NE 4TH ST',
    'stop_lat': 38.931618,
    'stop_lon': -76.999798
  }, {
    'stop_id': '7455',
    'stop_name': 'NE 7TH ST & NE MONROE ST',
    'stop_lat': 38.932298,
    'stop_lon': -76.996375
  }, {
    'stop_id': '6049',
    'stop_name': 'NE MONROE ST & NE 8TH ST',
    'stop_lat': 38.932298,
    'stop_lon': -76.995156
  }, {
    'stop_id': '27780',
    'stop_name': 'BROOKLAND STATION & BUS BAY E',
    'stop_lat': 38.933424,
    'stop_lon': -76.993911
  }, {
    'stop_id': '6050',
    'stop_name': 'NE MONROE ST & NE 10TH ST',
    'stop_lat': 38.932372,
    'stop_lon': -76.992844
  }, {
    'stop_id': '27783',
    'stop_name': '12TH ST & NEWTON ST',
    'stop_lat': 38.933339,
    'stop_lon': -76.990988
  }, {
    'stop_id': '7641',
    'stop_name': 'NE 12TH ST & NE OTIS ST',
    'stop_lat': 38.934295,
    'stop_lon': -76.991063
  }, {
    'stop_id': '7642',
    'stop_name': 'NE 12TH ST & NE PERRY ST',
    'stop_lat': 38.93594,
    'stop_lon': -76.990958
  }, {
    'stop_id': '7658',
    'stop_name': 'NE 12TH ST & NE QUINCY ST',
    'stop_lat': 38.937584,
    'stop_lon': -76.990403
  }, {
    'stop_id': '7657',
    'stop_name': 'NE 12TH ST & NE MICHIGAN AV',
    'stop_lat': 38.939242,
    'stop_lon': -76.990168
  }, {
    'stop_id': '7645',
    'stop_name': 'NE 12TH ST & NE TAYLOR ST',
    'stop_lat': 38.940979,
    'stop_lon': -76.990168
  }, {
    'stop_id': '7653',
    'stop_name': 'PROVIDENCE HOSP;NE 12TH ST & VARNUM ST',
    'stop_lat': 38.943138,
    'stop_lon': -76.990169
  }, {
    'stop_id': '7648',
    'stop_name': 'NE 12TH ST & NE ALLISON ST',
    'stop_lat': 38.945511,
    'stop_lon': -76.99017
  }, {
    'stop_id': '7649',
    'stop_name': 'NE 12TH ST & NE CRITTENDEN ST',
    'stop_lat': 38.947166,
    'stop_lon': -76.990161
  }, {
    'stop_id': '6815',
    'stop_name': 'NE SOUTH DAKOTA AV & NE DECATUR ST',
    'stop_lat': 38.948178,
    'stop_lon': -76.990872
  }, {
    'stop_id': '27970',
    'stop_name': 'SOUTH DAKOTA AVE NE & 10TH ST NE',
    'stop_lat': 38.949564,
    'stop_lon': -76.992685
  }, {
    'stop_id': '27986',
    'stop_name': 'SOUTH DAKOTA AVE & 8TH ST',
    'stop_lat': 38.950737,
    'stop_lon': -76.994222
  }, {
    'stop_id': '6811',
    'stop_name': 'NE SOUTH DAKOTA AV & NE FARRAGUT PL',
    'stop_lat': 38.951493,
    'stop_lon': -76.995201
  }, {
    'stop_id': '5369',
    'stop_name': 'NE GALLOWAY ST & NE SOUTH DAKOTA AV',
    'stop_lat': 38.952663,
    'stop_lon': -76.997401
  }, {
    'stop_id': '10793',
    'stop_name': '4TH ST & GALLOWAY ST NE',
    'stop_lat': 38.952636,
    'stop_lon': -76.998808
  }, {
    'stop_id': '28879',
    'stop_name': 'FT TOTTEN STATION & DROP OFF ONLY (',
    'stop_lat': 38.952368,
    'stop_lon': -77.001852
  }, {
    'stop_id': '28958',
    'stop_name': 'FT TOTTEN STATION & BUS BAY F',
    'stop_lat': 38.952368,
    'stop_lon': -77.001852
  }],
  'routes': [{
    'agency_id': 'DC',
    'route_id': '80',
    'route_short_name': '3Y',
    'route_long_name': null,
    'route_type': 3,
    'route_color': null
  }, {
    'agency_id': 'DC',
    'route_id': '106',
    'route_short_name': '80',
    'route_long_name': null,
    'route_type': 3,
    'route_color': null
  }],
  'patterns': [{
    'pattern_id': '67407f4a',
    'stops': [{
      'stop_id': '3666'
    }, {
      'stop_id': '32057'
    }, {
      'stop_id': '8100'
    }, {
      'stop_id': '8113'
    }, {
      'stop_id': '29143'
    }, {
      'stop_id': '27281'
    }, {
      'stop_id': '27282'
    }, {
      'stop_id': '27289'
    }, {
      'stop_id': '27309'
    }, {
      'stop_id': '27328'
    }, {
      'stop_id': '27338'
    }, {
      'stop_id': '27330'
    }, {
      'stop_id': '27311'
    }, {
      'stop_id': '27302'
    }, {
      'stop_id': '27300'
    }, {
      'stop_id': '27301'
    }, {
      'stop_id': '27294'
    }, {
      'stop_id': '27280'
    }, {
      'stop_id': '27266'
    }, {
      'stop_id': '27277'
    }, {
      'stop_id': '27263'
    }, {
      'stop_id': '27247'
    }, {
      'stop_id': '27236'
    }, {
      'stop_id': '27239'
    }, {
      'stop_id': '27253'
    }, {
      'stop_id': '27268'
    }, {
      'stop_id': '27279'
    }, {
      'stop_id': '27321'
    }, {
      'stop_id': '27336'
    }, {
      'stop_id': '32075'
    }, {
      'stop_id': '6718'
    }, {
      'stop_id': '7969'
    }, {
      'stop_id': '2278'
    }, {
      'stop_id': '7970'
    }, {
      'stop_id': '7971'
    }, {
      'stop_id': '27405'
    }, {
      'stop_id': '27404'
    }, {
      'stop_id': '27402'
    }, {
      'stop_id': '27403'
    }, {
      'stop_id': '5548'
    }],
    'pattern_name': '3Y to NW I ST & NW 14TH ST (DC_5548)',
    'route_id': '80'
  }, {
    'pattern_id': '62e16aa0',
    'stops': [{
      'stop_id': '12598'
    }, {
      'stop_id': '5498'
    }, {
      'stop_id': '5499'
    }, {
      'stop_id': '8050'
    }, {
      'stop_id': '7061'
    }, {
      'stop_id': '7062'
    }, {
      'stop_id': '7449'
    }, {
      'stop_id': '5869'
    }, {
      'stop_id': '6720'
    }, {
      'stop_id': '6719'
    }, {
      'stop_id': '27251'
    }, {
      'stop_id': '6718'
    }, {
      'stop_id': '7969'
    }, {
      'stop_id': '2278'
    }, {
      'stop_id': '4756'
    }, {
      'stop_id': '5637'
    }, {
      'stop_id': '27405'
    }, {
      'stop_id': '27404'
    }, {
      'stop_id': '27402'
    }, {
      'stop_id': '27403'
    }, {
      'stop_id': '27401'
    }, {
      'stop_id': '7675'
    }, {
      'stop_id': '5506'
    }, {
      'stop_id': '5490'
    }, {
      'stop_id': '5489'
    }, {
      'stop_id': '5488'
    }, {
      'stop_id': '27357'
    }, {
      'stop_id': '5865'
    }, {
      'stop_id': '5864'
    }, {
      'stop_id': '27329'
    }, {
      'stop_id': '27363'
    }, {
      'stop_id': '27380'
    }, {
      'stop_id': '27428'
    }, {
      'stop_id': '27452'
    }, {
      'stop_id': '27468'
    }, {
      'stop_id': '28810'
    }, {
      'stop_id': '27506'
    }, {
      'stop_id': '27547'
    }, {
      'stop_id': '27563'
    }, {
      'stop_id': '27573'
    }, {
      'stop_id': '27586'
    }, {
      'stop_id': '27608'
    }, {
      'stop_id': '27623'
    }, {
      'stop_id': '27632'
    }, {
      'stop_id': '27656'
    }, {
      'stop_id': '28885'
    }, {
      'stop_id': '5918'
    }, {
      'stop_id': '5919'
    }, {
      'stop_id': '5920'
    }, {
      'stop_id': '7455'
    }, {
      'stop_id': '6049'
    }, {
      'stop_id': '27780'
    }, {
      'stop_id': '6050'
    }, {
      'stop_id': '27783'
    }, {
      'stop_id': '7641'
    }, {
      'stop_id': '7642'
    }, {
      'stop_id': '7658'
    }, {
      'stop_id': '7657'
    }, {
      'stop_id': '7645'
    }, {
      'stop_id': '7653'
    }, {
      'stop_id': '7648'
    }, {
      'stop_id': '7649'
    }, {
      'stop_id': '6815'
    }, {
      'stop_id': '27970'
    }, {
      'stop_id': '27986'
    }, {
      'stop_id': '6811'
    }, {
      'stop_id': '5369'
    }, {
      'stop_id': '10793'
    }, {
      'stop_id': '28879'
    }, {
      'stop_id': '28958'
    }],
    'pattern_name': '80 to FT TOTTEN STATION & BUS BAY F (DC_28958) from TERMINAL/KENNEDY CENTER;25TH ST & F ST (DC_12598)',
    'route_id': '106'
  }],
  'places': [{
    'place_id': 'from',
    'place_name': 'Start',
    'place_lat': 38.895,
    'place_lon': -77.09
  }, {
    'place_id': 'to',
    'place_name': 'End',
    'place_lat': 38.894,
    'place_lon': -77.01
  }],
  'journeys': [{
    'journey_id': 'option_0',
    'journey_name': 'routes 3Y, 80 via NW 18TH ST & NW PENNSYLVANIA AV',
    'segments': [{
      'type': 'WALK',
      'from': {
        'type': 'PLACE',
        'place_id': 'from'
      },
      'to': {
        'type': 'STOP',
        'stop_id': '27247'
      }
    }, {
      'type': 'TRANSIT',
      'pattern_id': '67407f4a',
      'from_stop_index': 21,
      'to_stop_index': 32
    }, {
      'type': 'TRANSIT',
      'pattern_id': '62e16aa0',
      'from_stop_index': 13,
      'to_stop_index': 29
    }, {
      'type': 'WALK',
      'from': {
        'type': 'STOP',
        'stop_id': '27329'
      },
      'to': {
        'type': 'PLACE',
        'place_id': 'to'
      }
    }]
  }]
};
