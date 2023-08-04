// const apiurl = 'https://api.open-meteo.com/v1/forecast?latitude=41.6667&longitude=63.8333&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m';

// function sendRequest(method , url, body = null){
//     return new Promise((resolve, reject) =>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = 'json'
        
//         xhr.onload = () => {
//             if(xhr.status >= 400){
//                 reject('ERROR')
//             } else{
//                 resolve(xhr.response)
//             }
//         }
//         xhr.send();
//     });
// }
// sendRequest('GET', apiurl)
//     .then(data => console.log(data))
//     .catch(err => console.log(data))



let startX;
const touchThreshold = 40;


function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;

    const weatherElement = document.querySelector('.weather');

    if (deltaX > touchThreshold) {
      weatherElement.classList.remove('right');
      weatherElement.classList.add('left');
    } else if (deltaX < -touchThreshold) {
      weatherElement.classList.remove('left');
      weatherElement.classList.add('right');
    }
}

function handleLeftClick() {
    const headerElement = document.querySelector('.weather');
    headerElement.classList.remove('right');
    headerElement.classList.add('left');
}

function handleRightClick() {
    const headerElement = document.querySelector('.weather');
    headerElement.classList.remove('left');
    headerElement.classList.add('right');
}

// дата на сегодня
function showCurrentDate() {
  let headingElement = document.getElementById('data');
  let currentDate = new Date();
  let options = { weekday: 'short', month: 'short', day: 'numeric' };
  let formattedDate = currentDate.toLocaleDateString('en-US', options);
  headingElement.textContent = formattedDate;
}

showCurrentDate();
// дата на затвра
function showTomorrowDate() {
  let tomorrowElement = document.getElementById('data-tomorrow');
  let tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  let options = { weekday: 'short', month: 'short', day: 'numeric' };
  let formattedDate = tomorrowDate.toLocaleDateString('en-US', options);
  tomorrowElement.textContent = formattedDate;
}

showTomorrowDate();
