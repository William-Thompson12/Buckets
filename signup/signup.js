let emailTextBox = document.getElementById('email')
let passwordTextBox = document.getElementById('password')
let submitButton = document.getElementById('signup-button')
let errorMessageBox = document.getElementById('errorMessage')

submitButton.addEventListener('click', function(){
    event.preventDefault()
    let emailValue = emailTextBox.value
    let passwordValue = passwordTextBox.value
    firebase
    .auth()
    .createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(function(){
        window.location.replace('../login/')
      })
    .catch(function(error) {
        errorMessageBox.innerHTML = error.message;
      console.log(error.message)
      // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   message.innerHTML = errorMessage
    });
});
