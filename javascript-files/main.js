import { API_URL } from './globals.js';

getVideoGames();
async function getVideoGames() {
  try {
    const response = await fetch(`${API_URL}/videogames`);
    const data = await response.json();
    displayData(data);
  } catch (err) {
    console.log('Error:' + err);
  }
}

function displayData(data) {
  document.getElementById('videogames-section').innerHTML = data
    .map(
      (element) =>
        `<div class="videogame-card">
          <img src=${element.thumbnail} alt=${element.title} />
          <div>
          <h3>${element.title}</h3>
          </div>
        </div>`
    )
    .join('');
}
