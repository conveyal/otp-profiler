module.exports = {
  'options': [{
    'segments': [{
      'walkTime': 315,
      'walkDistance': 441,
      'waitStats': {
        'min': 0,
        'avg': 774,
        'max': 1800,
        'num': 5754
      },
      'route': '1',
      'mode': 'BUS',
      'from': '26761',
      'to': '29349',
      'fromName': 'ARMY-NAVY DR & S HAYES ST',
      'toName': 'PENTAGON STATION & BUS BAY U11',
      'routeShortName': '10A',
      'rideStats': {
        'min': 144,
        'avg': 144,
        'max': 144,
        'num': 4
      },
      'segmentPatterns': [{
        'patternId': 'DC_1_04',
        'fromIndex': 51,
        'toIndex': 52,
        'nTrips': 4
      }]
    }, {
      'walkTime': 27,
      'walkDistance': 38,
      'waitStats': {
        'min': 33,
        'avg': 213,
        'max': 393,
        'num': 14
      },
      'route': 'BLUE',
      'mode': 'SUBWAY',
      'from': '12928',
      'to': '7932',
      'fromName': 'PENTAGON METRO STATION',
      'toName': 'FARRAGUT WEST METRO STATION',
      'routeShortName': 'Blue',
      'routeLongName': 'Metrorail Blue Line',
      'rideStats': {
        'min': 600,
        'avg': 600,
        'max': 600,
        'num': 12
      },
      'segmentPatterns': [{
        'patternId': 'DC_BLUE_03',
        'fromIndex': 7,
        'toIndex': 11,
        'nTrips': 12
      }]
    }],
    'finalWalkTime': 780,
    'stats': {
      'min': 1899,
      'avg': 2853,
      'max': 4059,
      'num': 1
    },
    'summary': 'routes 10A, Blue via PENTAGON STATION & BUS BAY U11'
  }]
}
