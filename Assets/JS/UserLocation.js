'use strict';

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        let {latitude, longitude} = position.coords
        latitude = Number(latitude.toFixed(2));
        longitude = Number(longitude.toFixed(2));

        resolve({latitude, longitude});
      }, (error) => {
        reject(new Error("It wasn't possible get location"));
      });

    } else {
      reject(new Error('Location not possible by navigator'))
    }
  })
} // Placed here to simplify future maintenance. This is the foundation of the codebase.