<div id="contactModal" class="modal">
    <div class="modal__content">
        <span class="close">&times;</span>
        <!-- START FORM -->
        <?php include('form.php'); ?>
        <!-- END FORM -->

        <!-- Сообщение об успешной отправке -->
        <div id="resultMessage" style="display: none; padding-top: 20px;">
            <p id="modalMessage"></p>
        </div>
    </div>
</div>