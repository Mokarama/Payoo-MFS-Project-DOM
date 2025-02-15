//console.log('log in Form added');

//search:Form submit reloading the page

//step-01:set event handler
document.getElementById('button-login').addEventListener('click', function(event) {
    //step-02:prevent default behavior (prevent reloading browser)
     event.preventDefault();//<---vejal lagbe---->
    //console.log('button LogIn Added')
 
  //step-03:get the phone Number
    const PhoneNumber =document.getElementById('phone-number');
    const newPhoneNumber =PhoneNumber.value;
    console.log(newPhoneNumber);
    



})