import displayData from "./displayData.js"

async function getData(url, type) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data, type);
  } catch (err) {
    console.log(err);
    document.getElementById(type).innerHTML = `<h2 class='error-message'>An error occurred. Please, refresh the page.</h2>`;
  }
}
export default getData;