// Fetch returns a promise
// fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/')
// .then(result => result.json())
// .then(data => {
//     const today = data.consolidated_weather[0];
//     console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
// })
// .catch(error => console.log(error));

function getWeather(weoId) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${weoId}/`
  )
    .then(result => result.json())
    .then(data => {
      const today = data.consolidated_weather[0];
      console.log(
        `Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`
      );
    })
    .catch(error => console.log(error));
}

getWeather(2487956);
getWeather(44418);

async function getWeatherAW(weoId) {
  try {
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${weoId}/`
    );
    const data = await result.json();

    const tomorrow = data.consolidated_weather[1];
    console.log(
      `Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`
    );
    return data;
  } catch (error) {
    console.log(error);
    //alert(error);
  }
}

getWeatherAW(2487956);
let dataLondon;
getWeatherAW(44418).then(data => {
  dataLondon = data;
  console.log(dataLondon);
});
