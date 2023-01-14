import { API_URL } from './globals.js';
import getData from './getData.js';

getData(`${API_URL}/videogames`, 'videogames-section');

document.getElementById('search-game-button').addEventListener("click", searchData);

function searchData() {
  const gamesQuery = document.getElementById('search-game-input').value;
  gamesQuery.trim();
  if (gamesQuery !== '') {
    getData(`${API_URL}/videogames?q=${gamesQuery}`, 'videogames-section');
  }
}