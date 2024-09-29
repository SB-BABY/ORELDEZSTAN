document.addEventListener("DOMContentLoaded", () => {
    const modalForm = document.getElementById("modalForm");
    const headerForm = document.getElementById("headerForm");
    const formMessage = document.getElementById("formMessage");

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
});
