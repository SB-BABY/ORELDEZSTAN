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
	<?php include('header.php'); ?>
	<!-- END HEADER -->

	<!-- START MAIN -->
	<main class="main">
		<section class="usluga container">
			<h2 class="usluga__title">
				Услуги
			</h2>

			<nav class="usluga__menu">
				<ul class="usluga__menu-list">

					<li class="usluga__menu-item">
						<a href="" class="usluga__menu-name" data-service="dezinfektsiya">
							Дезинфекция
						</a>
					</li>

					<li class="usluga__menu-item">
						<a href="" class="usluga__menu-name" data-service="deratizatsiya">
							Дератизация
						</a>
					</li>

					<li class="usluga__menu-item">
						<a href="" class="usluga__menu-name" data-service="dezinsektsiya">
							Дезинсекция
						</a>
					</li>

					<li class="usluga__menu-item">
						<a href="" class="usluga__menu-name" id="resetFilter">
							Вернуть
						</a>
					</li>

				</ul>
			</nav>

			<ul class="usluga__list">
				<li class="usluga__item" data-service="dezinfektsiya">

					<h3 class="usluga__item-title">
						Дезинфекция автотранспорта
					</h3>

					<div class="usluga__item-btns">
						<a href="#" class="button-small usluga__item-btn open-modal">
							Заказать
						</a>

						<a href="usluga_dezinfekciya-auto.php" class="button-small usluga__item-btn">
							Подробнее
						</a>
					</div>
				</li>

				<li class="usluga__item" data-service="dezinsektsiya">

					<h3 class="usluga__item-title">
						Педикулёз
					</h3>

					<div class="usluga__item-btns">
						<a href="#" class="button-small usluga__item-btn open-modal">
							Заказать
						</a>

						<a href="usluga_dezinsekciya-pedikulez.php" class="button-small usluga__item-btn">
							Подробнее
						</a>
					</div>
				</li>

				<li class="usluga__item" data-service="dezinsektsiya">

					<h3 class="usluga__item-title">
						Дезинcекция
					</h3>

					<div class="usluga__item-btns">
						<a href="#" class="button-small usluga__item-btn open-modal">
							Заказать
						</a>

						<a href="usluga_dezinsekciya.php" class="button-small usluga__item-btn">
							Подробнее
						</a>
					</div>
				</li>

				<li class="usluga__item" data-service="deratizatsiya">

					<h3 class="usluga__item-title">
						Дератизация
					</h3>

					<div class="usluga__item-btns">
						<a href="#" class="button-small usluga__item-btn open-modal">
							Заказать
						</a>

						<a href="usluga_deratizaciya.php" class="button-small usluga__item-btn">
							Подробнее
						</a>
					</div>
				</li>

				<li class="usluga__item" data-service="dezinfektsiya">

					<h3 class="usluga__item-title">
						Дезинфекция квартиры после трупа
					</h3>

					<div class="usluga__item-btns">
						<a href="#" class="button-small usluga__item-btn open-modal">
							Заказать
						</a>

						<a href="usluga_dezinfekciya-room.php" class="button-small usluga__item-btn">
							Подробнее
						</a>
					</div>
				</li>

				<li class="usluga__item" data-service="dezinfektsiya">

					<h3 class="usluga__item-title">
						Дeзинфeкция ствoлoв муcoрoпрoвoдa
					</h3>

					<div class="usluga__item-btns">
						<a href="#" class="button-small usluga__item-btn open-modal">
							Заказать
						</a>

						<a href="usluga_dezinfekciya-trash.php" class="button-small usluga__item-btn">
							Подробнее
						</a>
					</div>
				</li>

				<li class="usluga__item" data-service="dezinfektsiya">

					<h3 class="usluga__item-title">
						Дeзинфeкция 
					</h3>

					<div class="usluga__item-btns">
						<a href="#" class="button-small usluga__item-btn open-modal">
							Заказать
						</a>

						<a href="usluga_dezinfekciya.php" class="button-small usluga__item-btn">
							Подробнее
						</a>
					</div>
				</li>

			</ul>


		</section>
	</main>
	<!-- END MAIN -->

	<!-- START FOOTER -->
	<!-- END FOOTER -->

	<!-- START BURGER -->
	<?php include('burger.php'); ?>
	<!-- END BURGER -->

	<!-- START MODAL -->
	<?php include('modal.php'); ?>
	<!-- END MODAL -->



	<!-- JS -->
	<script src="./script/main.js"></script>
	<script src="./script/app.js"></script>
	<script src="./script/modal.js"></script>
	<script src="./script/services.js"></script>
	<!-- JS -->

</body>

</html>