<form class="contact__form" id="contactForm">
    <div class="contact__body">
        <div class="contact__field field">
            <label class="field__label" for="name">Имя</label>
            <input class="field__input" id="name" name="name"
                placeholder="Иванов Иван Иванович" />
        </div>
        <div class="contact__field field">
            <label class="field__label" for="email">Почта*</label>
            <input class="field__input" id="email" name="email" placeholder="test@test.ru"
                type="email" required />
        </div>
        <div class="contact__field field">
            <label class="field__label" for="phone">Телефон*</label>
            <input class="field__input" id="phone" name="phone" placeholder="Телефон"
                type="phone" required />
        </div>
        <!-- <div class="contact__field field">
									<label class="field__label" for="message">Вопрос*</label>
									<textarea class="field__input field__input--textarea" id="message" name="message"
										placeholder="Хочется спросить про..." required></textarea>
								</div> -->
    </div>
    <button class="contact__button button" type="submit">
        Отправить
    </button>
</form>