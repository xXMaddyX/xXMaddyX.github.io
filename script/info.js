import { infoText } from './textStore.js'

const fotoContainerFoto = document.querySelector('.picture');
const fotoContainerText = document.querySelector('.info');
const textContainer = document.querySelector('.texting');

const flipFoto = () => {
    const foto = document.querySelector('.info-foto');
    foto.classList.add("active");
};

const createPictureContainer = (fotoLink, fotoHeading, fotoText) => {
    const picture = document.createElement('img');
    picture.classList.add('info-foto');
    picture.src = fotoLink;
    
    const headingText = document.createElement('h1');
    headingText.textContent = fotoHeading;
    
    fotoContainerFoto.appendChild(picture);
    fotoContainerText.appendChild(headingText);
    fotoText.forEach((text) => {
        const infoText = document.createElement('h3');
        infoText.textContent = text.text;
        fotoContainerText.appendChild(infoText);
    });
};

const startCube = () => {
    const activeCube = document.querySelector(".cube1")
    
    document.addEventListener('click', (event) => {
        console.log(event.target)
        if (event.target.classList.contains("face")) {
            activeCube.classList.toggle("active")
        }
    })
    
    const loopAnimation = () => {
        activeCube.classList.toggle("active")
    }
    
    const flippAnimation = () => {
        activeCube.classList.toggle("flipp")
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        setInterval(loopAnimation, 2000);
        setInterval(flippAnimation, 4000)
    })
}

const main = () => {
    createPictureContainer(infoText.fotoSection.fotoLink, infoText.fotoSection.fotoHeading, infoText.fotoSection.fotoText);

    setTimeout(flipFoto, 2000);
    startCube()
};

main();