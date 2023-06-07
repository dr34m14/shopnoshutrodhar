function get_data()
{

    var storedItem=localStorage.getItem("high_score_");
    if(storedItem==null){
        document.getElementById("high_score_data").textContent=00;

    }else{
        document.getElementById("high_score_data").textContent=storedItem;

    }
}