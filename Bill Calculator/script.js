function Bill(){

    let amount = parseInt(document.getElementById('amt').value);
    let disAmount = parseInt(document.getElementById('disAmt').value);
        
    let result = 0;

    if(isNaN(amount) || isNaN(disAmount)){
        amount.innerHTMl=`Please Enter a Amount`;
        disAmount.innerHTMl=`Pleas Enter a Discount`;

    }
    if(amount<0 || disAmount<0){
        document.getElementById('billCheck').innerHTML=`Invalid Amount`;
    }
    else{
        result = amount-(amount*disAmount/100);
        document.getElementById('billCheck').innerHTML=`After discount amount will be${result}`;
    }





}