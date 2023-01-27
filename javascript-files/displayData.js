function displayData(data, pageSection, elementsPerPage = 10, currentPage = 1) {
  if (pageSection === 'videogames-section') {
    const videogamesSection = document.getElementById(pageSection);
    if(data.length > 0){
      const start = (currentPage - 1) * elementsPerPage;
      const end = currentPage * elementsPerPage;
      const currentElements = data.slice(start, end);
      videogamesSection.innerHTML = currentElements
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
    } else {
      videogamesSection.innerHTML = '<h2>Results not found.</h2>';
    }
  }
  
  if(pageSection === 'videogame-details-section') {
    document.getElementById(pageSection).innerHTML = 
    `<div class="videogame-details">
      <h1>${data.title}</h1>
      <p><b>Genre:</b> ${data.genre}</p>
      <p><b>Platform:</b> ${data.platform}</p>
      <p><b>Publisher:</b> ${data.publisher}</p>
      <p><b>Release date:</b> ${data.release_date}</p>
      <img src=${data.thumbnail} alt=${data.title} />
      <p>${data.short_description}}</p>
      <a href="index.html" class="videogame-details-button">
        <div>&#8617; Return to gamelist</div>
      </a>
    </div>`;
  }
}
export default displayData;
