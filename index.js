
const sbtForm = document.getElementById("sbt-btn");

function showErrorMessage(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  return !message; // Return true if no error message, false otherwise
}

function validateName() {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    return showErrorMessage("name-err-msg", "Name cannot be blank!");
  }
  if (/\d+/.test(name)) {
    return showErrorMessage("name-err-msg", "Name cannot include numbers!");
  }
  return showErrorMessage("name-err-msg", "");
}

function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    return showErrorMessage("email-err-msg", "Email cannot be blank!");
  }
  if (!regex.test(email)) {
    return showErrorMessage("email-err-msg", "Email not in format!");
  }
  return showErrorMessage("email-err-msg", "");
}



function validateMessage() {
  const message = document.getElementById("message").value.trim();
  if (!message) {
    return showErrorMessage("msg-err-msg", "This field cannot be blank!");
    console.log('err msg')
  }
  return showErrorMessage("msg-err-msg", "");
}

function validateForm() {
  const valName = validateName();
  const valEmail = validateEmail();
  const valMessage = validateMessage();
  return valName && valEmail && valMessage;
}

sbtForm.addEventListener("click", (e) => {
  if (!validateForm()) {
    e.preventDefault();
  }
});






















/*-----------------------------------*/
















/* --------------------------------------------------------------

function validateForm() {
    if (nameValidate() && emailValidate() && messageValidate()) {
        return true
    }
}
-------------------------------------------------------------------

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form-sbt');

const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');

const message_error = document.getElementById('message_error');

form.addEventListener('submit',(e)=>
{  


   var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


   if(name.value === '' || name.value == null)

   {
      e.preventDefault();
      name_error.innerHTML = "Name is required";
   }


   else
   {
      name_error.innerHTML = "";
   }

   if(!email.value.match(email_check))
   {
      e.preventDefault();
      email_error.innerHTML = "Valid Email is required";

   }


   else
   {
      email_error.innerHTML = "";
   }


   if(message.value === '' || message.value == null)

    {
       e.preventDefault();
       message_error.innerHTML = "Name is required";
    }
 
 
    else
    {
       name_error.innerHTML = "";
    }

})








------------------------------------------------------*/
