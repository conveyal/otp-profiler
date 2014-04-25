module.exports = {
  'journeys': [{
    'journey_id': 'option_0',
    'journey_name': 'routes Blue',
    'segments': [{
      'type': 'WALK',
      'from': {
        'type': 'PLACE',
        'place_id': 'from'
      },
      'to': {
        'type': 'STOP',
        'stop_id': '12930'
      }
    }, {
      'type': 'TRANSIT',
      'pattern_id': 'DC_BLUE_03',
      'from_stop_index': 6,
      'to_stop_index': 11
    }, {
      'type': 'WALK',
      'from': {
        'type': 'STOP',
        'stop_id': '7932'
      },
      'to': {
        'type': 'PLACE',
        'place_id': 'to'
      }
    }]
  }],
  'patterns': [{
    'pattern_id': 'DC_BLUE_03',
    'stops': [{
      'stop_id': '14816'
    }, {
      'stop_id': '10352'
    }, {
      'stop_id': '13995'
    }, {
      'stop_id': '13986'
    }, {
      'stop_id': '9838'
    }, {
      'stop_id': '9720'
    }, {
      'stop_id': '12930'
    }, {
      'stop_id': '12928'
    }, {
      'stop_id': '12926'
    }, {
      'stop_id': '11332'
    }, {
      'stop_id': '8040'
    }, {
      'stop_id': '7932'
    }, {
      'stop_id': '7812'
    }, {
      'stop_id': '7588'
    }, {
      'stop_id': '7671'
    }, {
      'stop_id': '12906'
    }, {
      'stop_id': '5017'
    }, {
      'stop_id': '7333'
    }, {
      'stop_id': '12900'
    }, {
      'stop_id': '6479'
    }, {
      'stop_id': '6553'
    }, {
      'stop_id': '5110'
    }, {
      'stop_id': '4613'
    }, {
      'stop_id': '1305'
    }, {
      'stop_id': '13107'
    }, {
      'stop_id': '4664'
    }, {
      'stop_id': '4697'
    }],
    'pattern_name': 'Blue to LARGO TOWN CENTER METRO STATION (DC_4697) from FRANCONIA SPRINGFIELD METRO (DC_14816)',
    'route_id': 'BLUE'
  }],
  'places': [{
    'place_id': 'from',
    'place_name': 'Start',
    'place_lat': 38.86583312290139,
    'place_lon': -77.06398626875051
  }, {
    'place_id': 'to',
    'place_name': 'End',
    'place_lat': 38.90485941802882,
    'place_lon': -77.03453592419277
  }],
  'routes': [{
    'agency_id': 'DC',
    'route_id': 'BLUE',
    'route_short_name': 'Blue',
    'route_long_name': 'Metrorail Blue Line',
    'route_type': 1,
    'route_color': '0d7bba'
  }],
  'stops': [{
    'stop_id': '14816',
    'stop_name': 'FRANCONIA SPRINGFIELD METRO',
    'stop_lat': 38.766196,
    'stop_lon': -77.168487
  }, {
    'stop_id': '10352',
    'stop_name': 'VAN DORN METRO STATION',
    'stop_lat': 38.799263,
    'stop_lon': -77.129111
  }, {
    'stop_id': '13995',
    'stop_name': 'KING STREET METRO STATION',
    'stop_lat': 38.806506,
    'stop_lon': -77.060796
  }, {
    'stop_id': '13986',
    'stop_name': 'BRADDOCK RD METRORAIL STATION',
    'stop_lat': 38.814052,
    'stop_lon': -77.053434
  }, {
    'stop_id': '9838',
    'stop_name': 'NATIONAL AIRPORT METRO STATION',
    'stop_lat': 38.853003,
    'stop_lon': -77.043475
  }, {
    'stop_id': '9720',
    'stop_name': 'CRYSTAL CITY METRO STATION',
    'stop_lat': 38.857817,
    'stop_lon': -77.050346
  }, {
    'stop_id': '12930',
    'stop_name': 'PENTAGON CITY METRO STATION',
    'stop_lat': 38.862961,
    'stop_lon': -77.059142
  }, {
    'stop_id': '12928',
    'stop_name': 'PENTAGON METRO STATION',
    'stop_lat': 38.869474,
    'stop_lon': -77.053777
  }, {
    'stop_id': '12926',
    'stop_name': 'ARLINGTON CEMETERY METRO STATION',
    'stop_lat': 38.884612,
    'stop_lon': -77.062795
  }, {
    'stop_id': '11332',
    'stop_name': 'ROSSLYN METRO STATION',
    'stop_lat': 38.895493,
    'stop_lon': -77.071954
  }, {
    'stop_id': '8040',
    'stop_name': 'FOGGY BOTTOM METRO STATION',
    'stop_lat': 38.900705,
    'stop_lon': -77.050026
  }, {
    'stop_id': '7932',
    'stop_name': 'FARRAGUT WEST METRO STATION',
    'stop_lat': 38.901366,
    'stop_lon': -77.039482
  }, {
    'stop_id': '7812',
    'stop_name': 'MCPHERSON SQ METRO STATION',
    'stop_lat': 38.901335,
    'stop_lon': -77.031958
  }, {
    'stop_id': '7588',
    'stop_name': 'METRO CENTER METRO STATION',
    'stop_lat': 38.898327,
    'stop_lon': -77.027777
  }, {
    'stop_id': '7671',
    'stop_name': 'FEDERAL TRIANGLE METRO STATION',
    'stop_lat': 38.893789,
    'stop_lon': -77.027896
  }, {
    'stop_id': '12906',
    'stop_name': 'SMITHSONIAN METRO STATION',
    'stop_lat': 38.887587,
    'stop_lon': -77.028174
  }, {
    'stop_id': '5017',
    'stop_name': 'L\'ENFANT PLAZA METRO STATION',
    'stop_lat': 38.884886,
    'stop_lon': -77.0216
  }, {
    'stop_id': '7333',
    'stop_name': 'FEDERAL CENTER METRO STATION',
    'stop_lat': 38.884981,
    'stop_lon': -77.015536
  }, {
    'stop_id': '12900',
    'stop_name': 'CAPITOL SOUTH METRO STATION',
    'stop_lat': 38.885669,
    'stop_lon': -77.005892
  }, {
    'stop_id': '6479',
    'stop_name': 'EASTERN MARKET METRO STATION',
    'stop_lat': 38.884148,
    'stop_lon': -76.99501
  }, {
    'stop_id': '6553',
    'stop_name': 'POTOMAC AVE METRO',
    'stop_lat': 38.880874,
    'stop_lon': -76.985397
  }, {
    'stop_id': '5110',
    'stop_name': 'STADIUM ARMORY METRO STATION',
    'stop_lat': 38.885982,
    'stop_lon': -76.977168
  }, {
    'stop_id': '4613',
    'stop_name': 'BENNING RD METRO STATION',
    'stop_lat': 38.890418,
    'stop_lon': -76.937662
  }, {
    'stop_id': '1305',
    'stop_name': 'CAPITOL HEIGHTS METRO STATION',
    'stop_lat': 38.889571,
    'stop_lon': -76.913313
  }, {
    'stop_id': '13107',
    'stop_name': 'ADDISON ROAD METRO STATION',
    'stop_lat': 38.886702,
    'stop_lon': -76.89329
  }, {
    'stop_id': '4664',
    'stop_name': 'MORGAN BOULEVARD METRO STATION',
    'stop_lat': 38.893586,
    'stop_lon': -76.868498
  }, {
    'stop_id': '4697',
    'stop_name': 'LARGO TOWN CENTER METRO STATION',
    'stop_lat': 38.900269,
    'stop_lon': -76.84454
  }]
};
