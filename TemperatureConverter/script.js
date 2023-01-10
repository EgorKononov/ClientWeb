document.addEventListener("DOMContentLoaded", function (){
    let form = document.getElementById("form");
    var celsiusTemperatureField = document.getElementById("celsius-temperature-field");
    var convertButton = document.getElementById("convert-button");
    var kelvinTemperatureLabel = document.getElementById("kelvin-temperature-label");
    var fahrenheitTemperatureLabel = document.getElementById("fahrenheit-temperature-label");

    form.addEventListener("submit", function (e){
        e.preventDefault();
    });

    convertButton.addEventListener("click", function (){
        kelvinTemperatureLabel.textContent = (Number(celsiusTemperatureField.value) + 273.15).toString();
        fahrenheitTemperatureLabel.textContent = (Number(celsiusTemperatureField.value) * 1.8 + 32).toString();
    });
});