var openFormBtn = document.querySelector(".js-form-open");
var popup = document.querySelector(".modal-content");
var formClose = popup.querySelector(".modal-content-close");
var form = popup.querySelector(".modal-content-form");
var nameInForm = popup.querySelector("[name=name]");
var emailInForm = popup.querySelector("[name=email]");
var letterInForm = popup.querySelector("[name=letter]");

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
