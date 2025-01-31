function Int(){

    let princ = parseInt(document.getElementById('Pri').value);
    let rat = parseInt(document.getElementById('rate').value);
    let tim = parseInt(document.getElementById('time').value);

    let result = 0;

    if(isNaN(princ) || isNaN(rat) || isNaN(tim)){
        princ.innerHTML=`Please Enter `;
        rat.innerHTML=`Please Enter `;
        tim.innerHTML=`Please Enter `;
    }

    if(princ<0 || rat<0 || tim<0){
        document.getElementById('answer').innerHTML=`Invalid `;
    }
    else{

        result = princ*rat*tim/100;
        document.getElementById('answer').innerHTML=`intesert${result}`;
    }


}