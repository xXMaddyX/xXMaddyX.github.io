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
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
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

    const observer = new IntersectionObserver(observerCallback, options);
    const elements = document.querySelectorAll('.philosophie-text > *');

    elements.forEach(el => {
        observer.observe(el);
    });
});