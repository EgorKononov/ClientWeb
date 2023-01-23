document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    var celsiusTemperatureField = document.getElementById("celsius-temperature-field");
    var convertButton = document.getElementById("convert-button");
    var kelvinTemperatureLabel = document.getElementById("kelvin-temperature-label");
    var fahrenheitTemperatureLabel = document.getElementById("fahrenheit-temperature-label");
    var errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    convertButton.addEventListener("click", function () {
        var celsiusTemperatureFieldValue = celsiusTemperatureField.value.trim();

        if (celsiusTemperatureFieldValue.length === 0) {
            errorMessage.style.display = "block";
            celsiusTemperatureField.classList.add("invalid");
        } else {
            errorMessage.style.display = "none";
            celsiusTemperatureField.classList.remove("invalid");
            kelvinTemperatureLabel.textContent = (Number(celsiusTemperatureFieldValue) + 273.15).toString();
            fahrenheitTemperatureLabel.textContent = (Number(celsiusTemperatureFieldValue) * 1.8 + 32).toString();
        }
    });
});