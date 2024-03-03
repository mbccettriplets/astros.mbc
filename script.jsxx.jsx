
const apikey = 'xxxxxxxxxxxxxxxxxxxxx';

const searchBox =document..queryselector('.inputBox');
const searchBtm =document.querySelector('.searchbtn');
const conditionImag =document.querySelector('conditionImag');
const temprature =document.querySelector('.temprature');
const condition =document.querySelector('.condition');
const humidity =document.querySelector('.humidity');
const windspeed =document.querySelector('.windspeed');
const error =document.querySelector('.error');

searchBtm?.addEventListener('click',()=>{
    let query = searchBox.value;
    if(!query){
        error.Style.display = 'block';
    }else{
     fetch('http://api.weatherapi.com/v1/current.json?key=${apikey}&Q=${query}&aqi=no').then((response)=>{
         if(!response.ok){
            throw new Error('network'): Response; was not ok: ${response.statusText}');

        }
         
         return response.json()
     }).then(data =>{
        let weatherReport = data.current;
        console.log(weatherReport);
        conditionImag.src = 'http:${weatherReport.condition.icon}'
        temprature.innerHTML = '${weatherReport.temp_c}degreec'
        condition.innerHTML = weatherReport.condition.text;
        humidity.innerHTML = 'humidity : ${weatherReport.humidity}%'
        windspeed.innerHTML = 'wind Speed : ${WeatherReport.wind_kph} km/h' 
        
     }).catch(err =>{
        error.Style.display = 'block';
        error.innerHTML = 'location not match';
     })
    }
    
})
         









    



