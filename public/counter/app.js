let count = 0;
const display = document.querySelector(".display")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
increase.addEventListener("click", () => {
    count += 1;
    display.textContent = count;
    display.style.color = "rgb(143, 250, 143)";

})
reset.addEventListener("click", () => {
    count = 0;
    display.textContent = count;
    display.style.color = "rgb(223, 223, 20)";


})
decrease.addEventListener("click", () => {
    count -= 1;
    display.textContent = count;
    display.style.color = "rgb(251, 131, 131)";



})
// or
// const btns = document.querySelector(".btn")
// btns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const styles = e.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--
//         }
//         else if (styles.contains("increase")) {
//             count++
//         } else {
//             count = 0;
//         }

//     })
// });