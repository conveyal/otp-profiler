module.exports = {
  'journeys': [{
    'journey_id': '0_transit',
    'journey_name': 'routes Yellow, Red via GALLERY CHINATOWN METRO STATION PL',
    'segments': [{
      'type': 'WALK',
      'from': {
        'type': 'PLACE',
        'place_id': 'from'
      },
      'to': {
        'type': 'STOP',
        'stop_id': 'DC:12930'
      },
      'streetEdges': [1188802, 1188804, 1188806, 1188808, 1188810, 1188812, 1188814, 1188816, 656447, 656449,
        656158, 656415, 656405, 656407, 866748, 3180136, 3180137, 3350231
      ]
    }, {
      'type': 'TRANSIT',
      'patterns': [{
        'pattern_id': 'DC:YELLOW:0:04',
        'from_stop_index': 6,
        'to_stop_index': 10
      }]
    }, {
      'type': 'TRANSIT',
      'patterns': [{
        'pattern_id': 'DC:RED:1:03',
        'from_stop_index': 11,
        'to_stop_index': 13
      }]
    }, {
      'type': 'WALK',
      'from': {
        'type': 'STOP',
        'stop_id': 'DC:5635'
      },
      'to': {
        'type': 'PLACE',
        'place_id': 'to'
      },
      'streetEdges': [3315489, 3142709, 1795237, 1795239, 1795241, 1795243, 52426, 52424]
    }]
  }, {
    'journey_id': '1_walk',
    'journey_name': 'WALK',
    'segments': [{
      'type': 'WALK',
      'from': {
        'type': 'PLACE',
        'place_id': 'from'
      },
      'to': {
        'type': 'PLACE',
        'place_id': 'to'
      },
      'streetEdges': [1188802, 821199, 3161890, 3167410, 3351990, 3123161, 709290, 709292, 709294, 743623,
        747492, 747494, 747496, 747498, 1402252, 2611965, 2612087, 2612085, 2612083, 2612081, 2611979,
        2611977, 2611981, 2612091, 2612089, 2612043, 2611975, 2611973, 2612064, 2612052, 2612054, 2612056,
        2612058, 2612060, 1680123, 1680125, 1680127, 1680520, 1680522, 1679324, 1679326, 725150, 725152,
        725154, 725156, 725158, 725160, 724973, 724932, 724934, 725136, 724942, 724944, 724946, 672421,
        672423, 448639, 153193, 153191, 1131076, 1131344, 3262102, 3262103, 1902545, 1902547, 1902549,
        3154912, 3154913, 3154892, 3154893, 3072582, 3072583, 2095968, 568684, 1899591, 568789, 568791,
        568793, 568795, 568797, 568799, 19229, 19227, 1290368, 1860390, 2594437, 2594501, 2594507, 2594323,
        2594321, 2594319, 2594527, 2594531, 2594308, 2594522, 2594400, 2594402, 2594404, 2594474, 2594476,
        1467613, 1467611, 1467609, 1467719, 1467717, 1891870, 2222126, 2222124, 2222122, 1682948, 1682946,
        1682944, 52426, 52424
      ]
    }]
  }, {
    'journey_id': '1_bicycle',
    'journey_name': 'BICYCLE',
    'segments': [{
      'type': 'BICYCLE',
      'from': {
        'type': 'PLACE',
        'place_id': 'from'
      },
      'to': {
        'type': 'PLACE',
        'place_id': 'to'
      },
      'streetEdges': [1188802, 1188804, 1414639, 3167394, 3167395, 3157751, 1414643, 1414645, 855079, 1356413,
        1356415, 1356417, 1356419, 1356421, 1402250, 1402252, 2611965, 2612087, 2612085, 2612083, 2612081,
        2611979, 2611977, 2611981, 2612091, 2612089, 2612043, 2611975, 2611973, 2612064, 2612052, 2612054,
        2612056, 2612058, 2612060, 1680123, 1680125, 74470, 724908, 724910, 724912, 724914, 724916, 724918,
        724920, 724922, 724924, 724926, 724928, 724930, 724932, 724934, 725136, 724942, 724944, 74483,
        672418, 723604, 2029996, 672414, 723598, 672995, 672911, 672437, 493787, 493789, 1680327, 1878184,
        2425462, 2425464, 1900464, 1142744, 1142746, 1142748, 1142750, 1142752, 1142726, 1886257, 1886259,
        1886261, 1886263, 1886265, 1886267, 1886269, 937029, 937031, 937033, 937035, 937037, 937039, 937041,
        937043, 937045, 3162308, 3162309, 3421589, 3421590, 1794679, 1794681, 1794683, 782085, 761868,
        1942332, 1467620, 1942353, 2580494, 2580767, 1942380, 1942378, 2222122, 1682948, 237054, 48679,
        48677, 48675, 461719, 52424
      ]
    }]
  }],
  'patterns': [{
    'pattern_id': 'DC:YELLOW:0:04',
    'stops': [{
      'stop_id': 'DC:10776'
    }, {
      'stop_id': 'DC:9880'
    }, {
      'stop_id': 'DC:13995'
    }, {
      'stop_id': 'DC:13986'
    }, {
      'stop_id': 'DC:9838'
    }, {
      'stop_id': 'DC:9720'
    }, {
      'stop_id': 'DC:12930'
    }, {
      'stop_id': 'DC:12928'
    }, {
      'stop_id': 'DC:5017'
    }, {
      'stop_id': 'DC:7477'
    }, {
      'stop_id': 'DC:7474'
    }, {
      'stop_id': 'DC:10344'
    }],
    'pattern_name': 'Yellow to MT VERNON SQ/7TH ST-CONVENTION CENTER (DC:10344)',
    'route_id': 'DC:YELLOW'
  }, {
    'pattern_id': 'DC:YELLOW:0:03',
    'stops': [{
      'stop_id': 'DC:14816'
    }, {
      'stop_id': 'DC:10352'
    }, {
      'stop_id': 'DC:13995'
    }, {
      'stop_id': 'DC:13986'
    }, {
      'stop_id': 'DC:9838'
    }, {
      'stop_id': 'DC:9720'
    }, {
      'stop_id': 'DC:12930'
    }, {
      'stop_id': 'DC:12928'
    }, {
      'stop_id': 'DC:5017'
    }, {
      'stop_id': 'DC:7477'
    }, {
      'stop_id': 'DC:7474'
    }, {
      'stop_id': 'DC:10344'
    }, {
      'stop_id': 'DC:308'
    }, {
      'stop_id': 'DC:1418'
    }, {
      'stop_id': 'DC:25552'
    }, {
      'stop_id': 'DC:25553'
    }, {
      'stop_id': 'DC:5305'
    }, {
      'stop_id': 'DC:11886'
    }, {
      'stop_id': 'DC:3034'
    }, {
      'stop_id': 'DC:11733'
    }, {
      'stop_id': 'DC:11731'
    }],
    'pattern_name': 'Yellow to GREENBELT METRO STATION (DC:11731) from FRANCONIA SPRINGFIELD METRO (DC:14816)',
    'route_id': 'DC:YELLOW'
  }, {
    'pattern_id': 'DC:RED:1:03',
    'stops': [{
      'stop_id': 'DC:16051'
    }, {
      'stop_id': 'DC:4271'
    }, {
      'stop_id': 'DC:21029'
    }, {
      'stop_id': 'DC:20078'
    }, {
      'stop_id': 'DC:6963'
    }, {
      'stop_id': 'DC:5305'
    }, {
      'stop_id': 'DC:4710'
    }, {
      'stop_id': 'DC:6671'
    }, {
      'stop_id': 'DC:4567'
    }, {
      'stop_id': 'DC:12872'
    }, {
      'stop_id': 'DC:12874'
    }, {
      'stop_id': 'DC:7474'
    }, {
      'stop_id': 'DC:7588'
    }, {
      'stop_id': 'DC:5635'
    }, {
      'stop_id': 'DC:4956'
    }, {
      'stop_id': 'DC:4905'
    }, {
      'stop_id': 'DC:4912'
    }, {
      'stop_id': 'DC:4941'
    }, {
      'stop_id': 'DC:5660'
    }, {
      'stop_id': 'DC:4364'
    }, {
      'stop_id': 'DC:4387'
    }, {
      'stop_id': 'DC:2640'
    }, {
      'stop_id': 'DC:3542'
    }, {
      'stop_id': 'DC:22094'
    }, {
      'stop_id': 'DC:3969'
    }, {
      'stop_id': 'DC:7993'
    }, {
      'stop_id': 'DC:9360'
    }],
    'pattern_name': 'Red to SHADY GROVE METRO STATION (DC:9360) from GLENMONT METRO STATION (DC:16051)',
    'route_id': 'DC:RED'
  }, {
    'pattern_id': 'DC:RED:1:06',
    'stops': [{
      'stop_id': 'DC:20078'
    }, {
      'stop_id': 'DC:6963'
    }, {
      'stop_id': 'DC:5305'
    }, {
      'stop_id': 'DC:4710'
    }, {
      'stop_id': 'DC:6671'
    }, {
      'stop_id': 'DC:4567'
    }, {
      'stop_id': 'DC:12872'
    }, {
      'stop_id': 'DC:12874'
    }, {
      'stop_id': 'DC:7474'
    }, {
      'stop_id': 'DC:7588'
    }, {
      'stop_id': 'DC:5635'
    }, {
      'stop_id': 'DC:4956'
    }, {
      'stop_id': 'DC:4905'
    }, {
      'stop_id': 'DC:4912'
    }, {
      'stop_id': 'DC:4941'
    }, {
      'stop_id': 'DC:5660'
    }, {
      'stop_id': 'DC:4364'
    }, {
      'stop_id': 'DC:4387'
    }, {
      'stop_id': 'DC:2640'
    }, {
      'stop_id': 'DC:3542'
    }],
    'pattern_name': 'Red to GROSVENOR METRO STATION (DC:3542) from SILVER SPRING METRO STATION (DC:20078)',
    'route_id': 'DC:RED'
  }, {
    'pattern_id': 'DC:RED:1:05',
    'stops': [{
      'stop_id': 'DC:16051'
    }, {
      'stop_id': 'DC:4271'
    }, {
      'stop_id': 'DC:21029'
    }, {
      'stop_id': 'DC:20078'
    }, {
      'stop_id': 'DC:6963'
    }, {
      'stop_id': 'DC:5305'
    }, {
      'stop_id': 'DC:4710'
    }, {
      'stop_id': 'DC:6671'
    }, {
      'stop_id': 'DC:4567'
    }, {
      'stop_id': 'DC:12872'
    }, {
      'stop_id': 'DC:12874'
    }, {
      'stop_id': 'DC:7474'
    }, {
      'stop_id': 'DC:7588'
    }, {
      'stop_id': 'DC:5635'
    }, {
      'stop_id': 'DC:4956'
    }, {
      'stop_id': 'DC:4905'
    }, {
      'stop_id': 'DC:4912'
    }, {
      'stop_id': 'DC:4941'
    }, {
      'stop_id': 'DC:5660'
    }, {
      'stop_id': 'DC:4364'
    }, {
      'stop_id': 'DC:4387'
    }, {
      'stop_id': 'DC:2640'
    }, {
      'stop_id': 'DC:3542'
    }],
    'pattern_name': 'Red to GROSVENOR METRO STATION (DC:3542) from GLENMONT METRO STATION (DC:16051)',
    'route_id': 'DC:RED'
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
    'route_id': 'DC:RED',
    'route_short_name': 'Red',
    'route_long_name': 'Metrorail Red Line',
    'route_type': 1,
    'route_color': 'e94333'
  }, {
    'route_id': 'DC:YELLOW',
    'route_short_name': 'Yellow',
    'route_long_name': 'Metrorail Yellow Line',
    'route_type': 1,
    'route_color': 'fde310'
  }],
  'stops': [{
    'stop_id': 'DC:10776',
    'stop_name': 'HUNTINGTON AV METRO STATION',
    'stop_lat': 38.793895,
    'stop_lon': -77.074955
  }, {
    'stop_id': 'DC:9880',
    'stop_name': 'EISENHOWER AV METRO STATION',
    'stop_lat': 38.800345,
    'stop_lon': -77.070831
  }, {
    'stop_id': 'DC:13995',
    'stop_name': 'KING STREET METRO STATION',
    'stop_lat': 38.806506,
    'stop_lon': -77.060796
  }, {
    'stop_id': 'DC:13986',
    'stop_name': 'BRADDOCK RD METRORAIL STATION',
    'stop_lat': 38.814052,
    'stop_lon': -77.053434
  }, {
    'stop_id': 'DC:9838',
    'stop_name': 'NATIONAL AIRPORT METRO STATION',
    'stop_lat': 38.853003,
    'stop_lon': -77.043475
  }, {
    'stop_id': 'DC:9720',
    'stop_name': 'CRYSTAL CITY METRO STATION',
    'stop_lat': 38.857817,
    'stop_lon': -77.050346
  }, {
    'stop_id': 'DC:12930',
    'stop_name': 'PENTAGON CITY METRO STATION',
    'stop_lat': 38.862961,
    'stop_lon': -77.059142
  }, {
    'stop_id': 'DC:12928',
    'stop_name': 'PENTAGON METRO STATION',
    'stop_lat': 38.869474,
    'stop_lon': -77.053777
  }, {
    'stop_id': 'DC:5017',
    'stop_name': "L'ENFANT PLAZA METRO STATION",
    'stop_lat': 38.884886,
    'stop_lon': -77.0216
  }, {
    'stop_id': 'DC:7477',
    'stop_name': 'ARCHIVES METRO STATION',
    'stop_lat': 38.893907,
    'stop_lon': -77.021592
  }, {
    'stop_id': 'DC:7474',
    'stop_name': 'GALLERY PLACE CHINATOWN METRO STATION',
    'stop_lat': 38.898354,
    'stop_lon': -77.021527
  }, {
    'stop_id': 'DC:10344',
    'stop_name': 'MT VERNON SQ/7TH ST-CONVENTION CENTER',
    'stop_lat': 38.905638,
    'stop_lon': -77.021905
  }, {
    'stop_id': 'DC:14816',
    'stop_name': 'FRANCONIA SPRINGFIELD METRO',
    'stop_lat': 38.766196,
    'stop_lon': -77.168487
  }, {
    'stop_id': 'DC:10352',
    'stop_name': 'VAN DORN METRO STATION',
    'stop_lat': 38.799263,
    'stop_lon': -77.129111
  }, {
    'stop_id': 'DC:308',
    'stop_name': 'SHAW METRO STATION',
    'stop_lat': 38.914546,
    'stop_lon': -77.021927
  }, {
    'stop_id': 'DC:1418',
    'stop_name': 'U STREET METRO STATION',
    'stop_lat': 38.917015,
    'stop_lon': -77.029169
  }, {
    'stop_id': 'DC:25552',
    'stop_name': 'COLUMBIA HEIGHTS METRO STATION',
    'stop_lat': 38.928711,
    'stop_lon': -77.032454
  }, {
    'stop_id': 'DC:25553',
    'stop_name': 'GEORGIA AVE PETWORTH STATION',
    'stop_lat': 38.936255,
    'stop_lon': -77.024252
  }, {
    'stop_id': 'DC:5305',
    'stop_name': 'FORT TOTTEN METRO STATION',
    'stop_lat': 38.951808,
    'stop_lon': -77.001864
  }, {
    'stop_id': 'DC:11886',
    'stop_name': 'WEST HYATTSVILLE METRO STATION',
    'stop_lat': 38.955028,
    'stop_lon': -76.969522
  }, {
    'stop_id': 'DC:3034',
    'stop_name': 'PRINCE GEORGES PLAZA METRO STATION',
    'stop_lat': 38.965252,
    'stop_lon': -76.955988
  }, {
    'stop_id': 'DC:11733',
    'stop_name': 'COLLEGE PARK/U OF MD METRO STATION',
    'stop_lat': 38.9784,
    'stop_lon': -76.928197
  }, {
    'stop_id': 'DC:11731',
    'stop_name': 'GREENBELT METRO STATION',
    'stop_lat': 39.011067,
    'stop_lon': -76.911011
  }, {
    'stop_id': 'DC:16051',
    'stop_name': 'GLENMONT METRO STATION',
    'stop_lat': 39.061743,
    'stop_lon': -77.053097
  }, {
    'stop_id': 'DC:4271',
    'stop_name': 'WHEATON METRO STATION',
    'stop_lat': 39.038565,
    'stop_lon': -77.050776
  }, {
    'stop_id': 'DC:21029',
    'stop_name': 'FOREST GLEN METRO STATION',
    'stop_lat': 39.015465,
    'stop_lon': -77.042667
  }, {
    'stop_id': 'DC:20078',
    'stop_name': 'SILVER SPRING METRO STATION',
    'stop_lat': 38.993658,
    'stop_lon': -77.032307
  }, {
    'stop_id': 'DC:6963',
    'stop_name': 'TAKOMA METRO STATION',
    'stop_lat': 38.975432,
    'stop_lon': -77.017421
  }, {
    'stop_id': 'DC:4710',
    'stop_name': 'BROOKLAND-CUA METRO',
    'stop_lat': 38.933232,
    'stop_lon': -76.994474
  }, {
    'stop_id': 'DC:6671',
    'stop_name': 'RHODE ISLAND METRO STATION',
    'stop_lat': 38.920778,
    'stop_lon': -76.995682
  }, {
    'stop_id': 'DC:4567',
    'stop_name': 'NOMA-GALLAUDET U (NEW YORK AVE) METRO STATION',
    'stop_lat': 38.907413,
    'stop_lon': -77.002981
  }, {
    'stop_id': 'DC:12872',
    'stop_name': 'UNION STATION METRO STATION',
    'stop_lat': 38.89777,
    'stop_lon': -77.006402
  }, {
    'stop_id': 'DC:12874',
    'stop_name': 'JUDICIARY SQUARE METRO STATION',
    'stop_lat': 38.896121,
    'stop_lon': -77.016312
  }, {
    'stop_id': 'DC:7588',
    'stop_name': 'METRO CENTER METRO STATION',
    'stop_lat': 38.898327,
    'stop_lon': -77.027777
  }, {
    'stop_id': 'DC:5635',
    'stop_name': 'FARRAGUT NORTH METRO STATION',
    'stop_lat': 38.903297,
    'stop_lon': -77.039502
  }, {
    'stop_id': 'DC:4956',
    'stop_name': 'DUPONT CIRCLE METRO STATION',
    'stop_lat': 38.911129,
    'stop_lon': -77.044428
  }, {
    'stop_id': 'DC:4905',
    'stop_name': 'WOODLEY PARK-ZOO METRO STATION',
    'stop_lat': 38.925,
    'stop_lon': -77.05235
  }, {
    'stop_id': 'DC:4912',
    'stop_name': 'CLEVELAND PARK METRO STATION',
    'stop_lat': 38.935852,
    'stop_lon': -77.058624
  }, {
    'stop_id': 'DC:4941',
    'stop_name': 'VAN NESS-UDC METRO STATION',
    'stop_lat': 38.944519,
    'stop_lon': -77.063716
  }, {
    'stop_id': 'DC:5660',
    'stop_name': 'TENLEYTOWN METRO STATION',
    'stop_lat': 38.947849,
    'stop_lon': -77.079299
  }, {
    'stop_id': 'DC:4364',
    'stop_name': 'FRIENDSHIP HEIGHTS METRO STATION',
    'stop_lat': 38.960997,
    'stop_lon': -77.085767
  }, {
    'stop_id': 'DC:4387',
    'stop_name': 'BETHESDA METRO STATION',
    'stop_lat': 38.984431,
    'stop_lon': -77.094151
  }, {
    'stop_id': 'DC:2640',
    'stop_name': 'MEDICAL CENTER METRO/NAVAL MED CTR & NIH',
    'stop_lat': 39.000062,
    'stop_lon': -77.096948
  }, {
    'stop_id': 'DC:3542',
    'stop_name': 'GROSVENOR METRO STATION',
    'stop_lat': 39.029243,
    'stop_lon': -77.103838
  }, {
    'stop_id': 'DC:22094',
    'stop_name': 'WHITE FLINT METRO STATION',
    'stop_lat': 39.047162,
    'stop_lon': -77.112782
  }, {
    'stop_id': 'DC:3969',
    'stop_name': 'TWINBROOK METRO STATION',
    'stop_lat': 39.062389,
    'stop_lon': -77.120792
  }, {
    'stop_id': 'DC:7993',
    'stop_name': 'ROCKVILLE METRO STATION',
    'stop_lat': 39.085452,
    'stop_lon': -77.146689
  }, {
    'stop_id': 'DC:9360',
    'stop_name': 'SHADY GROVE METRO STATION',
    'stop_lat': 39.11999,
    'stop_lon': -77.164761
  }],
  'streetEdges': [{
    'edge_id': '19227',
    'geometry': {
      'points': 'illlFxveuM?Y?sF',
      'length': 3
    }
  }, {
    'edge_id': '19229',
    'geometry': {
      'points': 'illlFtweuM?[',
      'length': 2
    }
  }, {
    'edge_id': '48675',
    'geometry': {
      'points': 'qkmlFxyduMuD?',
      'length': 2
    }
  }, {
    'edge_id': '48677',
    'geometry': {
      'points': 'ikmlFxyduMG?',
      'length': 2
    }
  }, {
    'edge_id': '48679',
    'geometry': {
      'points': 'odmlFxyduMyE?',
      'length': 2
    }
  }, {
    'edge_id': '52424',
    'geometry': {
      'points': 'gqmlFbyduMa@?',
      'length': 2
    }
  }, {
    'edge_id': '52426',
    'geometry': {
      'points': 'ikmlFbyduM}D?',
      'length': 2
    }
  }, {
    'edge_id': '74470',
    'geometry': {
      'points': 'ckjlFvxguME?M@',
      'length': 3
    }
  }, {
    'edge_id': '74483',
    'geometry': {
      'points': '{xjlFhzfuM?W?O@WFY',
      'length': 5
    }
  }, {
    'edge_id': '153191',
    'geometry': {
      'points': 'k`klF|pfuM]A',
      'length': 2
    }
  }, {
    'edge_id': '153193',
    'geometry': {
      'points': 'o_klFzsfuMIWKYEU?U',
      'length': 5
    }
  }, {
    'edge_id': '237054',
    'geometry': {
      'points': 'odmlFdyduM?R',
      'length': 2
    }
  }, {
    'edge_id': '448639',
    'geometry': {
      'points': 'e~jlFptfuMi@U',
      'length': 2
    }
  }, {
    'edge_id': '461719',
    'geometry': {
      'points': 'gqmlFxyduM?U',
      'length': 2
    }
  }, {
    'edge_id': '493787',
    'geometry': {
      'points': 'o`klFtxeuMM?',
      'length': 2
    }
  }, {
    'edge_id': '493789',
    'geometry': {
      'points': '}`klFtxeuMUA',
      'length': 2
    }
  }, {
    'edge_id': '568684',
    'geometry': {
      'points': 'wzklF|efuMEa@AEoA_H',
      'length': 4
    }
  }, {
    'edge_id': '568789',
    'geometry': {
      'points': 'ebllFvweuMO?',
      'length': 2
    }
  }, {
    'edge_id': '568791',
    'geometry': {
      'points': 'ubllFvweuMG?O?',
      'length': 3
    }
  }, {
    'edge_id': '568793',
    'geometry': {
      'points': 'mcllFvweuMm@?',
      'length': 2
    }
  }, {
    'edge_id': '568795',
    'geometry': {
      'points': '{dllFvweuMcA?',
      'length': 2
    }
  }, {
    'edge_id': '568797',
    'geometry': {
      'points': '_gllFvweuMkAA',
      'length': 2
    }
  }, {
    'edge_id': '568799',
    'geometry': {
      'points': 'killFtweuMgA?U?',
      'length': 3
    }
  }, {
    'edge_id': '656158',
    'geometry': {
      'points': 'a{elF`yiuMAECM',
      'length': 3
    }
  }, {
    'edge_id': '656405',
    'geometry': {
      'points': 'omelF~viuMB[',
      'length': 2
    }
  }, {
    'edge_id': '656407',
    'geometry': {
      'points': 'kmelFbviuMB]',
      'length': 2
    }
  }, {
    'edge_id': '656415',
    'geometry': {
      'points': 'g{elFlxiuMFOTw@XkAJWDGDCF?JDx@`@jAj@RHVFp@Fj@HbAP',
      'length': 16
    }
  }, {
    'edge_id': '656447',
    'geometry': {
      'points': 'w|elFhyiuMPB',
      'length': 2
    }
  }, {
    'edge_id': '656449',
    'geometry': {
      'points': 'e|elFlyiuMF?H?HAFI',
      'length': 5
    }
  }, {
    'edge_id': '672414',
    'geometry': {
      'points': 'oxjlF~jfuMD_@BUBi@?a@Ci@O_AQi@',
      'length': 8
    }
  }, {
    'edge_id': '672418',
    'geometry': {
      'points': 'qxjlFnwfuMTi@Bc@Ck@',
      'length': 4
    }
  }, {
    'edge_id': '672421',
    'geometry': {
      'points': 'izjlFdxfuMa@I',
      'length': 2
    }
  }, {
    'edge_id': '672423',
    'geometry': {
      'points': 'k{jlFzwfuMSWO[KSMOQIIG',
      'length': 7
    }
  }, {
    'edge_id': '672437',
    'geometry': {
      'points': '{|jlFd~euMAi@qBeC',
      'length': 3
    }
  }, {
    'edge_id': '672911',
    'geometry': {
      'points': '{zjlFf~euM_AA',
      'length': 2
    }
  }, {
    'edge_id': '672995',
    'geometry': {
      'points': '{zjlFt~euM?M',
      'length': 2
    }
  }, {
    'edge_id': '709290',
    'geometry': {
      'points': 'uzflFtsjuM@eA?W',
      'length': 3
    }
  }, {
    'edge_id': '709292',
    'geometry': {
      'points': 'szflFvpjuMHuBP}AVeBXsAd@{A',
      'length': 6
    }
  }, {
    'edge_id': '709294',
    'geometry': {
      'points': '_wflFlajuMhAyC\\_A',
      'length': 3
    }
  }, {
    'edge_id': '723598',
    'geometry': {
      'points': 'gyjlFhbfuMIUCa@CQOSQU',
      'length': 6
    }
  }, {
    'edge_id': '723604',
    'geometry': {
      'points': '{wjlFtsfuM[qAAY?W@[D[DU',
      'length': 7
    }
  }, {
    'edge_id': '724908',
    'geometry': {
      'points': 'wkjlFxxguMKe@Qe@',
      'length': 3
    }
  }, {
    'edge_id': '724910',
    'geometry': {
      'points': 'uljlFlvguMQ[[WE@Q@',
      'length': 5
    }
  }, {
    'edge_id': '724912',
    'geometry': {
      'points': '{njlF|tguMI?U?',
      'length': 3
    }
  }, {
    'edge_id': '724914',
    'geometry': {
      'points': '{ojlF|tguMG?W?',
      'length': 3
    }
  }, {
    'edge_id': '724916',
    'geometry': {
      'points': '{pjlF|tguMe@?',
      'length': 2
    }
  }, {
    'edge_id': '724918',
    'geometry': {
      'points': 'arjlF|tguME?',
      'length': 2
    }
  }, {
    'edge_id': '724920',
    'geometry': {
      'points': 'grjlF|tguM[?',
      'length': 2
    }
  }, {
    'edge_id': '724922',
    'geometry': {
      'points': 'csjlF|tguMC?OAEC',
      'length': 4
    }
  }, {
    'edge_id': '724924',
    'geometry': {
      'points': '}sjlFvtguM??',
      'length': 2
    }
  }, {
    'edge_id': '724926',
    'geometry': {
      'points': '}sjlFvtguMMK',
      'length': 2
    }
  }, {
    'edge_id': '724928',
    'geometry': {
      'points': 'ktjlFjtguMYY',
      'length': 2
    }
  }, {
    'edge_id': '724930',
    'geometry': {
      'points': 'eujlFpsguMEs@',
      'length': 2
    }
  }, {
    'edge_id': '724932',
    'geometry': {
      'points': 'kujlF|qguMAg@',
      'length': 2
    }
  }, {
    'edge_id': '724934',
    'geometry': {
      'points': 'mujlFtpguMo@gC',
      'length': 2
    }
  }, {
    'edge_id': '724942',
    'geometry': {
      'points': 'ayjlFj`guMHe@DoA',
      'length': 3
    }
  }, {
    'edge_id': '724944',
    'geometry': {
      'points': 'qxjlFt|fuMAQGy@',
      'length': 3
    }
  }, {
    'edge_id': '724946',
    'geometry': {
      'points': '{xjlFhzfuMKYS[MM',
      'length': 4
    }
  }, {
    'edge_id': '724973',
    'geometry': {
      'points': 'ctjlF|qguMg@?',
      'length': 2
    }
  }, {
    'edge_id': '725136',
    'geometry': {
      'points': '}vjlFllguMF]?c@A]C_@SeAQ{@Qs@MkA',
      'length': 9
    }
  }, {
    'edge_id': '725150',
    'geometry': {
      'points': 'ykjlFvtguM?OEGKOMOSO',
      'length': 6
    }
  }, {
    'edge_id': '725152',
    'geometry': {
      'points': 'mmjlFnrguMSM',
      'length': 2
    }
  }, {
    'edge_id': '725154',
    'geometry': {
      'points': 'anjlF`rguMYC',
      'length': 2
    }
  }, {
    'edge_id': '725156',
    'geometry': {
      'points': '{njlF|qguM_A?',
      'length': 2
    }
  }, {
    'edge_id': '725158',
    'geometry': {
      'points': '{pjlF|qguMeA?',
      'length': 2
    }
  }, {
    'edge_id': '725160',
    'geometry': {
      'points': 'asjlF|qguMa@?',
      'length': 2
    }
  }, {
    'edge_id': '743623',
    'geometry': {
      'points': 'wsflFrziuMj@}A',
      'length': 2
    }
  }, {
    'edge_id': '747492',
    'geometry': {
      'points': 'krflFtwiuMUI',
      'length': 2
    }
  }, {
    'edge_id': '747494',
    'geometry': {
      'points': 'asflFjwiuMKG',
      'length': 2
    }
  }, {
    'edge_id': '747496',
    'geometry': {
      'points': 'msflFbwiuM]SUESByARYB_@As@G',
      'length': 8
    }
  }, {
    'edge_id': '747498',
    'geometry': {
      'points': '}{flFzviuM_@SYK',
      'length': 3
    }
  }, {
    'edge_id': '761868',
    'geometry': {
      'points': 'c}llFfsduM?V',
      'length': 2
    }
  }, {
    'edge_id': '782085',
    'geometry': {
      'points': 'i|llFhsduMYA',
      'length': 2
    }
  }, {
    'edge_id': '821199',
    'geometry': {
      'points': 'u~elFxijuMWC',
      'length': 2
    }
  }, {
    'edge_id': '855079',
    'geometry': {
      'points': '}yflFnyjuMIZ',
      'length': 2
    }
  }, {
    'edge_id': '866748',
    'geometry': {
      'points': 'gmelFduiuMFs@',
      'length': 2
    }
  }, {
    'edge_id': '937029',
    'geometry': {
      'points': '}vklF|sduM[?',
      'length': 2
    }
  }, {
    'edge_id': '937031',
    'geometry': {
      'points': 'ywklF|sduMM?',
      'length': 2
    }
  }, {
    'edge_id': '937033',
    'geometry': {
      'points': 'gxklF|sduMsC?',
      'length': 2
    }
  }, {
    'edge_id': '937035',
    'geometry': {
      'points': '{|klF|sduMS?Y?',
      'length': 3
    }
  }, {
    'edge_id': '937037',
    'geometry': {
      'points': 'i~klF|sduMiC?',
      'length': 2
    }
  }, {
    'edge_id': '937039',
    'geometry': {
      'points': 'sbllF|sduMq@@',
      'length': 2
    }
  }, {
    'edge_id': '937041',
    'geometry': {
      'points': 'edllF~sduMuCA',
      'length': 2
    }
  }, {
    'edge_id': '937043',
    'geometry': {
      'points': '{hllF|sduMgA?E?',
      'length': 3
    }
  }, {
    'edge_id': '937045',
    'geometry': {
      'points': 'ikllF|sduMe@O',
      'length': 2
    }
  }, {
    'edge_id': '1131076',
    'geometry': {
      'points': 'iaklFzpfuMAaI',
      'length': 2
    }
  }, {
    'edge_id': '1131344',
    'geometry': {
      'points': 'kaklFxffuMe@?',
      'length': 2
    }
  }, {
    'edge_id': '1142726',
    'geometry': {
      'points': 'wuklF`beuMDY',
      'length': 2
    }
  }, {
    'edge_id': '1142744',
    'geometry': {
      'points': 'ajklFbpeuMMDMF',
      'length': 3
    }
  }, {
    'edge_id': '1142746',
    'geometry': {
      'points': '}jklFppeuMEBc@PMBWDS?S?OCSEWGSK',
      'length': 11
    }
  }, {
    'edge_id': '1142748',
    'geometry': {
      'points': 'eqklFrpeuMMISOMMMMKMKQIOAC',
      'length': 9
    }
  }, {
    'edge_id': '1142750',
    'geometry': {
      'points': 'gtklFhmeuMGQQc@ES',
      'length': 4
    }
  }, {
    'edge_id': '1142752',
    'geometry': {
      'points': 'guklF~jeuMCKI[Im@BuA?eABk@',
      'length': 7
    }
  }, {
    'edge_id': '1188802',
    'geometry': {
      'points': 'c~elFzpjuMC_@E_AC_ACaA',
      'length': 5
    }
  }, {
    'edge_id': '1188804',
    'geometry': {
      'points': 'u~elFxijuMBY',
      'length': 2
    }
  }, {
    'edge_id': '1188806',
    'geometry': {
      'points': 'q~elF~hjuMBw@PyE',
      'length': 3
    }
  }, {
    'edge_id': '1188808',
    'geometry': {
      'points': '{}elFl`juMLyA',
      'length': 2
    }
  }, {
    'edge_id': '1188810',
    'geometry': {
      'points': 'm}elFr}iuM@EDm@',
      'length': 3
    }
  }, {
    'edge_id': '1188812',
    'geometry': {
      'points': 'e}elF~{iuMBS',
      'length': 2
    }
  }, {
    'edge_id': '1188814',
    'geometry': {
      'points': 'a}elFj{iuMDi@',
      'length': 2
    }
  }, {
    'edge_id': '1188816',
    'geometry': {
      'points': '{|elF`ziuMBW',
      'length': 2
    }
  }, {
    'edge_id': '1290368',
    'geometry': {
      'points': 'illlFjneuMSC',
      'length': 2
    }
  }, {
    'edge_id': '1356413',
    'geometry': {
      'points': 'gzflFjzjuMMWM]Ma@Om@Im@Cm@?{@@_@@i@?q@Fu@D_A@s@LE',
      'length': 15
    }
  }, {
    'edge_id': '1356415',
    'geometry': {
      'points': 'm{flF`hjuMHCPm@Pq@?U',
      'length': 5
    }
  }, {
    'edge_id': '1356417',
    'geometry': {
      'points': '_zflFfdjuMAMPMR[^}@LQx@oBCC?GBO',
      'length': 10
    }
  }, {
    'edge_id': '1356419',
    'geometry': {
      'points': 'suflFr{iuMDKPKd@qAFW?M',
      'length': 6
    }
  }, {
    'edge_id': '1356421',
    'geometry': {
      'points': 'msflFbwiuM?GIQKK',
      'length': 4
    }
  }, {
    'edge_id': '1402250',
    'geometry': {
      'points': 'ctflF|uiuM_@GYC_@Di@H_@D]DQ?[CUGi@UCN',
      'length': 12
    }
  }, {
    'edge_id': '1402252',
    'geometry': {
      'points': 'w}flFzuiuMAHc@UaCuAeAo@eDyA]YQMe@UOEu@QCKAM_AGWGaCu@sBi@mEo@',
      'length': 18
    }
  }, {
    'edge_id': '1414639',
    'geometry': {
      'points': 'q~elF~hjuMYG',
      'length': 2
    }
  }, {
    'edge_id': '1414643',
    'geometry': {
      'points': 'cuflFprjuMEDk@~@sAvB',
      'length': 4
    }
  }, {
    'edge_id': '1414645',
    'geometry': {
      'points': 'iyflFnxjuMS^',
      'length': 2
    }
  }, {
    'edge_id': '1467609',
    'geometry': {
      'points': '}ullFl}duMmDeBEA',
      'length': 3
    }
  }, {
    'edge_id': '1467611',
    'geometry': {
      'points': 'gullFn}duMUA',
      'length': 2
    }
  }, {
    'edge_id': '1467613',
    'geometry': {
      'points': 'mtllFp}duMYA',
      'length': 2
    }
  }, {
    'edge_id': '1467620',
    'geometry': {
      'points': 'q_mlFvuduMIC',
      'length': 2
    }
  }, {
    'edge_id': '1467717',
    'geometry': {
      'points': 'q{llFzyduM?S',
      'length': 2
    }
  }, {
    'edge_id': '1467719',
    'geometry': {
      'points': 'q{llFdzduM?I',
      'length': 2
    }
  }, {
    'edge_id': '1679324',
    'geometry': {
      'points': '_kjlF`vguMMY',
      'length': 2
    }
  }, {
    'edge_id': '1679326',
    'geometry': {
      'points': 'mkjlFfuguMKO',
      'length': 2
    }
  }, {
    'edge_id': '1680123',
    'geometry': {
      'points': '_jjlFz{guM?Y',
      'length': 2
    }
  }, {
    'edge_id': '1680125',
    'geometry': {
      'points': '_jjlF`{guM?Y',
      'length': 2
    }
  }, {
    'edge_id': '1680127',
    'geometry': {
      'points': '_jjlFfzguMAW',
      'length': 2
    }
  }, {
    'edge_id': '1680327',
    'geometry': {
      'points': 'saklFrxeuM@[',
      'length': 2
    }
  }, {
    'edge_id': '1680520',
    'geometry': {
      'points': 'ajjlFnyguMA[AE',
      'length': 3
    }
  }, {
    'edge_id': '1680522',
    'geometry': {
      'points': 'ejjlFlxguMESQs@AC',
      'length': 4
    }
  }, {
    'edge_id': '1682944',
    'geometry': {
      'points': 'ydmlFdyduMoEA',
      'length': 2
    }
  }, {
    'edge_id': '1682946',
    'geometry': {
      'points': 'odmlFdyduMI?',
      'length': 2
    }
  }, {
    'edge_id': '1682948',
    'geometry': {
      'points': 'wcmlFbyduMW@',
      'length': 2
    }
  }, {
    'edge_id': '1794679',
    'geometry': {
      'points': 'gullFfsduMS?yA?',
      'length': 3
    }
  }, {
    'edge_id': '1794681',
    'geometry': {
      'points': 'uxllFfsduM}A@',
      'length': 2
    }
  }, {
    'edge_id': '1794683',
    'geometry': {
      'points': 's{llFhsduMU?',
      'length': 2
    }
  }, {
    'edge_id': '1795237',
    'geometry': {
      'points': 'ikmlFrzeuMA{G',
      'length': 2
    }
  }, {
    'edge_id': '1795239',
    'geometry': {
      'points': 'kkmlFvqeuM@kK',
      'length': 2
    }
  }, {
    'edge_id': '1795241',
    'geometry': {
      'points': 'ikmlFjeeuM?qJ',
      'length': 2
    }
  }, {
    'edge_id': '1795243',
    'geometry': {
      'points': 'ikmlFxyduM?U',
      'length': 2
    }
  }, {
    'edge_id': '1860390',
    'geometry': {
      'points': '}lllFfneuM]?',
      'length': 2
    }
  }, {
    'edge_id': '1878184',
    'geometry': {
      'points': 'qaklFvweuMa@?',
      'length': 2
    }
  }, {
    'edge_id': '1886257',
    'geometry': {
      'points': 'quklFfaeuMKY',
      'length': 2
    }
  }, {
    'edge_id': '1886259',
    'geometry': {
      'points': '}uklFl`euMGQAMCW',
      'length': 4
    }
  }, {
    'edge_id': '1886261',
    'geometry': {
      'points': 'kvklFt~duMMaBAQAUCaD',
      'length': 5
    }
  }, {
    'edge_id': '1886263',
    'geometry': {
      'points': 'awklFhuduM?G@I',
      'length': 3
    }
  }, {
    'edge_id': '1886265',
    'geometry': {
      'points': '_wklFvtduM@E',
      'length': 2
    }
  }, {
    'edge_id': '1886267',
    'geometry': {
      'points': '}vklFptduM@G',
      'length': 2
    }
  }, {
    'edge_id': '1886269',
    'geometry': {
      'points': '{vklFhtduMAK',
      'length': 2
    }
  }, {
    'edge_id': '1891870',
    'geometry': {
      'points': 'q{llFfyduME?Q?',
      'length': 3
    }
  }, {
    'edge_id': '1899591',
    'geometry': {
      'points': 'o}klFt{euMIWMc@G]CCCEIEOAW?{@Q',
      'length': 10
    }
  }, {
    'edge_id': '1900464',
    'geometry': {
      'points': 'sbklFhveuMa@m@Wg@W[MQMMSK_@Qk@OMCQA',
      'length': 11
    }
  }, {
    'edge_id': '1902545',
    'geometry': {
      'points': 'qbklFxefuMa@@',
      'length': 2
    }
  }, {
    'edge_id': '1902547',
    'geometry': {
      'points': 'scklFzefuMqAB',
      'length': 2
    }
  }, {
    'edge_id': '1902549',
    'geometry': {
      'points': 'efklF~efuMM?qB?',
      'length': 3
    }
  }, {
    'edge_id': '1942332',
    'geometry': {
      'points': 'c}llF~sduMc@Zi@Z',
      'length': 3
    }
  }, {
    'edge_id': '1942353',
    'geometry': {
      'points': '{_mlFruduM@BBD@FAFAFEDE@E?EA',
      'length': 10
    }
  }, {
    'edge_id': '1942378',
    'geometry': {
      'points': '}bmlFlxduM?T',
      'length': 2
    }
  }, {
    'edge_id': '1942380',
    'geometry': {
      'points': '}bmlFhxduM?B',
      'length': 2
    }
  }, {
    'edge_id': '2029996',
    'geometry': {
      'points': 'kxjlFbmfuMAQAW?Y',
      'length': 4
    }
  }, {
    'edge_id': '2095968',
    'geometry': {
      'points': 'cwklFvefuMY?gABQ@',
      'length': 4
    }
  }, {
    'edge_id': '2222122',
    'geometry': {
      'points': '}bmlFbyduMY?',
      'length': 2
    }
  }, {
    'edge_id': '2222124',
    'geometry': {
      'points': '_}llFfyduMeDAWA',
      'length': 3
    }
  }, {
    'edge_id': '2222126',
    'geometry': {
      'points': 'i|llFfyduMU?',
      'length': 2
    }
  }, {
    'edge_id': '2425462',
    'geometry': {
      'points': 'sbklFvweuM?[',
      'length': 2
    }
  }, {
    'edge_id': '2425464',
    'geometry': {
      'points': 'sbklFzveuM?Q',
      'length': 2
    }
  }, {
    'edge_id': '2580494',
    'geometry': {
      'points': 'o`mlFzvduMGC',
      'length': 2
    }
  }, {
    'edge_id': '2580767',
    'geometry': {
      'points': 'w`mlFvvduMw@h@MF',
      'length': 3
    }
  }, {
    'edge_id': '2594308',
    'geometry': {
      'points': 'sqllFdfeuM?m@',
      'length': 2
    }
  }, {
    'edge_id': '2594319',
    'geometry': {
      'points': 'sollFfjeuMEMIUCQCUCS?W',
      'length': 7
    }
  }, {
    'edge_id': '2594321',
    'geometry': {
      'points': '_ollFjkeuMGMIOAE',
      'length': 4
    }
  }, {
    'edge_id': '2594323',
    'geometry': {
      'points': 'inllFhleuMIKKQ',
      'length': 3
    }
  }, {
    'edge_id': '2594400',
    'geometry': {
      'points': 'mqllFldeuM?[C[EUEUIQ',
      'length': 6
    }
  }, {
    'edge_id': '2594402',
    'geometry': {
      'points': 'grllFv`euMWc@',
      'length': 2
    }
  }, {
    'edge_id': '2594404',
    'geometry': {
      'points': '_sllFr_euMS_@',
      'length': 2
    }
  }, {
    'edge_id': '2594437',
    'geometry': {
      'points': '{mllFfneuM?Q?C',
      'length': 3
    }
  }, {
    'edge_id': '2594474',
    'geometry': {
      'points': 'ssllFr~duM@C@C?E?EAEACAA?ACACACA',
      'length': 12
    }
  }, {
    'edge_id': '2594476',
    'geometry': {
      'points': 'atllFj}duMC@E@A@',
      'length': 4
    }
  }, {
    'edge_id': '2594501',
    'geometry': {
      'points': '{mllFpmeuMEACCCCAC',
      'length': 5
    }
  }, {
    'edge_id': '2594507',
    'geometry': {
      'points': 'knllFbmeuMAG?E@E@E',
      'length': 5
    }
  }, {
    'edge_id': '2594522',
    'geometry': {
      'points': 'sqllFvdeuMDI',
      'length': 2
    }
  }, {
    'edge_id': '2594527',
    'geometry': {
      'points': 'opllFnfeuM]A',
      'length': 2
    }
  }, {
    'edge_id': '2594531',
    'geometry': {
      'points': 'mqllFlfeuMEG',
      'length': 2
    }
  }, {
    'edge_id': '2611965',
    'geometry': {
      'points': 'i`hlF~eiuMaDY',
      'length': 2
    }
  }, {
    'edge_id': '2611973',
    'geometry': {
      'points': 'kwilFtqiuMYHYFWB[ASCMEIGGIIW',
      'length': 10
    }
  }, {
    'edge_id': '2611975',
    'geometry': {
      'points': 'gvilFboiuMAD?FBN?LAFGH[R',
      'length': 8
    }
  }, {
    'edge_id': '2611977',
    'geometry': {
      'points': 'k_ilFhfiuMAHCDG@q@Jm@JiAZ',
      'length': 7
    }
  }, {
    'edge_id': '2611979',
    'geometry': {
      'points': 'o{hlFdfiuM{@DUASCQGCJ',
      'length': 6
    }
  }, {
    'edge_id': '2611981',
    'geometry': {
      'points': 'ceilFnhiuM_@J',
      'length': 2
    }
  }, {
    'edge_id': '2612043',
    'geometry': {
      'points': 'ooilFnkiuMYJQJWPMJYH_@Bg@LQ@G@GDAF?H?D',
      'length': 14
    }
  }, {
    'edge_id': '2612052',
    'geometry': {
      'points': 'qkjlFfghuMMg@',
      'length': 2
    }
  }, {
    'edge_id': '2612054',
    'geometry': {
      'points': '_ljlF~ehuMEQE]Ce@@e@BYFU',
      'length': 7
    }
  }, {
    'edge_id': '2612056',
    'geometry': {
      'points': 'aljlFr`huMX[HS',
      'length': 3
    }
  }, {
    'edge_id': '2612058',
    'geometry': {
      'points': '}jjlFb_huMH[',
      'length': 2
    }
  }, {
    'edge_id': '2612060',
    'geometry': {
      'points': 'sjjlFf~guMRkA',
      'length': 2
    }
  }, {
    'edge_id': '2612064',
    'geometry': {
      'points': 'q|ilFtpiuM_Nmh@',
      'length': 2
    }
  }, {
    'edge_id': '2612081',
    'geometry': {
      'points': 'ywhlFpeiuMuBR',
      'length': 2
    }
  }, {
    'edge_id': '2612083',
    'geometry': {
      'points': 'ynhlFxciuMCGUHWFc@FiAL_CV',
      'length': 7
    }
  }, {
    'edge_id': '2612085',
    'geometry': {
      'points': 'ukhlFjdiuMY@c@AK?QCECAI',
      'length': 7
    }
  }, {
    'edge_id': '2612087',
    'geometry': {
      'points': 'kehlFdeiuMsAIwAMOCM@',
      'length': 5
    }
  }, {
    'edge_id': '2612089',
    'geometry': {
      'points': 'wjilFnjiuMEIEAE@YHc@F]Hi@L',
      'length': 8
    }
  }, {
    'edge_id': '2612091',
    'geometry': {
      'points': 'cfilFzhiuMe@Lg@N[LULGBCACACE',
      'length': 9
    }
  }, {
    'edge_id': '3072582',
    'geometry': {
      'points': 'opklFvefuMiC?k@?',
      'length': 3
    }
  }, {
    'edge_id': '3072583',
    'geometry': {
      'points': 'evklFvefuMI?S?',
      'length': 3
    }
  }, {
    'edge_id': '3123161',
    'geometry': {
      'points': 'ezflFrvjuMKk@Cq@',
      'length': 3
    }
  }, {
    'edge_id': '3142709',
    'geometry': {
      'points': 'uimlFtyeuMWJ[P',
      'length': 3
    }
  }, {
    'edge_id': '3154892',
    'geometry': {
      'points': 'okklF~efuMOE_CA',
      'length': 3
    }
  }, {
    'edge_id': '3154893',
    'geometry': {
      'points': '_pklFvefuMO?',
      'length': 2
    }
  }, {
    'edge_id': '3154912',
    'geometry': {
      'points': 'ejklF~efuMS?',
      'length': 2
    }
  }, {
    'edge_id': '3154913',
    'geometry': {
      'points': 'yjklF~efuME?O?',
      'length': 3
    }
  }, {
    'edge_id': '3157751',
    'geometry': {
      'points': 'qtflFxqjuMQV',
      'length': 2
    }
  }, {
    'edge_id': '3161890',
    'geometry': {
      'points': 'm_flFtijuM]CmAFoCZuAZwA`@m@Pc@Ra@Tm@d@q@r@',
      'length': 11
    }
  }, {
    'edge_id': '3162308',
    'geometry': {
      'points': 'olllFlsduMS?',
      'length': 2
    }
  }, {
    'edge_id': '3162309',
    'geometry': {
      'points': 'cmllFlsduMK?',
      'length': 2
    }
  }, {
    'edge_id': '3167394',
    'geometry': {
      'points': 'k_flFvhjuMi@@_AFaDZiDz@oAb@gAr@k@h@c@n@',
      'length': 9
    }
  }, {
    'edge_id': '3167395',
    'geometry': {
      'points': 'itflFjqjuMGL',
      'length': 2
    }
  }, {
    'edge_id': '3167410',
    'geometry': {
      'points': 'ksflFhqjuMA@EF',
      'length': 3
    }
  }, {
    'edge_id': '3180136',
    'geometry': {
      'points': '_melFpsiuMD_@',
      'length': 2
    }
  }, {
    'edge_id': '3180137',
    'geometry': {
      'points': 'ylelFpriuMB[',
      'length': 2
    }
  }, {
    'edge_id': '3262102',
    'geometry': {
      'points': 'qbklFxffuM?_@',
      'length': 2
    }
  }, {
    'edge_id': '3262103',
    'geometry': {
      'points': 'qbklFxefuM??',
      'length': 2
    }
  }, {
    'edge_id': '3315489',
    'geometry': {
      'points': 'ghmlFzxeuMm@X',
      'length': 2
    }
  }, {
    'edge_id': '3350231',
    'geometry': {
      'points': 'ulelFtqiuMCZ',
      'length': 2
    }
  }, {
    'edge_id': '3351990',
    'geometry': {
      'points': 'ssflFrqjuMa@p@MSEDk@~@sAvBYq@AI',
      'length': 8
    }
  }, {
    'edge_id': '3421589',
    'geometry': {
      'points': 'omllFlsduME?S?',
      'length': 3
    }
  }, {
    'edge_id': '3421590',
    'geometry': {
      'points': 'inllFlsduM{DCa@A',
      'length': 3
    }
  }]
}