let punkti = 0;


let red = 0;
let green = 0;
let blue = 0;

let diametrs= 200;


function OnButtonClick(){
    punkti += 1;
    document.getElementById("score").innnerHTML = punkti;
    
red = getRandomInt(256);
green = getRandomInt(256);
blue = getRandomInt(256);

let rgbCode = "rgb("; + red.toString() + "," + green.toString() + "," + blue.toString()
diametrs=5 ; 



    document.getElementById("button").style.backgroundColor = "rgb(0, 0, 0)"
 }   

  
function GenerateRandomInt(max){
    return Math.floor(Math.random() * max);
}

function generateNejausoSkaitli(līdz){
   return Math.floor(math.random() * līdz)
}