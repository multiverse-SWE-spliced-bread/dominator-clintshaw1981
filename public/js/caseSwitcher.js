const btn = document.getElementById('quiet-btn')
btn.addEventListener('click', lower)  


function lower(){
let txt = document.getElementById('patrick').innerHTML
let result = txt.toLowerCase()
document.getElementById('patrick').innerHTML = result;
}

const btn1 = document.getElementById('loud-btn')
btn1.addEventListener('click', upper)  


function upper(){
let txt = document.getElementById('patrick').innerHTML
let result = txt.toUpperCase()
document.getElementById('patrick').innerHTML = result;
}

/*const btn3 = document.getElementById('sarc-btn')
btn1.addEventListener('click', alt)  
*/



