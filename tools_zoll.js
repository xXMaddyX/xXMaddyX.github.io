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
    let inp = document.querySelector('.zoll-popup-inp').value;
    result = inp * 2.54
    finalResult = result.toFixed(2)
    document.querySelector('.result').innerHTML = `${inp}Zoll sind ${finalResult}cm`;
    document.querySelector('.zoll-popup-inp').value = "";
}


InZollBtn.onclick = () => {
    let inp = document.querySelector('.zoll-popup-inp').value;
    result = inp / 2.54
    finalResult = result.toFixed(2)
    document.querySelector('.result').innerHTML = `${inp}cm sind ${finalResult}Zoll`;
    document.querySelector('.zoll-popup-inp').value = "";
}