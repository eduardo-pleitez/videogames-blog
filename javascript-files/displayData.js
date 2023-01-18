function displayData(data, type, elementsPerPage = 10, currentPage = 1) {
  if (type === 'videogames-section') {
    const start = (currentPage - 1) * elementsPerPage;
    const end = currentPage * elementsPerPage;
    const currentElements = data.slice(start, end);
    document.getElementById('videogames-section').innerHTML = currentElements
      .map(
        (element) =>
          `<div class="videogame-card">
            <img src=${element.thumbnail} alt=${element.title} />
            <a href="videogame-details.html?id=${element.id}">
              <div class="overlay">
                <p class="overlay-text">See full details</p>
              </div>
            </a>
          </div>`
      )
      .join('');
  }
  
  if(type === 'videogame-details-section') {
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
}
export default displayData;
