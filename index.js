"use strict"

let qrcode = new QRCode("QR-code-display");
let generateCode = document.querySelector('.getCode')
let elText = document.getElementById("text");


function makeCode (data) {    
  
  if (data === ''){
    alert("Input a text");
    elText.focus();
    return;
  }
  
  qrcode.makeCode(data);
  elText.value = null
}
generateCode.addEventListener('click', ()=> makeCode(elText.value))



