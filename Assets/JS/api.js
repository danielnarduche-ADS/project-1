'use strict';

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        const {latitude, longitude} = position.coords
        latitude.toFixed(2);
        longitude.toFixed(2);

        resolve({latitude, longitude});
      }, (error) => {
        reject(new Error("It wasn't possible get location"));
      });

    } else {
      reject(new Error('Location not possible by navigator'))
    }
  })
} //Wait the User response then hand to Resolving_UserLocation