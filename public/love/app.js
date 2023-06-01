document.addEventListener('mousemove', (e) => {
<<<<<<< HEAD
=======
    //delte text
    let body_text = document.getElementById('body_text');
    setInterval(() => {
        body_text.innerText="";

    }, 500);


>>>>>>> sub_main
    //mousemove
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 70;
<<<<<<< HEAD
    heart.style.width = 20+ size + 'px';
    heart.style.height = 20+ size + 'px';
=======
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';
>>>>>>> sub_main

    let transformValue = Math.random() * 360;
    heart.style.transform = `rotate(${transformValue}deg)`;

    body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);


})