var openFormBtn = document.querySelector(".js-form-open");
var popup = document.querySelector(".modal-content");
var formClose = popup.querySelector(".modal-content-close");
var form = popup.querySelector(".modal-content-form");
var nameInForm = popup.querySelector("[name=name]");
var emailInForm = popup.querySelector("[name=email]");
var letterInForm = popup.querySelector("[name=letter]");
var slider = document.querySelector(".main-slider");
var slide1 = slider.querySelector(".slide-1");
var slide2 = slider.querySelector(".slide-2");
var slide3 = slider.querySelector(".slide-3");
var sswitch1 = slider.querySelector(".sswitch1");
var sswitch2 = slider.querySelector(".sswitch2");
var sswitch3 = slider.querySelector(".sswitch3");

openFormBtn.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-content-open")
	console.log("открываю Popup");
});

formClose.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-open");
	console.log("Popup открыт, закрываем его по Крестику");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-open")) {
				popup.classList.remove("modal-content-open");
				console.log("Popup уже открыт, закрываем его по Escape");
			} else {
				console.log("Popup не открыт");
			};
	};
});

form.addEventListener("submit", function(event) {
	event.preventDefault();
	console.log("Пользователь пытается отправить форму");

	if (!nameInForm.value || !emailInForm.value || !letterInForm.value) {
		console.log("Для отправки форму нужно заполнить все поля");
	} else {
		console.log("Отправляю форму, закрываю окно");
		popup.classList.remove("modal-content-open");
	};
});

sswitch1.addEventListener("click", function(event) {
	slide1.classList.add("visible");
	slide2.classList.remove("visible");
	slide3.classList.remove("visible");
	sswitch1.classList.add("current-slide");
	sswitch2.classList.remove("current-slide");
	sswitch3.classList.remove("current-slide");
	console.log("Включаем слайд 1");
})

sswitch2.addEventListener("click", function(event) {
	slide1.classList.remove("visible");
	slide2.classList.add("visible");
	slide3.classList.remove("visible");
	sswitch1.classList.remove("current-slide");
	sswitch2.classList.add("current-slide");
	sswitch3.classList.remove("current-slide");
	console.log("Включаем слайд 2");
})

sswitch3.addEventListener("click", function(event) {
	slide1.classList.remove("visible");
	slide2.classList.remove("visible");
	slide3.classList.add("visible");
	sswitch1.classList.remove("current-slide");
	sswitch2.classList.remove("current-slide");
	sswitch3.classList.add("current-slide");
	console.log("Включаем слайд 3");
})