import { textData } from "./textStore.js";

const link1 = document.getElementById("list1");
const link2 = document.getElementById("list2");
const link3 = document.getElementById("list3");

//<--------------------NavList & Animation---------------------> 
const listAnimationText = {
    text1: "Projekte",
    text2: "Info",
    text3: "Kontakt",
}
const linkAnimation = async (listAnimationText, element) => {
    return new Promise((resolve) => {
        for (let i = 0; i < listAnimationText.length; i++) {
            setTimeout(() => {
                element.textContent += listAnimationText[i]
                if (i === listAnimationText.length - 1) resolve();
            },i * 100)
        }
    });
}

const executAnimation = async () => {
    await linkAnimation(listAnimationText.text1, link1)
    await linkAnimation(listAnimationText.text2, link2)
    await linkAnimation(listAnimationText.text3, link3)
}
executAnimation()

//<----------IntersectionObserver Philisophie Text------------>
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    };

    var observer = new IntersectionObserver(observerCallback, options);
    var elements = document.querySelectorAll('.philosophie-text > *');

    elements.forEach(el => {
        observer.observe(el);
    });
});

//<--------Element Creator------------------->
const main = document.querySelector('.main')

//Creates an div container with desired Class
const divContainer = (classType) => {
    const container = document.createElement('div');
    container.classList.add(classType);
    return container;
};

const headingContainer = (text) => {
    const heading = document.createElement("h1");
    heading.textContent = text;
    return heading;
};

const para = (text) => {
    const para = document.createElement('h3');
    para.textContent = text;
    return para;
};

const image = (imageUrl) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    return img;
};

const makeElement = (selectedElement, divClass, headingText, paraText, imgUrl) => {
    const container = divContainer(divClass);
    const textContainer = divContainer(divClass + "-text")
    const subContainer = divContainer(divClass + "-sub");
    const heading = headingContainer(headingText);
    const paragrapth = para(paraText);
    const img = image(imgUrl);

    textContainer.appendChild(heading);
    textContainer.appendChild(paragrapth);
    subContainer.appendChild(img);

    container.appendChild(textContainer);
    container.appendChild(subContainer);
    selectedElement.appendChild(container);
};

textData.forEach(item => {
    makeElement(main, "main-content", item.projectHeader, item.text, item.imgSrc);
});
