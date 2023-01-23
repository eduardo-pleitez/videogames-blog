import { API_URL } from './globals.js';
import getData from './getData.js';
import displayData from './displayData.js';

const videogameId = new URLSearchParams(window.location.search).get('id');
const pageSection = 'videogame-details-section';

const data = await getData(`${API_URL}/videogames/${videogameId}`, pageSection);
displayData(data, pageSection);