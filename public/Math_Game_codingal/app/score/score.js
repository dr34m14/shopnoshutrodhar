let score_res = 0;
let hightest_score = 0;
function score() {
    score_res++;

    score_save();
}



function score_save() {

    if (hightest_score < score_res) {
        localStorage.setItem("high_score_", score_res);
    }
    score_desplay()
}






function score_desplay() {

    document.getElementById("right_ans").textContent = score_res;
}