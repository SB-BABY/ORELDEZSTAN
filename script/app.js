document.addEventListener("DOMContentLoaded", () => {
    const mobileOverlay = document.getElementById('mobileOverlay');
    const contactLink = document.querySelector('.mobile-overlay__link.open-modal'); // Ссылка "Связаться"
    
    // Функция закрытия мобильного меню
    function closeMobileMenu() {
        if (mobileOverlay) {
            mobileOverlay.close(); // Закрываем <dialog>
        }
    }

    // При клике на ссылку "Связаться" закрываем меню
    if (contactLink) {
        contactLink.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке, если нужно
            closeMobileMenu(); // Закрываем меню

            // Здесь вы можете добавить логику открытия формы, если это нужно
            // Например, если форма открывается в модальном окне
            // openModal(); // или любая другая функция открытия формы
        });
    }
});
