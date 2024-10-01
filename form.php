<form class="contact__form" id="<?php echo $formId; ?>" enctype="multipart/form-data" method="post" onsubmit="submitForm(event)" action="send_mail.php">
    <div class="contact__field field">
        <label class="field__label" for="name">Имя</label>
        <input class="field__input" id="name_<?php echo $formId; ?>" name="name" type="text" placeholder="Иванов Иван Иванович" required />
    </div>
    <div class="contact__field field">
        <label class="field__label" for="phone">Телефон*</label>
        <input class="field__input" id="phone_<?php echo $formId; ?>" name="phone" type="text" placeholder="Телефон" required data-reg="^((\+7|7|8)+([0-9]){10})$" />
        <small class="error-message" id="phoneError_<?php echo $formId; ?>" style="color: red; display: none;">Неверный формат номера телефона</small> <!-- Сообщение об ошибке -->
    </div>

    <div class="contact__field field">
        <label class="field__label" for="message">Вопрос*</label>
        <textarea class="field__input field__input--textarea" id="message_<?php echo $formId; ?>" name="message" placeholder="Хочется спросить про..." required></textarea>
    </div>
    <button class="contact__button button" type="submit" id="form_button_<?php echo $formId; ?>">
        Отправить
    </button>
</form>

<!-- Сообщение об успешной отправке -->
<div id="resultMessage_<?php echo $formId; ?>" style="display: none;">
    <p id="modalMessage_<?php echo $formId; ?>"></p>
</div>
