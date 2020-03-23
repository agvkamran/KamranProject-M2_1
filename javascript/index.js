let button = document.getElementById("button");
button.addEventListener('click', f1);
// function calc() {
//     let result = f1(start, everyMonth, percent, date);
//     console.log(result);
// }
function f1() {
    let start = +document.getElementById("start").value;
    let everyMonth = +document.getElementById("everyMonth").value;
    let percent = +document.getElementById("percent").value;
    let date = +document.getElementById("date").value;
    let wrong = document.getElementById("alert");
    if (percent > 100 || date <= 0 || everyMonth == NaN) {
     alert(NaN);
    }
    if(start <= 0 || everyMonth < 0 || percent <= 0){
        wrong.style.display = "block";
        console.log("Ошибка входных параметров")
        return NaN;
    }
    if(percent < 100 || date > 0 || everyMonth != NaN || start > 0 || everyMonth > 0 || percent <= 100){
        wrong.style.display = "none";
    }
    let result = start;
    let month = Math.floor(date / 30);
    for (i = 0; i < month; i++) {
        // console.log(result);
        result += result * percent / 100 /12 ;
        result += everyMonth;
    }
alert(result);   
}


