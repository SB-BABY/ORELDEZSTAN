document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('contactModal');
    const openModalButtons = document.querySelectorAll('.open-modal'); // Кнопки для открытия модального окна
    const closeModalButton = document.getElementsByClassName('close')[0];
    const body = document.body; // Элемент body для блокировки прокрутки
    const modalForm = document.getElementById("modalForm");
    const headerForm = document.getElementById("headerForm");
    const formMessage = document.getElementById("formMessage");
    const resultMessage = document.getElementById("resultMessage");
    const modalMessage = document.getElementById('modalMessage');
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");

    // Функция открытия модального окна
    function openModal() {
        modal.style.display = 'block';
        body.classList.add('modal-open'); // Блокируем прокрутку страницы
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = 'none';
        body.classList.remove('modal-open'); // Разблокируем прокрутку страницы
        resetModal();
    }

    // Добавляем обработчики событий для всех кнопок открытия модального окна
    openModalButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            openModal();
        });
    });

    // Когда пользователь нажимает на кнопку закрытия (x), модальное окно закрывается
    closeModalButton.onclick = function () {
        closeModal();
    };

    // Когда пользователь кликает вне модального окна, оно также закрывается
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Функция для сброса состояния модального окна
    function resetModal() {
        if (modalForm) {
            modalForm.reset(); // Сбрасываем поля формы
        }
        resultMessage.style.display = 'none'; // Скрываем сообщение
        modalMessage.textContent = ''; // Очищаем сообщение
    }

    // Если модальная форма существует, настраиваем её
    if (modalForm) {
        setupForm(modalForm);
    }

    // Если форма в заголовке существует, настраиваем её
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
                if (el === phoneInput) {
                    phoneError.style.display = 'none'; // Скрыть сообщение об ошибке
                }
            } else {
                el.setAttribute("is-valid", "0");
                el.style.border = "2px solid rgb(255, 0, 0)";
                if (el === phoneInput) {
                    phoneError.style.display = 'block'; // Показать сообщение об ошибке
                }
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
                modalMessage.textContent = result.message || "Спасибо, ваша заявка отправлена!";
                modalMessage.style.display = 'block'; // Показываем сообщение
                form.style.display = 'none'; // Скрываем форму
                resultMessage.style.display = 'block'; // Показываем блок результата
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
});
