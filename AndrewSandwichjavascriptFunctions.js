
  /*Validating that content was submitted for Full Name*/
function validateFullName(){
    var x=document.querySelector("#fullname").value;
    if(x.length<3 || x.length>35){
        document.querySelector("#feedbfname").innerHTML=" Invalid value provided ";
        return false;
    }else{

        document.querySelector("#feedbfname").innerHTML=" Confirmed - Thank You ";
        return true;
    }
}
  /*Validating that content was submitted for a bread choice - this will always show as valid because White Bread is pre-checked in the radio button*/

function validateBread() {
    var breadOptions = document.querySelectorAll('input[name="bread"]');
    var isBreadChecked = false;
  
    for (var i = 0; i < breadOptions.length; i++) {
      if (breadOptions[i].checked) {
        isBreadChecked = true;
        break;
      }
    }
  
    if (isBreadChecked) {
      document.querySelector("#feedbbread").innerHTML = "Confirmed - Thank You";
    } else {
      document.querySelector("#feedbbread").innerHTML = "Please select a meat option.";
    }

    return isBreadChecked
  }
    /*Validating that an option was selected for meat*/

  function validateMeats() {
    var meatsOptions = document.querySelectorAll('input[name="meats"]');
    var isMeatsChecked = false;
  
    for (var i = 0; i < meatsOptions.length; i++) {
      if (meatsOptions[i].checked) {
        isMeatsChecked = true;
        break;
      }
    }
  
    if (isMeatsChecked) {
      document.querySelector("#feedbmeats").innerHTML = "Confirmed - Thank You";
    } else {
      document.querySelector("#feedbmeats").innerHTML = "Please select a meat option.";
    }

    return isMeatsChecked
  }
    /*Validating that an option was selected for cheese*/

  function validateCheese() {
    var cheeseOptions = document.querySelectorAll('input[name="cheese"]');
    var isCheeseChecked = false;
  
    for (var i = 0; i < cheeseOptions.length; i++) {
      if (cheeseOptions[i].checked) {
        isCheeseChecked = true;
        break;
      }
    }
  
    if (isCheeseChecked) {
      document.querySelector("#feedbcheese").innerHTML = "Confirmed - Thank You";
    } else {
      document.querySelector("#feedbcheese").innerHTML = "Please select a cheese option.";
    }

    return isCheeseChecked
  }
    /*Validating that an option was selected for veggies*/

  function validateVeggie() {
    var veggieOptions = document.querySelectorAll('input[name="veggie"]');
    var isVeggieChecked = false;
  
    for (var i = 0; i < veggieOptions.length; i++) {
      if (veggieOptions[i].checked) {
        isVeggieChecked = true;
        break;
      }
    }
  
    if (isVeggieChecked) {
      document.querySelector("#feedbveggie").innerHTML = "Confirmed - Thank You";
    } else {
      document.querySelector("#feedbveggie").innerHTML = "Please select at least 1 veggie.";
    }

    return isVeggieChecked
  }
    /*Validating that instructions/order delivery info was submitted*/

function validateinfo(){
    var x=document.querySelector("#info").value;
    if(x.length<3 || x.length>50){
        document.querySelector("#feedbinfo").innerHTML=" Please Provide Instructions ";
        return false;
    }else{
        document.querySelector("#feedbinfo").innerHTML=" Confirmed - Thank You ";
        return true;
    }
}

    /*Using regex to validate email*/


function validateEmailAndType(){

    var email=document.querySelector("#email").value;

    var regexEmail = /^\S+@\S+\.\S+$/;

    if(regexEmail.test(email)){
        document.querySelector("#feedbemail").innerHTML="Confirmed - Thank You";
        return true;
    }else{
        document.querySelector("#feedbemail").innerHTML="Please Enter a Valid Email";
        return false;
    }


}
    /*confirming a valid phone number was provided via length of submission*/

function validatePhone(){
    var x=document.querySelector("#phone").value;
    if(x.length!==10){
        document.querySelector("#feedbphone").innerHTML=" Please Enter a Valid Phone Number ";
        return false;
    }else{
        document.querySelector("#feedbphone").innerHTML=" Confirmed - Thank You ";
        return true;
    }

}


    /*checking to confirm all fields above got a valid input*/


function areAllValid() {
    var isValid = true;
    if (!validateFullName()) {
      isValid = false;
    }
    if (!validateBread()) { 
      isValid = false;
    }
    if (!validateEmailAndType()) {
      isValid = false;
    }
    if (!validateinfo()) {
      isValid = false;
    }
    if (!validatePhone()) {
      isValid = false;
    }
    if (!validateCheese()) {
      isValid = false;
    }
    if (!validateMeats()) {
      isValid = false;
    }
    if (!validateVeggie()) {
      isValid = false;
    }
    return isValid;
  }

  var enterbtn = document.querySelector("#enterbtn");
    /*thank you note for those who provided all valid instructions*/

  enterbtn.addEventListener("click", function() {
    if (areAllValid()) {
      document.querySelector("#submitConfirm").innerHTML = "<h4>Thank you for your order!</h4>";
    } else {
      document.querySelector("#submitConfirm").innerHTML = "<h4>Please finalize your selections.</h4>";
    }
  });
  