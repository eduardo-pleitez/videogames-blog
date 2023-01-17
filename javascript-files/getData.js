async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    document.getElementById(type).innerHTML = `<h2 class='error-message'>An error occurred. Please, refresh the page.</h2>`;
  }
}
export default getData;