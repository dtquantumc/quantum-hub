// SPDX-License-Identifier: MIT
/*
 * (C) Copyright 2020
 * Diversifying Talent in Quantum Computing, Geering Up, UBC
 */

export default class GraphComponents {
  static getCitiesEdgeList () {
    return [
      [0, 1, 2230],
      [0, 2, 1631],
      [0, 3, 1566],
      [0, 4, 1346],
      [0, 5, 1352],
      [0, 6, 1204],
      [0, 7, 2895],
      [0, 8, 2513],
      [0, 9, 2340],
      [0, 10, 2344],
      [0, 11, 2063],
      [0, 12, 3423],
      [1, 2, 845],
      [1, 3, 707],
      [1, 4, 1001],
      [1, 5, 947],
      [1, 6, 1484],
      [1, 7, 886],
      [1, 8, 5085],
      [1, 9, 2972],
      [1, 10, 4151],
      [1, 11, 3432],
      [1, 12, 495],
      [2, 3, 627],
      [2, 4, 773],
      [2, 5, 424],
      [2, 6, 644],
      [2, 7, 1220],
      [2, 8, 4720],
      [2, 9, 2608],
      [2, 10, 3787],
      [2, 11, 3068],
      [2, 12, 1585],
      [3, 4, 302],
      [3, 5, 341],
      [3, 6, 1027],
      [3, 7, 393],
      [3, 8, 3991],
      [3, 9, 1843],
      [3, 10, 3023],
      [3, 11, 2303],
      [3, 12, 899],
      [4, 5, 368],
      [4, 6, 916],
      [4, 7, 865],
      [4, 8, 976],
      [4, 9, 1348],
      [4, 10, 2567],
      [4, 11, 1847],
      [4, 12, 3540],
      [5, 6, 702],
      [5, 7, 916],
      [5, 8, 4048],
      [5, 9, 1954],
      [5, 10, 3133],
      [5, 11, 2413],
      [5, 12, 1444],
      [6, 7, 2021],
      [6, 8, 4451],
      [6, 9, 2620],
      [6, 10, 3772],
      [6, 11, 3052],
      [6, 12, 2549],
      [7, 8, 4172],
      [7, 9, 2030],
      [7, 10, 3238],
      [7, 11, 2519],
      [7, 12, 542],
      [8, 9, 2319],
      [8, 10, 973],
      [8, 11, 1743],
      [8, 12, 4557],
      [9, 10, 1327],
      [9, 11, 572],
      [9, 12, 2269],
      [10, 11, 758],
      [10, 12, 3527],
      [11, 12, 2850],
      /**
       * NOTE on the below edge:
       * RoutingMachine.js > fetchPath() will create markers
       * based on sourceNodes so we must provide every node we want
       * a marker for as the source node in an edge (i.e. the first
       * node in the array).
       *
       * Each array follows the pattern: [sourceNode, destNode, edgeWeight]
       *
       * TSPutils.js > isEdgeSelected() will make sure an edge which
       * has the same source and destination nodes will not be pushed
       * into the selected-edges edge list to solve
       */
      [12, 12, 0]
    ]
  }

  static getCitiesLatLong () {
    return {
      Albuquerque: [35.106766, -106.629181],
      Boston: [42.361145, -71.057083],
      'Charlotte, NC': [35.227085, -80.843124],
      Detroit: [42.331429, -83.045753],
      'Evanston, IL': [42.045597, -87.688568],
      'Frankfort, Kentucky': [37.839333, -84.270020],
      'Gulfport, Mississippi': [30.367420, -89.092819],
      'Toronto, ON, CA': [43.653225, -79.383186],
      'Vancouver, BC, CA': [49.263569, -123.138573],
      'Winnipeg, MB, CA': [49.900501, -97.139313],
      'Calgary, AB, CA': [51.047310, -114.057968],
      'Regina, SK, CA': [50.451191, -104.616623],
      'Montréal, QC, CA': [45.508888, -73.561668]
    }
  }

  static getCitiesIdMapping () {
    return {
      0: 'Albuquerque',
      1: 'Boston',
      2: 'Charlotte, NC',
      3: 'Detroit',
      4: 'Evanston, IL',
      5: 'Frankfort, Kentucky',
      6: 'Gulfport, Mississippi',
      7: 'Toronto, ON, CA',
      8: 'Vancouver, BC, CA',
      9: 'Winnipeg, MB, CA',
      10: 'Calgary, AB, CA',
      11: 'Regina, SK, CA',
      12: 'Montréal, QC, CA'
    }
  }

  static getCitiesNameMapping () {
    return {
      Albuquerque: 0,
      Boston: 1,
      'Charlotte, NC': 2,
      Detroit: 3,
      'Evanston, IL': 4,
      'Frankfort, Kentucky': 5,
      'Gulfport, Mississippi': 6,
      'Toronto, ON, CA': 7,
      'Vancouver, BC, CA': 8,
      'Winnipeg, MB, CA': 9,
      'Calgary, AB, CA': 10,
      'Regina, SK, CA': 11,
      'Montréal, QC, CA': 12
    }
  }

  static getVanEdgeList () {
    return [
      [0, 1, 16.5],
      [0, 2, 7.3],
      [0, 3, 7.3],
      [0, 4, 7.9],
      [0, 5, 11.3],
      [0, 6, 24.7],
      [0, 7, 14.9],
      [0, 8, 9.8],
      [0, 9, 11.1],
      [0, 10, 10.5],
      [0, 11, 21.3],
      [0, 12, 21.5],
      [1, 2, 9.2],
      [1, 3, 9.1],
      [1, 4, 10.6],
      [1, 5, 7.3],
      [1, 6, 8],
      [1, 7, 4.4],
      [1, 8, 17.5],
      [1, 9, 5.2],
      [1, 10, 8.8],
      [1, 11, 5.6],
      [1, 12, 8.4],
      [2, 3, 1],
      [2, 4, 1.2],
      [2, 5, 9.4],
      [2, 6, 17.1],
      [2, 7, 10.1],
      [2, 8, 6.1],
      [2, 9, 3.8],
      [2, 10, 6.9],
      [2, 11, 14.7],
      [2, 12, 17.3],
      [3, 4, 1.9],
      [3, 5, 7.2],
      [3, 6, 19.2],
      [3, 7, 8.8],
      [3, 8, 4.9],
      [3, 9, 3.6],
      [3, 10, 6.1],
      [3, 11, 14.2],
      [3, 12, 15.9],
      [4, 5, 8.9],
      [4, 6, 20.8],
      [4, 7, 11.7],
      [4, 8, 7.7],
      [4, 9, 5.1],
      [4, 10, 7.7],
      [4, 11, 19.4],
      [4, 12, 21.8],
      [5, 6, 13.3],
      [5, 7, 5.6],
      [5, 8, 8.3],
      [5, 9, 5],
      [5, 10, 1.8],
      [5, 11, 11.2],
      [5, 12, 10.8],
      [6, 7, 8.9],
      [6, 8, 29.9],
      [6, 9, 16.2],
      [6, 10, 15.7],
      [6, 11, 4.3],
      [6, 12, 4],
      [7, 8, 15.5],
      [7, 9, 6],
      [7, 10, 7.2],
      [7, 11, 6.4],
      [7, 12, 7.3],
      [8, 9, 5.9],
      [8, 10, 4.4],
      [8, 11, 16.1],
      [8, 12, 16.1],
      [9, 10, 4.1],
      [9, 11, 12.9],
      [9, 12, 13],
      [10, 11, 13.4],
      [10, 12, 13.4],
      [11, 12, 4.4],
      /**
       * NOTE on the below edge:
       * RoutingMachine.js > fetchPath() will create markers
       * based on sourceNodes so we must provide every node we want
       * a marker for as the source node in an edge (i.e. the first
       * node in the array).
       *
       * Each array follows the pattern: [sourceNode, destNode, edgeWeight]
       *
       * TSPutils.js > isEdgeSelected() will make sure an edge which
       * has the same source and destination nodes will not be pushed
       * into the selected-edges edge list to solve
       */
      [12, 12, 0]
    ]
  }

  static getVanLatLong () {
    return {
      'UBC campus': [49.2666656, -123.249999],
      'SFU campus': [49.2768, -122.9180],
      'Canada Place': [49.288644, -123.110708],
      'Rogers Arena': [49.2733, -123.1053],
      'Stanley park': [49.299999, -123.139999],
      'Metropolise at Metrotown': [49.2274, -122.9999],
      'Lafarge lake': [49.2863, -122.7890],
      'Burnaby lake': [49.2420, -122.9441],
      'Queen Elizabeth park': [49.2418, -123.1126],
      'Playland at PNE': [49.282743, -123.036773],
      'Burnaby Central Park': [49.2277, -123.0180],
      'Mundy Park': [49.2568, -122.8255],
      'Colony Farm Park': [49.229848, -122.807044]
    }
  }

  static getVanIdMapping () {
    return {
      0: 'UBC campus',
      1: 'SFU campus',
      2: 'Canada Place',
      3: 'Rogers Arena',
      4: 'Stanley park',
      5: 'Metropolise at Metrotown',
      6: 'Lafarge lake',
      7: 'Burnaby lake',
      8: 'Queen Elizabeth park',
      9: 'Playland at PNE',
      10: 'Burnaby Central Park',
      11: 'Mundy Park',
      12: 'Colony Farm Park'
    }
  }

  static getVanNameMapping () {
    return {
      'UBC campus': 0,
      'SFU campus': 1,
      'Canada Place': 2,
      'Rogers Arena': 3,
      'Stanley park': 4,
      'Metropolise at Metrotown': 5,
      'Lafarge lake': 6,
      'Burnaby lake': 7,
      'Queen Elizabeth park': 8,
      'Playland at PNE': 9,
      'Burnaby Central Park': 10,
      'Mundy Park': 11,
      'Colony Farm Park': 12
    }
  }

  static getFlowersEdgeList () {
    return [
      [0, 1, 2.23606797749979],
      [0, 2, 6.4031242374328485],
      [0, 3, 13.601470508735444],
      [0, 4, 9.055385138137417],
      [0, 5, 4.123105625617661],
      [0, 6, 4.743416490252569],
      [0, 7, 10.259142264341596],
      [0, 8, 8.558621384311845],
      [0, 9, 10.594810050208546],
      [0, 10, 10.124228365658293],
      [0, 11, 2.0],
      [0, 12, 6.576473218982953],
      [1, 2, 4.47213595499958],
      [1, 3, 11.661903789690601],
      [1, 4, 8.06225774829855],
      [1, 5, 3.1622776601683795],
      [1, 6, 2.5495097567963922],
      [1, 7, 8.139410298049853],
      [1, 8, 8.077747210701755],
      [1, 9, 9.12414379544733],
      [1, 10, 7.905694150420948],
      [1, 11, 2.23606797749979],
      [1, 12, 5.5901699437494745],
      [2, 3, 7.211102550927978],
      [2, 4, 5.0],
      [2, 5, 3.1622776601683795],
      [2, 6, 3.5355339059327378],
      [2, 7, 4.031128874149275],
      [2, 8, 6.103277807866851],
      [2, 9, 5.024937810560445],
      [2, 10, 4.527692569068709],
      [2, 11, 5.0],
      [2, 12, 3.3541019662496847],
      [3, 4, 7.280109889280518],
      [3, 5, 9.899494936611665],
      [3, 6, 10.124228365658293],
      [3, 7, 4.031128874149275],
      [3, 8, 9.340770846134703],
      [3, 9, 4.6097722286464435],
      [3, 10, 5.522680508593631],
      [3, 11, 12.041594578792296],
      [3, 12, 8.32165848854662],
      [4, 5, 5.0],
      [4, 6, 8.276472678623424],
      [4, 7, 6.800735254367722],
      [4, 8, 2.0615528128088303],
      [4, 9, 2.692582403567252],
      [4, 10, 8.276472678623424],
      [4, 11, 7.0710678118654755],
      [4, 12, 2.5],
      [5, 6, 4.301162633521313],
      [5, 7, 7.158910531638177],
      [5, 8, 4.924428900898052],
      [5, 9, 6.5],
      [5, 10, 7.648529270389178],
      [5, 11, 2.23606797749979],
      [5, 12, 2.5],
      [6, 7, 6.264982043070834],
      [6, 8, 8.902246907382429],
      [6, 9, 8.558621384311845],
      [6, 10, 5.656854249492381],
      [6, 11, 4.527692569068709],
      [6, 12, 6.103277807866851],
      [7, 8, 8.631338250816034],
      [7, 9, 5.0],
      [7, 10, 1.8027756377319946],
      [7, 11, 9.013878188659973],
      [7, 12, 6.519202405202649],
      [8, 9, 4.743416490252569],
      [8, 10, 9.962429422585638],
      [8, 11, 6.576473218982953],
      [8, 12, 2.8284271247461903],
      [9, 10, 6.726812023536855],
      [9, 11, 8.73212459828649],
      [9, 12, 4.301162633521313],
      [10, 11, 9.192388155425117],
      [10, 12, 7.566372975210778],
      [11, 12, 4.6097722286464435]
    ]
  }
}
