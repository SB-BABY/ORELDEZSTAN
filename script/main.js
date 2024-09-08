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
