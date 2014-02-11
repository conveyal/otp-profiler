
/**
 * Dependencies
 */

var OtpProfiler = require('otpprofiler.js');
var equals = require('equals');

/**
 * TransitiveLoader Config
 */

var config = {
  maxOptions: 1,
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
 * Mocha BDD
 */

describe('otpprofiler.js', function() {
  it('should get the exact same data', function(done) {
    var localResponse = new OtpProfiler.models.OtpProfileResponse(PROFILE);
    var endpoint = 'http://arlington.dev.conveyal.com/otp/otp-rest-servlet/';
    var TransitiveLoader = new OtpProfiler.transitive.TransitiveLoader(localResponse, endpoint, function(transiveData) {
      if (equals(transiveData, OUTPUT)) done(new Error('Data is not the same.'));
      else done();
    }, config);
  });
});

/**
 * Data
 */

var PROFILE = { "options": [

{
  "segments": [
    {
      "walkTime": 153,
      "waitStats": {
        "min": 0,
        "avg": 304,
        "max": 1200,
        "num": 78300
      },
      "route": "ORANGE",
      "from": "12488",
      "to": "7932",
      "fromName": "COURTHOUSE METRO STATION",
      "toName": "FARRAGUT WEST METRO STATION",
      "routeShortName": "Orange",
      "routeLongName": "Metrorail Orange Line",
      "rideStats": {
        "min": 480,
        "avg": 480,
        "max": 480,
        "num": 461
      },
      "segmentPatterns": [
        {
          "patternId": "3bff5976",
          "fromIndex": 7,
          "toIndex": 10,
          "nTrips": 401
        },
        {
          "patternId": "5ee55d17",
          "fromIndex": 7,
          "toIndex": 10,
          "nTrips": 32
        },
        {
          "patternId": "786aceba",
          "fromIndex": 5,
          "toIndex": 8,
          "nTrips": 18
        },
        {
          "patternId": "2842cace",
          "fromIndex": 5,
          "toIndex": 8,
          "nTrips": 8
        },
        {
          "patternId": "2c2a5319",
          "fromIndex": 3,
          "toIndex": 6,
          "nTrips": 2
        }
      ]
    },
    {
      "walkTime": 214,
      "waitStats": {
        "min": 0,
        "avg": 153,
        "max": 780,
        "num": 76380
      },
      "route": "RED",
      "from": "5635",
      "to": "12872",
      "fromName": "FARRAGUT NORTH METRO STATION",
      "toName": "UNION STATION METRO STATION",
      "routeShortName": "Red",
      "routeLongName": "Metrorail Red Line",
      "rideStats": {
        "min": 420,
        "avg": 475,
        "max": 540,
        "num": 726
      },
      "segmentPatterns": [
        {
          "patternId": "35eb4667",
          "fromIndex": 13,
          "toIndex": 17,
          "nTrips": 439
        },
        {
          "patternId": "43bf3d77",
          "fromIndex": 13,
          "toIndex": 17,
          "nTrips": 172
        },
        {
          "patternId": "562ccf18",
          "fromIndex": 9,
          "toIndex": 13,
          "nTrips": 94
        },
        {
          "patternId": "17d05cdb",
          "fromIndex": 9,
          "toIndex": 13,
          "nTrips": 20
        },
        {
          "patternId": "65a7a525",
          "fromIndex": 1,
          "toIndex": 5,
          "nTrips": 1
        }
      ]
    }
  ],
  "finalWalkTime": 98,
  "stats": {
    "min": 1365,
    "avg": 2784,
    "max": 3465,
    "num": 0
  },
  "summary": "routes Orange, Red via FARRAGUT WEST METRO STATION"
}

]};

var OUTPUT = {"stops":[{"stop_id":"999","stop_name":"CHEVERLY METRO STATION","stop_lat":38.916552,"stop_lon":-76.915104},{"stop_id":"2124","stop_name":"LANDOVER METRO STATION","stop_lat":38.933994,"stop_lon":-76.890005},{"stop_id":"2640","stop_name":"MEDICAL CENTER METRO/NAVAL MED CTR & NIH","stop_lat":39.000062,"stop_lon":-77.096948},{"stop_id":"2658","stop_name":"NEW CARROLLTON METRO STATION","stop_lat":38.946912,"stop_lon":-76.870445},{"stop_id":"3542","stop_name":"GROSVENOR METRO STATION","stop_lat":39.029243,"stop_lon":-77.103838},{"stop_id":"3969","stop_name":"TWINBROOK METRO STATION","stop_lat":39.062389,"stop_lon":-77.120792},{"stop_id":"4271","stop_name":"WHEATON METRO STATION","stop_lat":39.038565,"stop_lon":-77.050776},{"stop_id":"4364","stop_name":"FRIENDSHIP HEIGHTS METRO STATION","stop_lat":38.960997,"stop_lon":-77.085767},{"stop_id":"4387","stop_name":"BETHESDA METRO STATION","stop_lat":38.984431,"stop_lon":-77.094151},{"stop_id":"4567","stop_name":"NOMA-GALLAUDET U (NEW YORK AVE) METRO STATION","stop_lat":38.907413,"stop_lon":-77.002981},{"stop_id":"4710","stop_name":"BROOKLAND-CUA METRO","stop_lat":38.933232,"stop_lon":-76.994474},{"stop_id":"4905","stop_name":"WOODLEY PARK-ZOO METRO STATION","stop_lat":38.925,"stop_lon":-77.05235},{"stop_id":"4912","stop_name":"CLEVELAND PARK METRO STATION","stop_lat":38.935852,"stop_lon":-77.058624},{"stop_id":"4941","stop_name":"VAN NESS-UDC METRO STATION","stop_lat":38.944519,"stop_lon":-77.063716},{"stop_id":"4956","stop_name":"DUPONT CIRCLE METRO STATION","stop_lat":38.911129,"stop_lon":-77.044428},{"stop_id":"5017","stop_name":"L'ENFANT PLAZA METRO STATION","stop_lat":38.884886,"stop_lon":-77.0216},{"stop_id":"5030","stop_name":"DEANWOOD METRO STATION","stop_lat":38.907945,"stop_lon":-76.935569},{"stop_id":"5110","stop_name":"STADIUM ARMORY METRO STATION","stop_lat":38.885982,"stop_lon":-76.977168},{"stop_id":"5305","stop_name":"FORT TOTTEN METRO STATION","stop_lat":38.951808,"stop_lon":-77.001864},{"stop_id":"5635","stop_name":"FARRAGUT NORTH METRO STATION","stop_lat":38.903297,"stop_lon":-77.039502},{"stop_id":"5660","stop_name":"TENLEYTOWN METRO STATION","stop_lat":38.947849,"stop_lon":-77.079299},{"stop_id":"6479","stop_name":"EASTERN MARKET METRO STATION","stop_lat":38.884148,"stop_lon":-76.99501},{"stop_id":"6553","stop_name":"POTOMAC AVE METRO","stop_lat":38.880874,"stop_lon":-76.985397},{"stop_id":"6671","stop_name":"RHODE ISLAND METRO STATION","stop_lat":38.920778,"stop_lon":-76.995682},{"stop_id":"6963","stop_name":"TAKOMA METRO STATION","stop_lat":38.975432,"stop_lon":-77.017421},{"stop_id":"7333","stop_name":"FEDERAL CENTER METRO STATION","stop_lat":38.884981,"stop_lon":-77.015536},{"stop_id":"7474","stop_name":"GALLERY PLACE CHINATOWN METRO STATION","stop_lat":38.898354,"stop_lon":-77.021527},{"stop_id":"7588","stop_name":"METRO CENTER METRO STATION","stop_lat":38.898327,"stop_lon":-77.027777},{"stop_id":"7671","stop_name":"FEDERAL TRIANGLE METRO STATION","stop_lat":38.893789,"stop_lon":-77.027896},{"stop_id":"7812","stop_name":"MCPHERSON SQ METRO STATION","stop_lat":38.901335,"stop_lon":-77.031958},{"stop_id":"7932","stop_name":"FARRAGUT WEST METRO STATION","stop_lat":38.901366,"stop_lon":-77.039482},{"stop_id":"7993","stop_name":"ROCKVILLE METRO STATION","stop_lat":39.085452,"stop_lon":-77.146689},{"stop_id":"8040","stop_name":"FOGGY BOTTOM METRO STATION","stop_lat":38.900705,"stop_lon":-77.050026},{"stop_id":"9360","stop_name":"SHADY GROVE METRO STATION","stop_lat":39.11999,"stop_lon":-77.164761},{"stop_id":"11332","stop_name":"ROSSLYN METRO STATION","stop_lat":38.895493,"stop_lon":-77.071954},{"stop_id":"11602","stop_name":"DUNN LORING MERRIFIELD METRO STATION","stop_lat":38.883146,"stop_lon":-77.228654},{"stop_id":"11610","stop_name":"VIENNA METRO STATION","stop_lat":38.877881,"stop_lon":-77.271363},{"stop_id":"12282","stop_name":"EAST FALLS CHURCH METRO STATION","stop_lat":38.886042,"stop_lon":-77.156567},{"stop_id":"12488","stop_name":"COURTHOUSE METRO STATION","stop_lat":38.891331,"stop_lon":-77.084823},{"stop_id":"12631","stop_name":"BALLSTON METRO","stop_lat":38.882238,"stop_lon":-77.11155},{"stop_id":"12648","stop_name":"CLARENDON METRORAIL STATION","stop_lat":38.887176,"stop_lon":-77.094987},{"stop_id":"12872","stop_name":"UNION STATION METRO STATION","stop_lat":38.89777,"stop_lon":-77.006402},{"stop_id":"12874","stop_name":"JUDICIARY SQUARE METRO STATION","stop_lat":38.896121,"stop_lon":-77.016312},{"stop_id":"12900","stop_name":"CAPITOL SOUTH METRO STATION","stop_lat":38.885669,"stop_lon":-77.005892},{"stop_id":"12906","stop_name":"SMITHSONIAN METRO STATION","stop_lat":38.887587,"stop_lon":-77.028174},{"stop_id":"12922","stop_name":"VIRGINIA SQUARE METRO STATION","stop_lat":38.883074,"stop_lon":-77.103809},{"stop_id":"14118","stop_name":"WEST FALLS CHURCH METRO","stop_lat":38.900738,"stop_lon":-77.188871},{"stop_id":"16051","stop_name":"GLENMONT METRO STATION","stop_lat":39.061743,"stop_lon":-77.053097},{"stop_id":"20078","stop_name":"SILVER SPRING METRO STATION","stop_lat":38.993658,"stop_lon":-77.032307},{"stop_id":"21029","stop_name":"FOREST GLEN METRO STATION","stop_lat":39.015465,"stop_lon":-77.042667},{"stop_id":"22094","stop_name":"WHITE FLINT METRO STATION","stop_lat":39.047162,"stop_lon":-77.112782},{"stop_id":"25426","stop_name":"MINNESOTA AVE METRO STATION","stop_lat":38.898313,"stop_lon":-76.947716}],"patterns":[{"pattern_id":"3bff5976","stops":[{"stop_id":"11610"},{"stop_id":"11602"},{"stop_id":"14118"},{"stop_id":"12282"},{"stop_id":"12631"},{"stop_id":"12922"},{"stop_id":"12648"},{"stop_id":"12488"},{"stop_id":"11332"},{"stop_id":"8040"},{"stop_id":"7932"},{"stop_id":"7812"},{"stop_id":"7588"},{"stop_id":"7671"},{"stop_id":"12906"},{"stop_id":"5017"},{"stop_id":"7333"},{"stop_id":"12900"},{"stop_id":"6479"},{"stop_id":"6553"},{"stop_id":"5110"},{"stop_id":"25426"},{"stop_id":"5030"},{"stop_id":"999"},{"stop_id":"2124"},{"stop_id":"2658"}],"pattern_name":"Orange to NEW CARROLLTON METRO STATION (DC_2658) from VIENNA METRO STATION (DC_11610)","route_id":"ORANGE"},{"pattern_id":"35eb4667","stops":[{"stop_id":"9360"},{"stop_id":"7993"},{"stop_id":"3969"},{"stop_id":"22094"},{"stop_id":"3542"},{"stop_id":"2640"},{"stop_id":"4387"},{"stop_id":"4364"},{"stop_id":"5660"},{"stop_id":"4941"},{"stop_id":"4912"},{"stop_id":"4905"},{"stop_id":"4956"},{"stop_id":"5635"},{"stop_id":"7588"},{"stop_id":"7474"},{"stop_id":"12874"},{"stop_id":"12872"},{"stop_id":"4567"},{"stop_id":"6671"},{"stop_id":"4710"},{"stop_id":"5305"},{"stop_id":"6963"},{"stop_id":"20078"},{"stop_id":"21029"},{"stop_id":"4271"},{"stop_id":"16051"}],"pattern_name":"Red to GLENMONT METRO STATION (DC_16051) from SHADY GROVE METRO STATION (DC_9360)","route_id":"RED"}],"places":[{"place_id":"from","place_name":"Start","place_lat":38.895,"place_lon":-77.09},{"place_id":"to","place_name":"End","place_lat":38.894,"place_lon":-77.01}],"journeys":[{"journey_id":"option_0","journey_name":"routes Orange, Red via FARRAGUT WEST METRO STATION","segments":[{"type":"WALK","from":{"type":"PLACE","place_id":"from"},"to":{"type":"STOP","stop_id":"12488"}},{"type":"TRANSIT","pattern_id":"3bff5976","from_stop_index":7,"to_stop_index":10},{"type":"WALK","from":{"type":"STOP","stop_id":"7932"},"to":{"type":"STOP","stop_id":"5635"}},{"type":"TRANSIT","pattern_id":"35eb4667","from_stop_index":13,"to_stop_index":17},{"type":"WALK","from":{"type":"STOP","stop_id":"12872"},"to":{"type":"PLACE","place_id":"to"}}]}]};
