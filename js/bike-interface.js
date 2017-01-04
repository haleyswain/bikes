var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#bikeLocation').submit(function(event) {
    event.preventDefault();
    debugger;
    var city = $('#location').val();
    $('#location').val("");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=' + city + '&distance=5&stolenness=stolen&appid=' + apiKey).then(function(response) {
      console.log(response.bikes)
      $('.showBikes').text("Lost Bikes in " + city + response.bikes.length);
    });
  });
});
