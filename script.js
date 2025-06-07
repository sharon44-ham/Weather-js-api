const apiKey = "3e13813f732d5586bfacc04af17682b1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let searchInput=document.querySelector(".search input")
let searchBtn=document.querySelector(".search button")
let weather =  document.querySelector(".weather-icon")
async function checkWeather(city){
   const response= await fetch(apiUrl + city + `&appid=${apiKey}` )
    let data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=data.main.temp+"°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+"kmph"
    if(data.weather[0].main=="Clouds"){
       weather.src="images/clouds.png"
    }else if(data.weather[0].main=="Rain"){
       weather.src="images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
       weather.src="images/drizzle.png"
    }else if(data.weather[0].main=="Snow"){
       weather.src="images/snow.png"
    }else if(data.weather[0].main=="Clear"){
       weather.src="images/clear.png"
    }
    
}
searchInput.addEventListener("keydown",function(Event){
    if(Event.key=="Enter"){
        checkWeather(searchInput.value)
    }
})
searchBtn.addEventListener("click",function(){
    checkWeather(searchInput.value)
})


