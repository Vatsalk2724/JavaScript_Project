function calculator(){

     let marks = parseInt(document.getElementById('grade').value);   

      if(isNaN(marks)){
        marks.innerHTML=`<i> please enter number </i>`;

      
    }
     if(marks < 0 || marks > 100){
        document.getElementById(`checkGrd`).innerHTML = `marks should be between 0 and 100`;
    }

    else if(marks>=90){
        document.getElementById('checkGrd').innerHTML=`grade-A`;
    }
    else if(marks>=70){
        document.getElementById('checkGrd').innerHTML=`grade-B`;
    }
    else if(marks>=50){
        document.getElementById('checkGrd').innerHTML=`grade-C`;
    }
    else if(marks>=40){
        document.getElementById('checkGrd').innerHTML=`grade-D`;
    }
    else{
        document.getElementById('checkGrd').innerHTML=`grade-E`;
        
    }
    

}