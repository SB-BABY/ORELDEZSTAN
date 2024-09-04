document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем стандартную отправку формы

    // Собираем данные формы
    let formData = new FormData(this);

    // Отправляем данные формы через AJAX
    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        showModal(data); // Показать модальное окно с результатом
    })
    .catch(error => {
        showModal('Ошибка при отправке сообщения. Попробуйте снова.');
    });
});

function showModal(message) {
    let modal = document.getElementById('contactModal');
    let modalContent = modal.querySelector('.modal__content');

    // Очистка содержимого формы и отображение сообщения
    modalContent.innerHTML = `<span class="close">&times;</span><p>${message}</p>`;

    modal.style.display = 'block';

    // Добавляем обработчик для закрытия модального окна
    modal.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    let modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});