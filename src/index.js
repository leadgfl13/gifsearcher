import "./style.css";

const img = document.querySelector("img");
fetch(
	"https://api.giphy.com/v1/gifs/translate?api_key=SPSm69XvEdKnNRD7THW8YTohV73lYnuW&s=cats"
)
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		console.log(response.data.images.original.url);
	});
let gif = document.getElementById("dispalygif");
gif.innerHTML = img.url;
