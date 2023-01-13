import { API_URL } from './globals.js';
import getData from './getData.js';

getData(`${API_URL}/videogames`, 'videogames-section');