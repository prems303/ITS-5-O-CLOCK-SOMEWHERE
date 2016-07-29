module.exports = {
  data: data
}

var data = {
  timezones:[
    {
      "Time": 12,
      "Name": "Dunedin",
      "Drink": "Speights"
    },
    {
      "Time": 1800,
      "Name": "Midway",
      "Drink": "Rum"
    },
    {
      "Time": 1900,
      "Name": "Rarotonga",
      "Drink": "Kiva Pale Ale"
    },
    {
      "Time": 2000,
      "Name": "Anchorage",
      "Drink": "Sazerac"
    },
    {
      "Time": 2100,
      "Name": "Juneau",
      "Drink": "Amber"
    }
  ]
}

function currentTime () {
  var time = new Date().getHours();
  var arr = []
  for (var i = 0; i< data.timezones.length; i++) {
  console.log(data.timezones[i].Time)
    // if(data.timezones[i].time === time) {
    //   console.log(data["timezones"][i].time)
    // }
  }



}


currentTime();
