/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "&APPID=c83ad52bba836f8b33305e95f3e09da5";
  var cityName = '={Washington D.C.}';

function getWeather() {
  var URL = weatherUrl + cityName + apiKey;
  console.log(URL);

  $.ajax({
    url:URL,
    type:'GET',
    success: function(response){
      console.log(response)
      )}
}

