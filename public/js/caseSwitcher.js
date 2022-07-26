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

const btn2 = document.getElementById('sarc-btn')
btn2.addEventListener('click', alt)  

function alt() {
    let text = document.getElementById('patrick').innerHTML.toLowerCase()

    strArray = text.split('') 
    for (i = 1; i <= strArray.length; i += 2) {
        strArray[i] = strArray[i].toUpperCase();
    }
    result = strArray.join('')
    document.getElementById('patrick').innerHTML = result;
}




