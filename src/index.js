import "./style.css";

const img = document.querySelector("img");

let searchinput = document.getElementById("searchbox");
let request = "";
let searchbutton = document.getElementById("searchbutton");

//eed a static image to display at first
fetch(
	`https://api.giphy.com/v1/gifs/translate?api_key=SPSm69XvEdKnNRD7THW8YTohV73lYnuW&s=${request}`
)
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		console.log(response.data.images.original.url);
		img.src = response.data.images.original.url;
	});
let gif = document.getElementById("dispalygif");

searchbutton.addEventListener("click", () => {
	request = searchbutton.innerHTML;
});
img === img.url;
