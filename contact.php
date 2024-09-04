<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- CSS -->
	<link rel="stylesheet" href="css/style.css">
	<!-- CSS -->
	<title>Бюджетное учреждение здравоохранения Орловской области "Орловская дезинфекционная станция"</title>
</head>

<body>

	<!-- START HEADER -->
	<?php include ('header.php'); ?>
	<!-- END HEADER -->

	<!-- START MAIN -->
	<main class="main">
		<!-- START CONTACT -->
		<section class="contact">
			<div class="contact__container container">
				<h2 class="contact__title">
					Контакты
				</h2>

				<div style="position:relative;overflow:hidden; margin-top: 50px;"><a
						href="https://yandex.ru/maps/org/buz_orlovskoy_oblasti_orlovskaya_dezinfektsionnaya_stantsiya/1008996053/?utm_medium=mapframe&utm_source=maps"
						style="color:#eee;font-size:12px;position:absolute;top:0px;">Буз Орловской области, Орловская
						дезинфекционная станция</a><a
						href="https://yandex.ru/maps/10/orel/category/disinfection_disinsection_deratization/184108211/?utm_medium=mapframe&utm_source=maps"
						style="color:#eee;font-size:12px;position:absolute;top:14px;">Дезинфекция, дезинсекция, дератизация в
						Орле</a><iframe
						src="https://yandex.ru/map-widget/v1/?ll=36.072658%2C52.955894&mode=search&oid=1008996053&ol=biz&z=16.71"
						width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
				</div>

				<div class="contact__info contact__info-tell">
					<p>
						Для подачи заявок на уничтожение грызунов (дератизацию) обращаться по номеру: <br> <a href="#" class="contact__info-link">59-17-46</a> или <a href="#" class="contact__info-link">59-18-69</a>
					</p>

					<p>
						Для подачи заявок на камерную дезинфекцию вещей или для обработки педикулеза: <br> <a href="#" class="contact__info-link">59-17-99</a>
					</p>

					<p>
						Для подачи заявок на профилатическую или заключительную дезинфекцию помещений, обработку
						автотранспорта
						или обработку помещений после трупа: <br> <a href="#" class="contact__info-link">59-15-53</a> 
					</p>

					<p>
						Приемная: <br> <a href="#" class="contact__info-link">59-11-80</a> 
					</p>

					<p>
						Факс: <br> <a href="#" class="contact__info-link">59-11-80</a> или <a href="#" class="contact__info-link">75-02-82</a> 
					</p>
				</div>

				<div class="contact__content">
					<div class="contact__left">

						<div class="contact__info">
							<h3 class="contact__info-title">
								Телефон
							</h3>

							<a href="tel:74862591180" class="contact__info-text">
								+7 (4862) 59-11-80
							</a>
						</div>

						<div class="contact__info">
							<h3 class="contact__info-title">
								Адрес
							</h3>

							<p class="contact__info-text">
								Орловская область, город Орел, <br>улица Красина, д.54
							</p>
						</div>

						<div class="contact__info">
							<h3 class="contact__info-title">
								Почта
							</h3>

							<a href="mailto:ogds@mail.ru" class="contact__info-text">
								ogds@mail.ru
							</a>
							<br>
							<a href="mailto:oo_buz_dezstan@orel-region.ru" class="contact__info-text">
								oo_buz_dezstan@orel-region.ru
							</a>
						</div>

						<div class="contact__info">
							<h3 class="contact__info-title">
								Часы работы
							</h3>

							<p class="contact__info-text">
								Понедельник — пятница: 8:00–17:00 <br>
								Суббота и воскресенье: выходной
							</p>
						</div>

					</div>

					<div class="contact__right">
						<h3 class="contact__form-title">
							Если у вас появились вопросы, мы оперативно ответим на них.
						</h3>

						<form class="contact__form">
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
					</div>
				</div>
			</div>
		</section>
		<!-- END CONTACT -->

	</main>
	<!-- END MAIN -->

	<!-- START FOOTER -->
	<!-- END FOOTER -->

	<!-- START BURGER -->
	<?php include ('burger.php'); ?>
	<!-- END BURGER -->

	<!-- START MODAL -->
	<?php include ('modal.php'); ?>
	<!-- END MODAL -->



	<!-- JS -->
	<script src="./script/main.js"></script>
	<script src="./script/modal.js"></script>
	<!-- JS -->

</body>

</html>