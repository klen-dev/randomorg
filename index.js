// let min = 5
// let max = 20

// let natija = true;
// for(i=min; i<max; i++){
//     let random = Math.floor(Math.random()*max);
//     if(random >= min && random <= max){
//         console.log(random);
//         break;
//     } else{
//         continue;
//         console.log()
//     }
// }


let min = document.getElementById("min");
let max = document.getElementById("max");
let button = document.getElementById("button");
let result = document.getElementById("result");
let minMax = document.getElementById("minmax");
let time = document.getElementById("time");
let resetButton = document.getElementById("reset");
resetButton.disabled = true;
button.addEventListener("click", ()=>{
    min = min.value*1;
    max = max.value*1;
    setInterval(myTimer, 1000);
    function myTimer() {
      const d = new Date();
      document.getElementById("time").innerHTML = d.toTimeString();
    }
    if(min>max){
        window.location.reload();
    }
    for(i=min; i<=max; i++){
        let random = Math.floor(Math.random()*max);
        if(random >= min && random <= max){
            result.textContent= random;
            minMax.textContent= `Min: ${min}, Max: ${max}`;
            resetButton.disabled = false;
            time.style.display="block";
            break;
        } else{
            console.log(random);
            continue;
        }
    }
})

resetButton.addEventListener("click", ()=>{
    window.location.reload();
})


