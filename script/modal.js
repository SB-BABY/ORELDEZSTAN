// Получаем элементы
const modal = document.getElementById('contactModal');
const openModalButtons = document.querySelectorAll('.open-modal'); // Получаем все кнопки с классом open-modal
const span = document.getElementsByClassName('close')[0];
const body = document.body; // Получаем элемент body
const form = document.getElementById('contactForm');
const resultMessage = document.getElementById('resultMessage');
const modalMessage = document.getElementById('modalMessage');

const modalForm = document.getElementById("modalForm");
const headerForm = document.getElementById("headerForm");
const formMessage = document.getElementById("formMessage");

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
    resetModal();
}

// Когда пользователь кликает вне модального окна, оно закрывается
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('modal-open'); // Разблокируем прокрутку страницы
        resetModal();
    }
}

// Валидация формы
const formArr = Array.from(form.elements);
const validFormArr = [];
const button = form.querySelector('button[type="submit"]');

// Подготавливаем элементы формы с атрибутом data-reg для валидации
formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArr.push(el);
    }
});

// Обработчики для валидации полей при вводе и при отправке формы
form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);

    if (reg.test(inputValue)) {
        el.setAttribute("is-valid", "1");
        el.style.border = "2px solid rgb(0, 196, 0)"; // Зеленая рамка при успешной валидации
    } else {
        el.setAttribute("is-valid", "0");
        el.style.border = "2px solid rgb(255, 0, 0)"; // Красная рамка при ошибке
    }
}

function formCheck(e) {
    e.preventDefault();
    const allValid = validFormArr.every(el => el.getAttribute("is-valid") === "1");

    if (!allValid) {
        modalMessage.textContent = "Пожалуйста, заполните все поля корректно.";
        modalMessage.style.color = "red"; // Сообщение об ошибке
        return;
    }

    formSubmit();
}

if (modalForm) {
        setupForm(modalForm);
    }

    if (headerForm) {
        setupForm(headerForm);
    }

    function setupForm(form) {
        const validFormArr = [];
        const formArr = Array.from(form.elements);

        formArr.forEach((el) => {
            if (el.hasAttribute("data-reg")) {
                el.setAttribute("is-valid", "0");
                validFormArr.push(el);
            }
        });

        form.addEventListener("input", inputHandler);
        form.addEventListener("submit", formCheck);

        function inputHandler({ target }) {
            if (target.hasAttribute("data-reg")) {
                inputCheck(target);
            }
        }

        function inputCheck(el) {
            const inputValue = el.value;
            const inputReg = el.getAttribute("data-reg");
            const reg = new RegExp(inputReg);

            if (reg.test(inputValue)) {
                el.setAttribute("is-valid", "1");
                el.style.border = "2px solid rgb(0, 196, 0)";
            } else {
                el.setAttribute("is-valid", "0");
                el.style.border = "2px solid rgb(255, 0, 0)";
            }
        }

        function formCheck(e) {
            e.preventDefault();
            const allValid = validFormArr.every(el => el.getAttribute("is-valid") === "1");

            if (!allValid) {
                formMessage.textContent = "Пожалуйста, заполните все поля корректно.";
                formMessage.style.color = "red";
                formMessage.style.display = "block";
                return;
            }

            formSubmit(form);
        }
    }

    async function formSubmit(form) {
        const data = new FormData(form);
        try {
            const response = await fetch("send_mail.php", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                let result = await response.json();
                formMessage.textContent = result.message || "Спасибо, ваша заявка отправлена!";
                formMessage.style.color = "green";
                formMessage.style.display = "block";
                form.reset();
            } else {
                formMessage.textContent = "Ошибка отправки данных. Код ошибки: " + response.status;
                formMessage.style.color = "red";
                formMessage.style.display = "block";
            }
        } catch (error) {
            formMessage.textContent = "Произошла ошибка. Попробуйте позже.";
            formMessage.style.color = "red";
            formMessage.style.display = "block";
        }
    }


// Функция отправки данных на сервер
async function sendData(data) {
    return await fetch("send_mail.php", {
        method: "POST",
        body: data,
    });
}

// Сброс формы
function formReset() {
    form.reset(); // Сбрасываем поля формы
    validFormArr.forEach((el) => {
        el.setAttribute("is-valid", "0");
        el.style.border = "none"; // Убираем рамку
    });
}

// Сброс модального окна
function resetModal() {
    form.style.display = 'block'; // Показываем форму
    resultMessage.style.display = 'none'; // Скрываем сообщение
    modalMessage.textContent = ''; // Очищаем сообщение
}

async function formSubmit() {
    const data = new FormData(form);
    try {
        const response = await sendData(data);
        if (response.ok) {
            let result = await response.json();
            modalMessage.textContent = result.message;
            modalMessage.style.color = "green"; // Сообщение об успешной отправке
            form.style.display = 'none'; // Скрываем форму
            resultMessage.style.display = 'block'; // Показываем сообщение
        } else {
            modalMessage.textContent = "Ошибка отправки данных. Код ошибки: " + response.status;
            modalMessage.style.color = "red"; // Сообщение об ошибке сервера
        }
        formReset(); // Сброс формы после отправки
    } catch (error) {
        modalMessage.textContent = "Произошла ошибка. Попробуйте позже.";
        modalMessage.style.color = "red"; // Сообщение об общей ошибке
    }
}

