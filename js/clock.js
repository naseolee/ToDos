const clock = document.querySelector("#clock");


//interval -> 間隔

function sayHello() {
    console.log("hello");
}

/* */


function get2digits2(num) {
    let plusZeroSec = "0" + num.toString();
    return plusZeroSec.substring(plusZeroSec.length - 2, plusZeroSec.length);
}

function get2digits (num){
    return ("0" + num).slice(-2);
}

/* */ // --> .padStart(2,"0")

function getTime() {
    const today = new Date();
    //String(new Date().getHours());
    const hours = today.getHours().toString().padStart(2,ZERO);
    const minutes = today.getMinutes().toString().padStart(2,ZERO);
    clock.innerText = `${hours}:${minutes}`
}

getTime();
setInterval(getTime, 36000);
//setTimeout(sayHello,5000);