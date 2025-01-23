import "./style.css";

let searchinput = document.getElementById("searchbox");

let searchbutton = document.getElementById("searchbutton");
searchbutton.addEventListener("click", () => {
	getGifs();
});

async function getGifs() {
	const img = document.querySelector("img");
	let request = searchinput.value;
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=SPSm69XvEdKnNRD7THW8YTohV73lYnuW&s=${request}`
	);
	response.json().then(function (response) {
		img.src = response.data.images.original.url;
	});
	const catData = await response.json();
	img.src = catData.data.images.original.url;
}
//eed a static image to display at first

let gif = document.getElementById("dispalygif");
