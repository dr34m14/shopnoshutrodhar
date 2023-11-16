let realvalu;
function make_ques() {
    let max = 150;
    let min = 1;
    const arr = [' + ', ' - ', ' x '];
    let arr_rand = Math.floor(Math.random() * 3);
    let first_dig = Math.floor(Math.random() * (max - min) + min);
    let secound_dig = Math.floor(Math.random() * (max - min) + min);
    let string = first_dig.toString() + arr[arr_rand] + secound_dig.toString() + "=?";
    
    if (arr_rand == 0) {
        realvalu = first_dig + secound_dig;
    } else if (arr_rand == 1) {
        realvalu = first_dig - secound_dig;

    } else {
        realvalu = first_dig * secound_dig;

    }


    console.log(realvalu);
    //doc
    //question block
    const ques_text = document.querySelector('#ques_id');
    ques_text.textContent = string;

    //ands block

    const box_arr = ['box1', 'box2', 'box3', 'box4'];
    let box_rendom = Math.floor(Math.random() * 4);
    for (let j = 0; j < 4; j++) {
        if (j != box_arr) {
            let box_other = document.querySelector(`#${box_arr[j]}`);
            let other_box_num = Math.floor(Math.random() * (Math.abs(realvalu + first_dig) - Math.abs(realvalu - secound_dig)) + secound_dig);
            box_other.textContent = other_box_num;
        }
    }
    const select_box = document.querySelector(`#${box_arr[box_rendom]}`);
    select_box.textContent = realvalu;

}

make_ques();