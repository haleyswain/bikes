var apiKey = require('./../.env').apiKey;
var bikes = [];

Bike = function(title) {
  this.title = title;
};

$(document).ready(function() {
  $('#bikeLocation').submit(function(event) {
    $('#showBikes').empty();
    event.preventDefault();
    var city = $('#location').val();
    $('#location').val("");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=5&stolenness=proximity&appid=' + apiKey).then(function(response) {
      var bikes = response.bikes;
      for (i = 0; i <= bikes.length; i++) {
        var title = bikes[i].title;
        var colors = bikes[i].frame_colors;
        console.log(colors);
        $('#showBikes').append("<li>" + title + "<br>" + colors + "</li>");
      }
      });
    });
  });
