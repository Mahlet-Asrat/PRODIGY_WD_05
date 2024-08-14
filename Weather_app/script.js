const url = 'https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=ea38fbe08666322a281cdb8183ace223'


let weather = {

    "apiKey": 'ea38fbe08666322a281cdb8183ace223',
    fetchWeather: function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
         + city 
         + '&units=metric&appid=' 
         + this.apiKey).then((res) => res.json())
        .then((data) =>{ 
            if (data != null)
                 {this.displayWeather(data)}})
    },
    
    displayWeather: function(data){
       const { name } = data;
       const {icon, description} = data.weather[0];
       const { temp, humidity} = data.main;
       const {speed} = data.wind;
       console.log(name, icon, description, temp, humidity, speed)
       document.querySelector(".city").innerHTML = "Weather in " + name
       document.querySelector(".temp").innerHTML = temp + " °C "
       document.querySelector(".icon").src = " https://openweathermap.org/img/wn/" + icon + "@2x.png";
       document.querySelector(".desc").innerHTML = description;
       document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
       document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + "km/h";
      },   
      
       Search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
       },
};

    document.querySelector("button").addEventListener('click', function(){
        weather.Search();
    });

    document.querySelector(".search-bar").addEventListener("keyup", function(event){
        if (event.key == "Enter"){
            weather.Search();
        }
    });

    weather.fetchWeather("London")





