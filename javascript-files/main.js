import { API_URL } from './globals.js';
import getData from './getData.js';
import displayData from './displayData.js';

const elementsPerPage = 10;
const currentPage = 1;

let data = await getData(`${API_URL}/videogames`, 'videogames-section');
displayData(data, 'videogames-section', elementsPerPage, currentPage);
addPagination();
function addPagination() {
  const totalPages = Math.ceil(data.length / elementsPerPage);
  const pagesNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginationSection = document.getElementById('pagination-section');
  if (pagesNumbers.length > 1) {
    paginationSection.innerHTML = pagesNumbers.map(
      (pageNumber) =>
        `<div class='pagination-button'>${pageNumber}</div>`
    ).join('');
    const buttons = document.querySelectorAll('.pagination-button');
    buttons.forEach(button => {
      button.addEventListener('click', changePage);
    });
    document.querySelectorAll('.pagination-button')[0].click();
  } else {
    paginationSection.innerHTML = '';
  }
}

function changePage(e) {
  const buttons = document.querySelectorAll('.pagination-button');
  buttons.forEach(button => {
    button.className = 'pagination-button';
  });
  e.target.className += ' button-active';
  displayData(data, 'videogames-section', elementsPerPage, e.target.innerText);
}

document
  .getElementById('search-game-button')
  .addEventListener('click', searchData);
async function searchData() {
  const gamesQuery = document.getElementById('search-game-input').value;
  gamesQuery.trim();
  if (gamesQuery !== '') {
    data = await getData(`${API_URL}/videogames?q=${gamesQuery}`);
    addPagination();
    displayData(data, 'videogames-section', elementsPerPage, currentPage);
  } else {
    data = await getData(`${API_URL}/videogames`);
    addPagination();
    displayData(data, 'videogames-section', elementsPerPage, currentPage);
  }
}