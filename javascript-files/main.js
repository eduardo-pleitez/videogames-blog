import { API_URL } from './globals.js';
import getData from './getData.js';
import displayData from './displayData.js';

let data = await getData(`${API_URL}/videogames`);
displayData(data, 'videogames-section');

document.getElementById('search-game-button').addEventListener("click", searchData);

async function searchData() {
  const gamesQuery = document.getElementById('search-game-input').value;
  gamesQuery.trim();
  if (gamesQuery !== '') {
    let data = await getData(`${API_URL}/videogames?q=${gamesQuery}`);
    displayData(data, 'videogames-section')
  }
}