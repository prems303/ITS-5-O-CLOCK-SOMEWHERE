

var data = {
  timezones:[
    {
      "time": 17,
      "name": "Dunedin",
      "drink": "Speights",
      "lat": -45.8788,
      "long": 170.5028
    },
    {
      "time": 16,
      "name": "Midway",
      "drink": "Rum",
      "lat": 28.2101,
      "long": -177.3761
    },
    {
      "time": 15,
      "name": "Rarotonga",
      "drink": "Kiva Pale Ale",
      "lat": -21.2292,
      "long": -159.7763
    },
    {
      "time": 20,
      "name": "Anchorage",
      "drink": "Sazerac",
      "lat": 61.2181,
      "long": 149.9003
    },
    {
      "time": 21,
      "name": "Juneau",
      "drink": "Amber",
      "lat": 58.3019,
      "long": 134.4197
    },
    {
      "time": 22,
      "name": "Seattle",
      "drink": "Red Hook",
      "lat": 47.6062,
      "long": 170.5028
    },
    {
      "time": 23,
      "name": "Denver",
      "drink": "Alpine Glacier Lager",
      "lat": 37.7392,
      "long": 104.0093
    },
    {
      "time": 24,
      "name": "Dallas",
      "drink": "Jim Bean",
      "lat": 32.7767,
      "long": 96.7970
    },
    {
      "time": 1,
      "name": "Washington D C",
      "drink": "West Veteran 12(XII)",
      "lat": 38.9072,
      "long": 77.0369
    },
    {
      "time": 2,
      "name": "Manaus",
      "drink": "Brahma",
      "lat": 3.1189,
      "long": 60.0215
    },
    {
      "time": 3,
      "name": "Sao Paulo",
      "drink": "Good Cachaca",
      "lat": 23.5505,
      "long": 46.6333
    },
    {
      "time": 4,
      "name": "Portugal",
      "drink": "Super Bock",
      "lat": 39.4791,
      "long": -12.3468
    },
    {
      "time": 5,
      "name": "London",
      "drink": "Budweiser",
      "lat": 51.5287,
      "long": -0.3817
    },
    {
      "time": 6,
      "name": "Madrid",
      "drink": "Sangria",
      "lat": 40.4381,
      "long": -3.8196
    },
    {
      "time": 7,
      "name": "Vienna",
      "drink": "Ottakringer",
      "lat": 48.2208,
      "long": 16.2399
    },
    {
      "time": 8,
      "name": "Moscow",
      "drink": "Absolut Vodka",
      "lat": 55.7492,
      "long": 37.0720
    },
    {
      "time": 9,
      "name": "Port Louis",
      "drink": "Pheonix",
      "lat": -20.1628,
      "long": 57.4268
    },
    {
      "time": 10,
      "name": "New Delhi",
      "drink": "King Fisher",
      "lat": 28.5275,
      "long": 77.0688
    },
    {
      "time": 11,
      "name": "Mayanmar",
      "drink": "Mandalay Beer",
      "lat": 18.8739,
      "long": 87.6236
    },
    {
      "time": 12,
      "name": "Singapore",
      "drink": "Tiger",
      "lat": 1.3150,
      "long": 103.7069
    },
    {
      "time": 13,
      "name": "Manilla",
      "drink": "Manilla Beer",
      "lat": 14.5965,
      "long": 120.9446
    },
    {
      "time": 14,
      "name": "Tokyo",
      "drink": "Shochu",
      "lat": 35.6735,
      "long": 139.5703
    },
    {
      "time": 67,
      "name": "Sydney",
      "drink": "Fosters",
      "lat": -33.847404,
      "long": 150.651795
    },
    {
      "time": 556,
      "name": "Port Vila",
      "drink": "Sherry",
      "lat": -17.7333,
      "long": 168.3273
    }
  ]
}

function currentTime () {
  var time = new Date().getHours();
  for (var i = 0; i < data.timezones.length; i++) {
    if(data.timezones[i].time === time){
      data.timezones[i].currentTime = true;
    } else {
      data.timezones[i].currentTime = false;
    }

  }
}

currentTime();

module.exports = {
  data: data
}
