const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-RapidAPI-Key": "85aba5998fmshfcbade3fbc9a714p154dc5jsn7c3562c176a8",
    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
  },
};

const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", fetchData);
function fetchData() {
  const input = document.getElementById("text");
  const value = input.value;

  fetch(
    `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${value}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const element = document.getElementById("root");
      element.innerHTML = `<ul>${response.result
        .map((elem) => {
          return `<li>${elem.value}</li>`;
        })
        .join("")}</ul>`;
    })
    .catch((err) => console.error(err));
}

const randomBtn = document.getElementById("random");
randomBtn.addEventListener("click", fetchRandomData);
function fetchRandomData() {
  fetch(
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const element = document.getElementById("root");
      element.innerHTML = `<p>${response.value}</p>`;
    })
    .catch((err) => console.error(err));
}
