const color1 = document.getElementById('color1');
const randomizeBtn = document.getElementById('randomize');
const output = document.getElementById('output');

function setSolidColor() {
    const backgroundStyle = color1.value;
    document.body.style.background = backgroundStyle;
    output.textContent = `background: ${backgroundStyle};`;
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

color1.addEventListener('input', setSolidColor);

randomizeBtn.addEventListener('click', () => {
    color1.value = randomColor();
    setSolidColor();
});

setSolidColor();