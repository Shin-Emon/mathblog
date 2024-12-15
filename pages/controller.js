const ansElement = document.getElementById('answer');
const ansButton = document.getElementById('ansButton');

const fonts = [
    'mincho',
    'gothic'
];

const addClass = (id, fontNum) => {
    const element = document.getElementById(id);

    element.classList.remove(fonts[Math.abs(fontNum-1)]);
    element.classList.add(fonts[fontNum]);
};


const switchAnswer = () => {
    if (ansElement.style.display == 'none') {
        showAnswer();
    } else {
        hideAnswer();
    }
};

const showAnswer = () => {
    ansButton.innerText = '答えを隠す';
    ansElement.style = '';
};

const hideAnswer = () => {
    ansButton.innerText = '答えを見る';
    ansElement.style = 'display: none;';
}