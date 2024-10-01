document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('contactModal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButton = document.getElementsByClassName('close')[0];
    const body = document.body;

    // Модальная форма и форма в заголовке
    const modalForm = document.getElementById("modalForm");
    const headerForm = document.getElementById("headerForm");

    // Функция открытия модального окна
    function openModal() {
        modal.style.display = 'block';
        body.classList.add('modal-open');
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
        resetForm(modalForm);
    }

    openModalButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            openModal();
        });
    });

    closeModalButton.onclick = function () {
        closeModal();
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Сброс формы и скрытие сообщений
    function resetForm(form) {
        if (form) {
            form.reset();
        }
        const resultMessage = document.querySelector(`#resultMessage_${form.id}`);
        const modalMessage = document.querySelector(`#modalMessage_${form.id}`);
        resultMessage.style.display = 'none';
        modalMessage.textContent = '';
    }

    // Настройка валидации и отправки для каждой формы
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
                const phoneError = document.querySelector(`#phoneError_${form.id}`);
                if (el.name === 'phone') {
                    phoneError.style.display = 'none';
                }
            } else {
                el.setAttribute("is-valid", "0");
                el.style.border = "2px solid rgb(255, 0, 0)";
                const phoneError = document.querySelector(`#phoneError_${form.id}`);
                if (el.name === 'phone') {
                    phoneError.style.display = 'block';
                }
            }
        }

        function formCheck(e) {
            e.preventDefault();
            const allValid = validFormArr.every(el => el.getAttribute("is-valid") === "1");

            const modalMessage = document.querySelector(`#modalMessage_${form.id}`);
            const resultMessage = document.querySelector(`#resultMessage_${form.id}`);

            if (!allValid) {
                modalMessage.textContent = "Пожалуйста, заполните все поля корректно.";
                modalMessage.style.color = "red";
                resultMessage.style.display = "block";
                return;
            }

            formSubmit(form, modalMessage, resultMessage);
        }
    }

    async function formSubmit(form, modalMessage, resultMessage) {
        const data = new FormData(form);
        try {
            const response = await fetch("send_mail.php", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                let result = await response.json();
                modalMessage.textContent = result.message || "Спасибо, ваша заявка отправлена!";
                resultMessage.style.display = 'block';
                form.style.display = 'none'; // Скрываем форму после отправки
            } else {
                modalMessage.textContent = "Ошибка отправки данных. Код ошибки: " + response.status;
                modalMessage.style.color = "red";
                resultMessage.style.display = 'block';
            }
        } catch (error) {
            modalMessage.textContent = "Произошла ошибка. Попробуйте позже.";
            modalMessage.style.color = "red";
            resultMessage.style.display = 'block';
        }
    }
});
