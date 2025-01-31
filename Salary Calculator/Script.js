function Salary(){

let grow = parseInt(document.getElementById('gross').value);
let Da = parseInt(document.getElementById('da').value);
let hr = parseInt(document.getElementById('hra').value);
let convey = parseInt(document.getElementById('convey').value);
let medical = parseInt(document.getElementById('medical').value);
let other = parseInt(document.getElementById('other').value);

let result = 0;

if(isNaN(grow) || isNaN(Da) || isNaN(hr) || isNaN(convey) || isNaN(medical) || isNaN(other)){

    result.getElementById('answer').innerHTML=`Invalid value`;

}
else{

    result = grow - (Da + hr + convey + medical + other);

    document.getElementById('answer').innerHTML=`The Basic Salary${result}`;

}


}