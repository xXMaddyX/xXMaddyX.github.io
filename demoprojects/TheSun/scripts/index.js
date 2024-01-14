document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-button');
    const navListBurger = document.querySelector('.navlist-burger');

    const buttonToggle = () => {
        burgerButton.classList.toggle('burger-active');
        navListBurger.classList.toggle('active');
    };

    document.addEventListener('click', (event) => {
        if (event.target === burgerButton || event.target.classList.contains("burger-line")) {
            buttonToggle()
        } else if (!burgerButton.contains(event.target)) {
            burgerButton.classList.remove('burger-active');
            navListBurger.classList.remove('active');
        }
    });
});