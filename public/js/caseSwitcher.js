

//document.getElementById("quiet-btn").addEventListener("click", upper()); 
  
//document.getElementById("loud-btn").addEventListener("click", font);
//document.getElementById("sarc-btn").addEventListener("click", font);


/*let upper = function() {
    let iv = "";
    
    iv = p.innerText.toUpperCase()
    
    p.innerText = iv
}
*/

/*function lower() {
    let text = document.getElementById('patrick').innerText;
    document.getElementById('patrick').innerText = text.toLowerCase();
}
*/
/*document.getElementById('loud-btn').onclick = function() {
    let upperString = document.getElementById('patrick').innerText.toUpperCase();
    document.getElementById('patrick').innerText = upperString;
 }*/

 /*function lower() {
    let text = document.getElementById("patrick").value;
    let lowerCase = text.toLowerCase();
    document.getElementById("patrick").value = lowerCase;
 }*/

    /*let text = document.getElementById("patrick").innerText;
    document.getElementById("patrick").innerText =
    text.toLowerCase();
  }*/

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

//document.getElementById('patrick').innerHTML