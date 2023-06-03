const colors = ["green", "red", "purple", "	silver",
    "maroon", "fuchsia", 'lime',"olive","yellow","navy","blue","teal","aqua"];
const btn = document.querySelector(".btn")
const span = document.getElementById("color1")
const container = document.querySelector(".container");
btn.addEventListener("click", () => {
    let numcolor = randomnum();
    container.style.backgroundColor = colors[numcolor];
    span.textContent = colors[numcolor];
    span.style.color = colors[numcolor]
});
function randomnum() {
    let num = Math.floor(Math.random() * colors.length);
    return num;
}
