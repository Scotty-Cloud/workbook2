function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
var tempInFahrenheit = 100;

var tempInCelsius = fahrenheitToCelsius(tempInFahrenheit);

console.log(tempInCelsius.toFixed(2));