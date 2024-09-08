// Получаем элементы
const modal = document.getElementById('contactModal');
const openModalButtons = document.querySelectorAll('.open-modal'); // Получаем все кнопки с классом open-modal
const span = document.getElementsByClassName('close')[0];
const body = document.body; // Получаем элемент body
const form = document.getElementById('contactForm');
const resultMessage = document.getElementById('resultMessage');
const modalMessage = document.getElementById('modalMessage');

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

    // Сбрасываем форму и сообщение после закрытия окна
    resetModal();
}

// Когда пользователь кликает вне модального окна, оно закрывается
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('modal-open'); // Разблокируем прокрутку страницы

        // Сбрасываем форму и сообщение после закрытия окна
        resetModal();
    }
}

// Обрабатываем отправку формы
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отключаем стандартную отправку формы

    // Собираем данные формы
    const formData = new FormData(this);

    // Отправляем данные через AJAX
    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Скрываем форму и показываем сообщение об успешной отправке
        form.style.display = 'none';
        modalMessage.textContent = data;
        resultMessage.style.display = 'block';
    })
    .catch(error => {
        form.style.display = 'none';
        modalMessage.textContent = 'Ошибка при отправке сообщения. Попробуйте снова.';
        resultMessage.style.display = 'block';
    });
});

// Функция для сброса формы и сообщения
function resetModal() {
    form.style.display = 'block'; // Показываем форму снова
    resultMessage.style.display = 'none'; // Скрываем сообщение
    form.reset(); // Сбрасываем поля формы
}
