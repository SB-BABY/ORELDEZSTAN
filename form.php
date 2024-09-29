<form class="contact__form" id="<?php echo $formId; ?>" enctype="multipart/form-data" method="post" id="form"
    onsubmit="submitForm(event)" action="send_mail.php">
    <div class="contact__field field">
        <label class="field__label" for="name">Имя</label>
        <input class="field__input" id="name" name="name" type="text" placeholder="Иванов Иван Иванович"
            required />
    </div>
    <div class="contact__field field">
        <label class="field__label" for="phone">Телефон*</label>
        <input class="field__input" id="phone" name="phone" type="text" placeholder="Телефон" required
            data-reg="^((\+7|7|8)+([0-9]){10})$" />
    </div>
    <div class="contact__field field">
        <label class="field__label" for="message">Вопрос*</label>
        <textarea class="field__input field__input--textarea" id="message" name="message"
            placeholder="Хочется спросить про..." required></textarea>
    </div>
    <button class="contact__button button" type="submit" id="form_button">
        Отправить
    </button>
</form>

<div id="resultMessage" style="display:none;">
    Спасибо! Ваше сообщение отправлено.
</div>