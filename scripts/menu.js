function init() {
	let body = document.querySelector(".body");
	let menu = document.querySelector(".intro__menu");
	let menuOverlay = document.querySelector(".menu__overlay");
	let content = document.querySelector(".overlay__content");

	menu.addEventListener("click", function() {
		menuOverlay.classList.toggle("open-overlay");
		body.classList.toggle("body-hidden");
		content.classList.toggle("content-show");
	})
	
}

document.addEventListener("DOMContentLoaded", init);