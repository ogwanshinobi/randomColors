const button = document.querySelector('button');
const h1 = document.querySelector('h1');

h1.style.textAlign = "center";
h1.style.fontSize = "64px";

button.style.margin = "0px auto";
button.style.fontSize = "48px";
button.style.display = "block";

button.addEventListener('click', function() {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;


})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const sum = r + g + b;

    if(sum < 300) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }

    return `rgb(${r}, ${g}, ${b})`;

}