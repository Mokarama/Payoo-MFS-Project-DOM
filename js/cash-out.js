console.log('added js File');

document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('added cash-out.js File')

    //1]input-cash-out  2]input-cash-out-pin

    const cashOut =document.getElementById('input-cash-out');
    const newCashOut =cashOut.value ;
    console.log(newCashOut);

   const cashOutPin =document.getElementById('input-cash-out-pin');
   const newCashOutPin =cashOutPin.value;
   console.log(newCashOutPin);


   if(newCashOutPin === '1234') {
     console.log('money is reducing')

     const balance =document.getElementById('account-balance').innerText;
    //console.log(balance);
    const cashOutNumber =parseFloat(newCashOutPin);
    //console.log(typeof cashOutNumber);

    const cashOutPinNumber =parseFloat(newCashOutPin)
    //console.log(typeof cashOutPinNumber)

    const cashOutMoney =balance - cashOutNumber;
    //console.log(cashOutMoney);

    document.getElementById('account-balance').innerText =cashOutMoney;
   }
   else{
      alert('Failed to cash out.Please try again later.')
   }

})