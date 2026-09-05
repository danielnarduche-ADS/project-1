'use strict';
import { getUserLocation } from "./UserLocation.js"
import { API_Request_Weather } from "./API-Request-Weather.js";
import { DOM } from "./DOM-UI.js";

document.addEventListener('DOMContentLoaded', async () => {
    try {
        let API_REQUEST_WEATHER_RESPONSE = await API_Request_Weather();
        
        if (typeof API_REQUEST_WEATHER_RESPONSE === "object") {

        }
    } catch(error) {
        
    }
});