let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", function () {

    let city = document.getElementById("city").value;

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    let apiKey = "ccccd3df15f5a392e13c32250db94771";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)

        .then(function(response){
            return response.json();
        })

        .then(function(data){

            if(data.cod != 200){

                result.innerHTML = `<p>${data.message}</p>`;
                return;

            }

            result.innerHTML = `
                <h2>${data.name}</h2>

                <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>

                <p><strong>🤗 Feels Like:</strong> ${data.main.feels_like} °C</p>

                <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>

                <p><strong>🌥 Weather:</strong> ${data.weather[0].main}</p>

                <p><strong>📝 Description:</strong> ${data.weather[0].description}</p>
            `;

        })

        .catch(function(error){

            console.log(error);

            result.innerHTML = "<p>Something went wrong.</p>";

        });

});