// Функция для открытия и закрытия аккордеона
function toggleAccordion(element) {
	const accordion = element.parentElement.querySelector('.questions__item-accordeon');
	const plusMinus = accordion.querySelector('.plus-minus');
	const questionTitle = element.parentElement.querySelector('.questions__item-title');
	const answerText = element.parentElement.querySelector('.questions__item-text');

	if (!answerText.classList.contains('active')) {
		accordion.classList.add('active');
		questionTitle.classList.add('active');
		answerText.classList.add('active');

		// Добавляем класс 'active' к элементу плюс-минус
		plusMinus.classList.add('active');
	} else {
		accordion.classList.remove('active');
		questionTitle.classList.remove('active');
		answerText.classList.remove('active');

		// Убираем класс 'active' с элемента плюс-минус
		plusMinus.classList.remove('active');
	}
}

// Добавляем обработчик событий к каждому элементу аккордеона
const accordions = document.querySelectorAll('.questions__item-accordeon');
accordions.forEach(accordion => {
	accordion.addEventListener('click', () => {
		toggleAccordion(accordion);
	});
});



// ФУНКЦИЯ ДЛЯ DROP DOWN MENU MOBILE
document.addEventListener('DOMContentLoaded', function () {
	// Функция для создания аккордеона
	function createAccordion(el, multiple) {
		this.el = el;
		this.multiple = multiple;

		// Находим ссылки
		var links = this.el.querySelectorAll('.dropdown__mobile-link');

		// Добавляем обработчик клика
		for (var i = 0; i < links.length; i++) {
			links[i].addEventListener('click', function (e) {
				var target = e.target;
				var nextElement = target.nextElementSibling;

				// Открываем/закрываем следующий элемент
				nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
				target.parentNode.classList.toggle('open');

				// Если множественное открытие не разрешено, закрываем остальные элементы
				if (!multiple) {
					var submenus = this.el.querySelectorAll('.dropdown__submenu-list');
					for (var j = 0; j < submenus.length; j++) {
						if (submenus[j] !== nextElement) {
							submenus[j].style.display = 'none';
							submenus[j].parentNode.classList.remove('open');
						}
					}
				}
			});
		}
	}

	// Создаем новый аккордеон
	var accordion = new createAccordion(document.getElementById('dropdown__mobile'), false);
});

// =================================
document.addEventListener('DOMContentLoaded', function () {
	const menuItems = document.querySelectorAll('.usluga__menu-name');
	const serviceItems = document.querySelectorAll('.usluga__item');
	const resetButton = document.getElementById('resetFilter');

	menuItems.forEach(item => {
		item.addEventListener('click', function (event) {
			event.preventDefault();

			// Удаляем класс act у всех элементов меню
			menuItems.forEach(i => i.classList.remove('act'));

			// Добавляем класс act к выбранному элементу, если это не кнопка "Вернуть"
			if (this !== resetButton) {
				this.classList.add('act');
			}

			const selectedService = this.getAttribute('data-service');

			// Скрываем все элементы плавно, если нажата кнопка "Вернуть"
			if (this === resetButton) {
				serviceItems.forEach(serviceItem => {
					serviceItem.classList.remove('hide', 'hidden'); // Показываем все элементы
				});
			} else {
				// В других случаях фильтруем элементы списка услуг
				serviceItems.forEach(serviceItem => {
					serviceItem.classList.add('hide');
					serviceItem.classList.remove('hidden'); // Убираем display: none перед анимацией
				});

				// После завершения анимации скрытия, показываем только совпадающие элементы
				setTimeout(() => {
					serviceItems.forEach(serviceItem => {
						if (serviceItem.getAttribute('data-service') === selectedService) {
							serviceItem.classList.remove('hide'); // Показываем совпадающие элементы
						} else {
							serviceItem.classList.add('hidden'); // Полностью скрываем остальные элементы
						}
					});
				}, 500); // Задержка, чтобы дождаться окончания анимации скрытия
			}
		});
	});
});

// Скрипт для перехвата кликов по ссылкам в меню
document.querySelectorAll('.nested-link').forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault(); // Отмена стандартного поведения ссылки

		const service = this.getAttribute('data-service'); // Получаем значение data-service
		const url = `services.html?filter=${service}`; // Формируем URL с параметром фильтра

		window.location.href = url; // Перенаправляем пользователя на сформированный URL
	});
});

// Скрипт для активации фильтра на странице services.html
document.addEventListener('DOMContentLoaded', function () {
	const urlParams = new URLSearchParams(window.location.search);
	const filter = urlParams.get('filter'); // Получаем значение параметра filter

	if (filter) {
		const activeLink = document.querySelector(`.usluga__menu-name[data-service="${filter}"]`);

		if (activeLink) {
			activeLink.classList.add('act'); // Активируем нужный фильтр
			// Дополнительно можно добавить код для показа только отфильтрованных элементов
			document.querySelectorAll('.usluga__item').forEach(item => {
				if (item.getAttribute('data-service') === filter) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			});
		}
	}
});