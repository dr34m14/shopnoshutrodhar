const text = 'Enjoy the Game'
const bio_text = document.querySelector('.home_title')
let text_ind = 0;
function type() {
    if (bio_text.textContent == '') {
        let a = setInterval(() => {
            bio_text.textContent += text.charAt(text_ind)
            text_ind++;
            if (bio_text.textContent == text) {
                clearInterval(a)
                deleting()
            }
        }, 150)
    }
}

function deleting() {
    if (bio_text.textContent == text) {

        let b = setInterval(() => {
            bio_text.textContent = text.substring(0, text_ind - 1)
            text_ind--;
            if (bio_text.textContent == '') {
                clearInterval(b)
                type()

            }
        }, 200)
    }
}

document.addEventListener('DOMContentLoaded', () => {

    type()

})
