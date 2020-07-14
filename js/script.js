//Declarando variaveis globais para os inputs de tipo ranger
let inputRangeRed = null;
let inputRangeGreen = null;
let inputRangeBlue = null;
//Declarando variaveis globais para os input de tipo text
let inputTextRed= null
let inputTextGreen= null
let inputTextBlue= null
//Declarando o quadrado divSquare
let divSquare = null;
// variaveis rgb
let r= '0';
let g = '0';
let b = '0';
window.addEventListener('load',()=>{
  mapElements();
sync();
});
function mapElements(){
  //Capturando os dados dos input tipo range pelo id
  inputRangeRed = document.querySelector('#inputRangeRed');
  inputRangeGreen = document.querySelector('#inputRangeGreen');
  inputRangeBlue = document.querySelector('#inputRangeBlue');
  //Capturando os dados dos input tipo text pelo id
  inputTextRed = document.querySelector('#inputTextRed');
  inputTextGreen = document.querySelector('#inputTextGreen');
  inputTextBlue = document.querySelector('#inputTextBlue');

  //capturando o valor do quadrado divSquare
  divSquare = document.querySelector('#divSquare');
inputRangeRed.addEventListener('change', handleInputRangeChange);
inputRangeGreen.addEventListener('change', handleInputRangeChange);
inputRangeBlue.addEventListener('change', handleInputRangeChange);
  
}
function handleInputRangeChange(event){
 const value = event.target.value;
 const id=event.target.id;

 switch(id){
   case 'inputRangeRed':r = value;
   break;
   case 'inputRangeGreen':g = value;
   break;
   case 'inputRangeBlue':b = value;
   break;
 }
sync();
}

function sync(){
  divSquare.style.backgroundColor =`rgb(${r},${g},${b})`;
  inputTextRed.value =r;
  inputTextGreen.value =g;
  inputTextBlue.value =b;
}