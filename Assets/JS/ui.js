'use strict'
import { getUserLocation } from "./api"
import { Resolving_UserLocation } from "./api"

async function Interface_Handling(params) {
    let longitude;
    let latitude;
    try {
     ({longitude, latitude} = await getUserLocation())
     console.log('Destructuring in Interface_Handling function worked!')
    } catch (error) {
        latitude = -23.5505;
        longitude = -46.6333;
    }
}

