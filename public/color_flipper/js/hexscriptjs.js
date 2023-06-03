const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.querySelector(".btn")
const span = document.getElementById("color1")
const container = document.querySelector(".container");
btn.addEventListener("click", () => {
    let hexcc = "#"

    for (let i = 0; i < 6; i++) {

        hexcc += hex[randomnum()];
    }

    span.textContent = hexcc;
    container.style.backgroundColor = hexcc;

})
function randomnum() {
    let num = Math.floor(Math.random() * hex.length);
    return num;
}