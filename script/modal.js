// Получаем элементы
const modal = document.getElementById('contactModal');
const openModalButtons = document.querySelectorAll('.open-modal'); // Получаем все кнопки с классом open-modal
const span = document.getElementsByClassName('close')[0];
const body = document.body; // Получаем элемент body

// Добавляем обработчик событий для всех кнопок открытия модального окна
openModalButtons.forEach(button => {
	button.addEventListener('click', function (event) {
		event.preventDefault(); // Предотвращаем переход по ссылке
		modal.style.display = 'block';
		body.classList.add('modal-open'); // Блокируем прокрутку страницы
	});
});

// Когда пользователь нажимает на <span> (x), модальное окно закрывается
span.onclick = function () {
	modal.style.display = 'none';
	body.classList.remove('modal-open'); // Разблокируем прокрутку страницы
}

// Когда пользователь кликает вне модального окна, оно закрывается
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
		body.classList.remove('modal-open'); // Разблокируем прокрутку страницы
	}
}
