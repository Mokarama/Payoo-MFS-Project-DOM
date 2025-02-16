//console.log('log in Form added');

//search:Form submit reloading the page

//step-01:set event handler
document.getElementById('button-login').addEventListener('click', function(event) {
    //step-02:prevent default behavior (prevent reloading browser)
     event.preventDefault();//<---vejal lagbe---->
    console.log('button LogIn Added');
 
  //step-03:get the phone Number
    const phoneNumber =document.getElementById('phone-number');
    const newPhoneNumber =phoneNumber.value;
    console.log(newPhoneNumber);


    //step-04:get the pin number
  const pinNumber =document.getElementById('pin-number');
  //console.log(pinNumber)
  const newPinNumber =pinNumber.value;
  console.log(newPinNumber);

  //step-04:validate phone and pin
//avabe cheack kora uchit na {number r pin num sorasori diye}
  if (newPhoneNumber ==='6' && newPinNumber === '5678') {
    console.log('Log In');
    window.location.href ='/home.html';
    //step-05:allow user to use the website
  }
  else{
    alert('wrong phone number or pin')
  }
})


  