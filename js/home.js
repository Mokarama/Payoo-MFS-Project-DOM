
//console.log('home.js File Added');

//add money to the account

/*step-01:add event handle prevent page reload aFter Form submit
step-02:get money to be added to the account balance
step-03: veriFy pin number
*/
document.getElementById('add-money-btn').addEventListener('click',function(event) {
   //prevent page reload aFter Form submit
    event.preventDefault();

   //console.log('even handle added');

   //step-02:get money to be added to the account
    /***------add money input-----**/
   const inputAddMoney =document.getElementById('input-add-money') ;
   const newInputAddMoney =inputAddMoney.value;
   console.log(newInputAddMoney);

   /*** password*/

   const inputPassword =document.getElementById('input-password');
   const newinputPassword =inputPassword.value;
   console.log(newinputPassword);

   //step-03:variFy pin number
   //wrong way to validate pin number
   if(newinputPassword ==='1234'){
    console.log('adding money to your account')

    // step-4:get the current balance
    const balance =document.getElementById('account-balance').innerText;
    // const newBalance =balance.innerText;
    console.log(balance)

    // step-05:add addMoneyInput with balance
    // const newBalance =+(balance + );
    const addMoneyNumber =parseFloat(newInputAddMoney);
    //console.log(typeof addMoneyNumber)
  
    const balanceNumber =parseFloat(balance);
    //console.log(balanceNumber);

    const newBalance =addMoneyNumber +balanceNumber;
    console.log(newBalance)
    
    //step-06:Update the balance in the UI/DOM
    document.getElementById('account-balance').innerText =newBalance;



   }
   else{
    alert('Failed to add money! Please try again')
   }

})