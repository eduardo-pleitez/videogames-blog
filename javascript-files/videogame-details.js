import { API_URL } from './globals.js';
import getData from './getData.js';

const videogameId = new URLSearchParams(window.location.search).get('id');

getData(`${API_URL}/videogames/${videogameId}`, 'videogame-details-section');