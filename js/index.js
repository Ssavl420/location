const CURRENT_IP = document.querySelector('#ip');
const CURRENT_LOCATION = document.querySelector('#location');

const options = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0
};

function success(pos) {
   const crd = pos.coords;

   CURRENT_LOCATION.innerHTML =`
      Ваше местоположение <br> 
      Плюс-минус: ${crd.accuracy.toFixed(2)} м.
      <a href="https://www.openstreetmap.org/#map=17/${crd.latitude}/${crd.longitude}" target="_blank">Смотреть</a> <br>`;

};



function error(err) {
   console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

fetch('https://ipapi.co/json/')
   .then(data => data.json())
   .then(response => {
      CURRENT_IP.innerHTML =`IP: ${response.ip} <br> Город: ${response.city}`
      return response;
   });
