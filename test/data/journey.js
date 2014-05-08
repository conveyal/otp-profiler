module.exports = {
  'journeys': [{
    'journey_id': 'option_0',
    'journey_name': 'routes 10A, Blue via PENTAGON STATION & BUS BAY U11',
    'segments': [{
      'type': 'WALK',
      'from': {
        'type': 'PLACE',
        'place_id': 'from'
      },
      'to': {
        'type': 'STOP',
        'stop_id': '26761'
      }
    }, {
      'type': 'TRANSIT',
      'pattern_id': 'DC_1_04',
      'from_stop_index': 51,
      'to_stop_index': 52
    }, {
      'type': 'WALK',
      'from': {
        'type': 'STOP',
        'stop_id': '29349'
      },
      'to': {
        'type': 'STOP',
        'stop_id': '12928'
      }
    }, {
      'type': 'TRANSIT',
      'pattern_id': 'DC_BLUE_03',
      'from_stop_index': 7,
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
    'pattern_id': 'DC_1_04',
    'stops': [{
      'stop_id': '29997'
    }, {
      'stop_id': '12688'
    }, {
      'stop_id': '12345'
    }, {
      'stop_id': '12335'
    }, {
      'stop_id': '12334'
    }, {
      'stop_id': '25875'
    }, {
      'stop_id': '25904'
    }, {
      'stop_id': '12322'
    }, {
      'stop_id': '8748'
    }, {
      'stop_id': '11562'
    }, {
      'stop_id': '8663'
    }, {
      'stop_id': '11560'
    }, {
      'stop_id': '29125'
    }, {
      'stop_id': '8074'
    }, {
      'stop_id': '26018'
    }, {
      'stop_id': '26031'
    }, {
      'stop_id': '26041'
    }, {
      'stop_id': '26058'
    }, {
      'stop_id': '26080'
    }, {
      'stop_id': '26105'
    }, {
      'stop_id': '26127'
    }, {
      'stop_id': '26167'
    }, {
      'stop_id': '26188'
    }, {
      'stop_id': '26203'
    }, {
      'stop_id': '26219'
    }, {
      'stop_id': '26262'
    }, {
      'stop_id': '26282'
    }, {
      'stop_id': '26306'
    }, {
      'stop_id': '26340'
    }, {
      'stop_id': '26368'
    }, {
      'stop_id': '26388'
    }, {
      'stop_id': '26416'
    }, {
      'stop_id': '26437'
    }, {
      'stop_id': '9125'
    }, {
      'stop_id': '9126'
    }, {
      'stop_id': '26549'
    }, {
      'stop_id': '8556'
    }, {
      'stop_id': '8555'
    }, {
      'stop_id': '8554'
    }, {
      'stop_id': '8553'
    }, {
      'stop_id': '8552'
    }, {
      'stop_id': '8551'
    }, {
      'stop_id': '26567'
    }, {
      'stop_id': '9951'
    }, {
      'stop_id': '11114'
    }, {
      'stop_id': '8515'
    }, {
      'stop_id': '8532'
    }, {
      'stop_id': '8513'
    }, {
      'stop_id': '29127'
    }, {
      'stop_id': '29122'
    }, {
      'stop_id': '29123'
    }, {
      'stop_id': '26761'
    }, {
      'stop_id': '29349'
    }],
    'pattern_name': '10A to PENTAGON STATION & BUS BAY U11 (DC_29349) from S WASHINGTON ST & SOUTH ST (T) (DC_29997)',
    'route_id': '1'
  }, {
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
    'route_id': '1',
    'route_short_name': '10A',
    'route_type': 3
  }, {
    'agency_id': 'DC',
    'route_id': 'BLUE',
    'route_short_name': 'Blue',
    'route_long_name': 'Metrorail Blue Line',
    'route_type': 1,
    'route_color': '0d7bba'
  }],
  'stops': [{
    'stop_id': '29997',
    'stop_name': 'S WASHINGTON ST & SOUTH ST (T)',
    'stop_lat': 38.792777,
    'stop_lon': -77.049533
  }, {
    'stop_id': '12688',
    'stop_name': 'S WASHINGTON ST & CHURCH ST',
    'stop_lat': 38.794643,
    'stop_lon': -77.049086
  }, {
    'stop_id': '12345',
    'stop_name': 'WASHINGTON ST & GREEN ST',
    'stop_lat': 38.796326,
    'stop_lon': -77.048712
  }, {
    'stop_id': '12335',
    'stop_name': 'WASHINGTON ST & FRANKLIN ST',
    'stop_lat': 38.798066,
    'stop_lon': -77.048369
  }, {
    'stop_id': '12334',
    'stop_name': 'WASHINGTON ST & WILKES ST',
    'stop_lat': 38.800113,
    'stop_lon': -77.047919
  }, {
    'stop_id': '25875',
    'stop_name': 'S WASHINGTON ST & DUKE ST (RT 236)',
    'stop_lat': 38.802645,
    'stop_lon': -77.047376
  }, {
    'stop_id': '25904',
    'stop_name': 'S WASHINGTON ST & KING ST (RT 7)',
    'stop_lat': 38.804642,
    'stop_lon': -77.046931
  }, {
    'stop_id': '12322',
    'stop_name': 'WASHINGTON ST & QUEEN ST',
    'stop_lat': 38.807221,
    'stop_lon': -77.046407
  }, {
    'stop_id': '8748',
    'stop_name': 'WASHINGTON ST & ORONOCO ST',
    'stop_lat': 38.809465,
    'stop_lon': -77.04592
  }, {
    'stop_id': '11562',
    'stop_name': 'PENDLETON ST & COLUMBUS ST',
    'stop_lat': 38.810931,
    'stop_lon': -77.046709
  }, {
    'stop_id': '8663',
    'stop_name': 'PENDLETON ST & N  COLUMBUS ST',
    'stop_lat': 38.810857,
    'stop_lon': -77.047037
  }, {
    'stop_id': '11560',
    'stop_name': 'PENDLETON ST & WEST ST',
    'stop_lat': 38.811756,
    'stop_lon': -77.053134
  }, {
    'stop_id': '29125',
    'stop_name': 'BRADDOCK RD STA & BUS BAY B',
    'stop_lat': 38.813033,
    'stop_lon': -77.053113
  }, {
    'stop_id': '8074',
    'stop_name': 'BRADDOCK RD & MT VERNON AV',
    'stop_lat': 38.81348,
    'stop_lon': -77.055443
  }, {
    'stop_id': '26018',
    'stop_name': 'MOUNT VERNON AVE & SPRING ST',
    'stop_lat': 38.816135,
    'stop_lon': -77.05674
  }, {
    'stop_id': '26031',
    'stop_name': 'MOUNT VERNON AVE & GLENDALE AVE',
    'stop_lat': 38.81719,
    'stop_lon': -77.056937
  }, {
    'stop_id': '26041',
    'stop_name': 'MOUNT VERNON AVE & ALEXANDRIA AVE',
    'stop_lat': 38.818535,
    'stop_lon': -77.057176
  }, {
    'stop_id': '26058',
    'stop_name': 'MOUNT VERNON AVE & NELSON AVE',
    'stop_lat': 38.819851,
    'stop_lon': -77.057426
  }, {
    'stop_id': '26080',
    'stop_name': 'MOUNT VERNON AVE & E MASON AVE',
    'stop_lat': 38.82175,
    'stop_lon': -77.057749
  }, {
    'stop_id': '26105',
    'stop_name': 'MOUNT VERNON AVE & E BELLEFONTE AVE',
    'stop_lat': 38.823071,
    'stop_lon': -77.05801
  }, {
    'stop_id': '26127',
    'stop_name': 'MOUNT VERNON AVE & E WINDSOR AVE',
    'stop_lat': 38.824586,
    'stop_lon': -77.058296
  }, {
    'stop_id': '26167',
    'stop_name': 'MOUNT VERNON AVE & OXFORD AVE',
    'stop_lat': 38.826743,
    'stop_lon': -77.05865
  }, {
    'stop_id': '26188',
    'stop_name': 'MOUNT VERNON AVE & MOUNT IDA AVE',
    'stop_lat': 38.828137,
    'stop_lon': -77.058945
  }, {
    'stop_id': '26203',
    'stop_name': 'MOUNT VERNON AVE & E RANDOLPH AVE',
    'stop_lat': 38.829231,
    'stop_lon': -77.059145
  }, {
    'stop_id': '26219',
    'stop_name': 'MOUNT VERNON AVE & HUME AVE',
    'stop_lat': 38.830631,
    'stop_lon': -77.059398
  }, {
    'stop_id': '26262',
    'stop_name': 'MOUNT VERNON AVE & KENNEDY ST',
    'stop_lat': 38.833037,
    'stop_lon': -77.059816
  }, {
    'stop_id': '26282',
    'stop_name': 'MOUNT VERNON AVE & HERBERT ST',
    'stop_lat': 38.83441,
    'stop_lon': -77.060076
  }, {
    'stop_id': '26306',
    'stop_name': 'MOUNT VERNON AVE & W GLEBE RD',
    'stop_lat': 38.836336,
    'stop_lon': -77.061021
  }, {
    'stop_id': '26340',
    'stop_name': 'MOUNT VERNON AVE & REED AVE',
    'stop_lat': 38.838038,
    'stop_lon': -77.061892
  }, {
    'stop_id': '26368',
    'stop_name': 'MOUNT VERNON AVE & RUSSELL RD',
    'stop_lat': 38.840479,
    'stop_lon': -77.062895
  }, {
    'stop_id': '26388',
    'stop_name': 'MOUNT VERNON AVE & EXECUTIVE AVE',
    'stop_lat': 38.841989,
    'stop_lon': -77.063466
  }, {
    'stop_id': '26416',
    'stop_name': 'MOUNT VERNON AVE & BET S GLEBE & EL',
    'stop_lat': 38.844119,
    'stop_lon': -77.064335
  }, {
    'stop_id': '26437',
    'stop_name': 'MOUNT VERNON AVE & S GLEBE RD',
    'stop_lat': 38.845261,
    'stop_lon': -77.064812
  }, {
    'stop_id': '9125',
    'stop_name': 'S ARLINGTON RIDGE RD & S GLEBE RD',
    'stop_lat': 38.845889,
    'stop_lon': -77.065121
  }, {
    'stop_id': '9126',
    'stop_name': 'S ARLINGTON RIDGE RD & S LANG ST',
    'stop_lat': 38.848503,
    'stop_lon': -77.067289
  }, {
    'stop_id': '26549',
    'stop_name': 'S 23RD ST & FT SCOTT DR',
    'stop_lat': 38.853096,
    'stop_lon': -77.067405
  }, {
    'stop_id': '8556',
    'stop_name': 'S 23RD ST & S 26TH ST',
    'stop_lat': 38.853156,
    'stop_lon': -77.064814
  }, {
    'stop_id': '8555',
    'stop_name': 'S 23RD ST & S JOYCE ST',
    'stop_lat': 38.853156,
    'stop_lon': -77.063287
  }, {
    'stop_id': '8554',
    'stop_name': 'S 23RD ST & S IVES ST',
    'stop_lat': 38.853192,
    'stop_lon': -77.061471
  }, {
    'stop_id': '8553',
    'stop_name': 'S 23RD ST & S HAYES ST',
    'stop_lat': 38.853211,
    'stop_lon': -77.059585
  }, {
    'stop_id': '8552',
    'stop_name': 'S 23RD ST & S GRANT ST',
    'stop_lat': 38.853219,
    'stop_lon': -77.057681
  }, {
    'stop_id': '8551',
    'stop_name': 'S 23RD ST & S FERN ST',
    'stop_lat': 38.853279,
    'stop_lon': -77.055417
  }, {
    'stop_id': '26567',
    'stop_name': 'S EADS ST & 23RD ST',
    'stop_lat': 38.853962,
    'stop_lon': -77.053265
  }, {
    'stop_id': '9951',
    'stop_name': 'S EADS ST & S 20TH ST',
    'stop_lat': 38.855989,
    'stop_lon': -77.053052
  }, {
    'stop_id': '11114',
    'stop_name': 'S EADS ST & S 18TH ST',
    'stop_lat': 38.857809,
    'stop_lon': -77.052992
  }, {
    'stop_id': '8515',
    'stop_name': 'S 15TH ST & S EADS ST',
    'stop_lat': 38.85996,
    'stop_lon': -77.054115
  }, {
    'stop_id': '8532',
    'stop_name': 'S 15TH ST & S FERN ST',
    'stop_lat': 38.859741,
    'stop_lon': -77.056503
  }, {
    'stop_id': '8513',
    'stop_name': 'S 15TH ST & S HAYES ST',
    'stop_lat': 38.860618,
    'stop_lon': -77.059195
  }, {
    'stop_id': '29127',
    'stop_name': '15TH ST & #901',
    'stop_lat': 38.860727,
    'stop_lon': -77.061241
  }, {
    'stop_id': '29122',
    'stop_name': 'JOYCE ST & PENTAGON ROW',
    'stop_lat': 38.863624,
    'stop_lon': -77.063353
  }, {
    'stop_id': '29123',
    'stop_name': 'ARMY-NAVY DR & S JOYCE ST',
    'stop_lat': 38.865715,
    'stop_lon': -77.061781
  }, {
    'stop_id': '26761',
    'stop_name': 'ARMY-NAVY DR & S HAYES ST',
    'stop_lat': 38.865336,
    'stop_lon': -77.058949
  }, {
    'stop_id': '29349',
    'stop_name': 'PENTAGON STATION & BUS BAY U11',
    'stop_lat': 38.869439,
    'stop_lon': -77.053337
  }, {
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
