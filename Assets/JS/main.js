'use strict';

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    let {latitude, longitude } = position.coords;
    let UserLatitude = latitude.toFixed(2);
    let UserLongitude = longitude.toFixed(2);
    console.log(UserLatitude, UserLongitude);

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${UserLatitude}&longitude=${UserLongitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,precipitation_sum,uv_index_max&timezone=auto&forecast_days=1`) // Fetch in Here to wait the Longitude and Latitude Response
    .then(solution => {
        if(!solution.ok) {
        throw new Error(`Error Code: ${solution.status}`)
        }

        return solution.json()
    })
    .then(Result => {
        let User_Information_by_OpenMateo = Result

        console.log(User_Information_by_OpenMateo)
    })
    .catch(error => {
        console.log(error)
    })

  }, (error) => {
    console.log('Não foi possível obter as informações necessárias!');
  });
} else {
  console.log('Geolocalização não é suportada pelo seu navegador.');
}