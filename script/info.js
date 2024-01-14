import { infoText } from './textStore.js'

const fotoContainerFoto = document.querySelector('.picture');
const fotoContainerText = document.querySelector('.info');

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

const main = () => {
    createPictureContainer(infoText.fotoSection.fotoLink, infoText.fotoSection.fotoHeading, infoText.fotoSection.fotoText);

    setTimeout(flipFoto, 3000);
};

main();