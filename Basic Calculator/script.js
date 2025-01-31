function calculate(exp){

    let num1 = parseInt(document.getElementById('input-num1').value);
    let num2 = parseInt(document.getElementById('input-num2').value);

    let result = document.getElementById('answer');
    result.style.fontSize = " 14px ";


    if(isNaN(num1) || isNaN(num2)){
        result.innerHTML = "<i>Please enter a number</i>";
    } else{

        switch(exp){

            case 'Add':
            result.innerHTML = `sum : ${num1+num2} `;    
            break;
            
            case 'Sub':
            result.innerHTML = `sum : ${num1-num2} `;    
            break;

            case 'Multiply':
            result.innerHTML = `sum : ${num1*num2} `;    
            break;
            
            case 'Devision':
            result.innerHTML = `sum : ${num1/num2} `;    
            break;
        default:
        result.innerHTML = `Invalid`;


        }



    }


}  