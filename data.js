

var data = {
  timezones:[
    {
      "time": 17,
      "name": "Dunedin",
      "drink": "Speights",
      "lat": 45.8788,
      "long": 170.5028
    },
    {
      "time": 18,
      "name": "Midway",
      "drink": "Rum",
      "lat": 28.2101,
      "long": 177.3761
    },
    {
      "time": 19,
      "name": "Rarotonga",
      "drink": "Kiva Pale Ale",
      "lat": 21.2292,
      "long": 159.7763
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
      "name": "Ponta Delgada",
      "drink": "Super Bock",
      "lat": 37.7428,
      "long": 25.6804
    },
    {
      "time": 5,
      "name": "London",
      "drink": "Budweiser",
      "lat": 8.4657,
      "long": 13.2317
    },
    {
      "time": 6,
      "name": "Madrid",
      "drink": "Sangria",
      "lat": 40.4168,
      "long": 3.7038
    },
    {
      "time": 7,
      "name": "Vienna",
      "drink": "Ottakringer",
      "lat": 48.2082,
      "long": 16.3738
    },
    {
      "time": 8,
      "name": "Moscow",
      "drink": "Absolut Vodka",
      "lat": 55.7558,
      "long": 37.6173
    },
    {
      "time": 9,
      "name": "Port Louis",
      "drink": "Pheonix",
      "lat": 20.1609,
      "long": 57.5012
    },
    {
      "time": 10,
      "name": "New Delhi",
      "drink": "King Fisher",
      "lat": 20.1609,
      "long": 57.5012
    },
    {
      "time": 11,
      "name": "Mayanmar",
      "drink": "Mandalay Beer",
      "lat": 3.1189,
      "long": 60.0215
    },
    {
      "time": 12,
      "name": "Singapore",
      "drink": "Tiger",
      "lat": 1.3521,
      "long": 103.8198
    },
    {
      "time": 13,
      "name": "Manilla",
      "drink": "Manilla Beer",
      "lat": 37.7428,
      "long": 25.6804
    },
    {
      "time": 14,
      "name": "Tokyo",
      "drink": "Shochu",
      "lat": 35.6895,
      "long": 139.6917
    },
    {
      "time": 15,
      "name": "Sydney",
      "drink": "Fosters",
      "lat": 33.8688,
      "long": 151.2093
    },
    {
      "time": 16,
      "name": "Port Vila",
      "drink": "Sherry",
      "lat": 17.7333,
      "long": 168.3273
    }
  ]
}

function currentTime () {
  var time = new Date().getHours();
  for (var i = 0; i < data.timezones.length; i++) {
    if(data.timezones[i].time === time){
      data.timezones[i].currentTime = true;
      console.log(data.timezones[i])
    } else {
      data.timezones[i].currentTime = false;
    }

  }
}

currentTime();

module.exports = {
  data: data
}
