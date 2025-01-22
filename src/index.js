import "./style.css";

const img = document.querySelector("img");

let searchinput = document.getElementById("searchbox");

let searchbutton = document.getElementById("searchbutton");
let request = "";

searchbutton.addEventListener("click", () => {
	request = searchinput.value;
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=SPSm69XvEdKnNRD7THW8YTohV73lYnuW&s=${request}`
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
			img === img.url;
			searchinput.value = "";
		});
});

//eed a static image to display at first

let gif = document.getElementById("dispalygif");
