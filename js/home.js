
//console.log('home.js File Added');

//add money to the account

/*step-01:add event handle prevent page reload aFter Form submit
step-02:get money to be added to the account balance
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

})