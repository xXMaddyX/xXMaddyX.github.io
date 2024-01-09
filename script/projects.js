import { textData } from "./textStore.js";

document.addEventListener('DOMContentLoaded', () => {
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

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.remove("inactive")
                entry.target.classList.add("active")
            } else {
                entry.target.classList.add("inactive")
                entry.target.classList.remove("active")
            }
        })
    }

    const observer = new IntersectionObserver(callback, options);
    const elements = document.querySelectorAll(".main > *");
    elements.forEach(el => {
        observer.observe(el)
        el.classList.add("inactive")
    })
})