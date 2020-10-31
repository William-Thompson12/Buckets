let emailTextBox = document.getElementById('email')
let passwordTextBox = document.getElementById('password')
let loginButton = document.getElementById('loginButton')
let errorMessageBox = document.getElementById('errorMessage')

loginButton.addEventListener('click', function(){
    event.preventDefault()
    let emailValue = emailTextBox.value
    let passwordValue = passwordTextBox.value
    firebase
    .auth()
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then(function(){
      window.location.replace('../home.html')
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
