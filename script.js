const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle("active");
	mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
	let scrollPosition = window.scrollY;
	if (scrollPosition > 250) {
		header.style.backgroundColor = "#00539cff";
	} else {
		header.style.backgroundColor = "transparent";
	} 
});

menuItem.forEach((item) => {
	item.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	});
});