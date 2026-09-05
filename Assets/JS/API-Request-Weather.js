'use strict'
import { getUserLocation } from "./UserLocation.js"

export async function API_Request_Weather() {
    let longitude;
    let latitude;
    try {
     ({longitude, latitude} = await getUserLocation())
     console.log('Destructuring in function API_Request_Weather worked!')
    } catch (error) {
        console.log('Using default settings')
        latitude = -23.5505;
        longitude = -46.6333;
    } // Fallback: If the user denies location permission in UserLocation.js, the promise rejects and applies the application's default coordinates.

    try {
        const Request = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,precipitation_sum,uv_index_max&timezone=auto&forecast_days=1`)

        if (!Request.ok) {
            const error = new Error(`Something went wrong :/ ${Request.status};`)
            error.status = Request.status
            throw error;
        }

        const Data = await Request.json()
        console.log(Data)

        return Data
    } catch (error) {
        switch(error.status) {
            case 400: return 'statusCode: 400';
            case 401: return 'statusCode: 401';
            case 403: return 'statusCode: 403';
            case 404: return 'statusCode: 404';
            case 500: return 'statusCode: 500';
            case 503: return 'statusCode: 503';
            default: return "UNKNOWN_ERROR";
        }
    }
}