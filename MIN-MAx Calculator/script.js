function findMinMax(){
let Userinput = document.getElementById('Number').value;
let Array = Userinput.split(' ').map(Number);
let minVal = Math.min(...Array);
let maxVal = Math.max(...Array);
document.getElementById('answer').innerHTML=`The minimum value ${minVal} <br> The maximum value ${maxVal} `;

 

}