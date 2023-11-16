const box_click = document.getElementsByClassName("ans");
for (let i = 0; i < box_click.length; i++) {
    box_click[i].addEventListener('click', (e) => {
        //ans_click
        if(e.target.innerText==realvalu){

            console.log("ans right")
            make_ques();
            score();
        }else{
            alert("worng ans");
            console.log("worng ans");
        }
    },false);

}
