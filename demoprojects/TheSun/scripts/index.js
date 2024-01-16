import { mainText } from "./textStore.js";

document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-button');
    const navListBurger = document.querySelector('.navlist-burger');
    const openingTextContent = document.querySelector('.text-content');

    const scrollOpening = document.querySelector('.opening')

    const buttonToggle = () => {
        burgerButton.classList.toggle('burger-active');
        navListBurger.classList.toggle('active');
    };

    const removeActiveButtons = () => {
        burgerButton.classList.remove('burger-active');
        navListBurger.classList.remove('active');
    }

    document.addEventListener('click', (event) => {
        if (event.target === burgerButton || event.target.classList.contains("burger-line")) {
            buttonToggle();
        } else if (!burgerButton.contains(event.target)) {
            removeActiveButtons();
        }
        if (event.target.id == "opening") {
            scrollOpening.scrollIntoView({behavior: "smooth"})
            removeActiveButtons();
        }
    });

    const createTextContainer = () => {
        mainText.forEach(element => {
            const divContainer = document.createElement('div');
            divContainer.classList.add('text-content-item');

            const headingText = document.createElement('h2');
            headingText.innerHTML = element.heading;
            divContainer.appendChild(headingText);

            const text = document.createElement('p');
            text.textContent = element.text;
            divContainer.appendChild(text);

            const dotted = document.createElement('p');
            dotted.textContent = "..."
            divContainer.appendChild(dotted);

            openingTextContent.appendChild(divContainer);
        });
    };
    
    const main = () => {
        createTextContainer();
    }

    main();
});