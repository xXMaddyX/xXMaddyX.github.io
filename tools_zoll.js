$(document).ready(() => {
    $('#nav').load("nav.html")
})

const ZollRechnerBtn = document.querySelector('.zoll-btn');
const ZollRechnerBox = document.querySelector('.zoll-popup');
const ZollRechnerClose = document.querySelector('.close-btn');
const InCmBtn = document.querySelector('.in-cm')
const InZollBtn = document.querySelector('.in-zoll')



ZollRechnerBtn.onclick = () => {
    ZollRechnerBox.classList.add('active');
}

ZollRechnerClose.onclick = () => {
    ZollRechnerBox.classList.remove('active')
    document.querySelector('.result').innerHTML = "Ergebniss";

}

InCmBtn.onclick = () => {
    let inp_main = document.querySelector('.zoll-popup-inp').value;
    inp = inp_main.replace(",", ".")
    result = inp * 2.54
    finalResult = result.toFixed(2)
    document.querySelector('.result').innerHTML = `${inp.replace(".", ",")}Zoll sind ${finalResult.replace(".", ",")}cm`;
    document.querySelector('.zoll-popup-inp').value = "";
}


InZollBtn.onclick = () => {
    let inp_main = document.querySelector('.zoll-popup-inp').value;
    inp = inp_main.replace(",", ".")
    result = inp / 2.54
    finalResult = result.toFixed(2)
    document.querySelector('.result').innerHTML = `${inp.replace(".", ",")}cm sind ${finalResult.replace(".", ",")}Zoll`;
    document.querySelector('.zoll-popup-inp').value = "";
}