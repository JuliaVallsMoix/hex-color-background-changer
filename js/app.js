// Implementar solución aquí
function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

document.querySelector('#btn').addEventListener('click', function() {

    let hexColor = getRandomHexColor();

    document.body.style.backgroundColor = hexColor;

    document.querySelector('#hex-value').innerHTML = " " + hexColor;

})


