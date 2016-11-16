/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/


var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "";
var units = "units=imperial";
function getWeather(location){
  var URL = weatherUrl+location+"&APPID="+apiKey+"&"+units;
  console.log(URL);
  $.ajax({
    url:URL,
    type:"GET",
    success:function(response){
      console.log(response);
      var temp = Number(response.main.temp);
      var result;
      if(temp<78 && temp>65){
        result = "It's nice";
      }else if (temp>78 && temp < 90) {
        result = "It's warm " + temp + " degrees";
      }else if (temp >= 90){
        result = "It's hot!! "+temp+" degrees";
      }else{
        result = "It's cold!! "+temp+" degrees";
      }

      $('form').append(result+'<br>');
    }
  });
}
$('#submit').on('click',function(e){
  e.preventDefault();
  getWeather($('#location').val());
});