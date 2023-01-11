import { API_URL } from './globals.js';

const videogameId = new URLSearchParams(window.location.search).get('id');

getVideogameDetails();

async function getVideogameDetails() {
  try {
    const response = await fetch(`${API_URL}/videogames/${videogameId}`);
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    console.log(err);
    document.getElementById(
      'videogame-details-section'
    ).innerHTML = `<h2>An error occurred. Please, refresh the page.</h2>`;
  }
}

function displayData(data) {
  document.getElementById('videogame-details-section').innerHTML = 
      `<div class="videogame-details">
        <h1>${data.title}</h1>
        <p><b>Platform:</b> ${data.platform}</p>
        <p><b>Publisher:</b> ${data.publisher}</p>
        <p><b>Release date:</b> ${data.release_date}</p>
        <img src=${data.thumbnail} alt=${data.title} />
        <p>${data.short_description}}</p>
      </div>`;
}