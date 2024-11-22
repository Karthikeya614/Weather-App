document.getElementById('get-weather-btn').addEventListener('click', function() {
    getWeather();
});


document.getElementById('city-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather(); 
    }
});
function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'fcc8de7015bbb202209bbf0261babf4c'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;

                
            } else {
                alert('City not found');
            }
        })
        .catch(error => console.error('Error:', error));
};