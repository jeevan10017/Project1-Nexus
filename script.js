
    
function validateSignUp() {
    console.log('Function is being called');
    var uname = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var email = document.getElementById('email').value;
    if ( password.length <= 8 ) {
        alert('Password is too weak');
        return false;
    }
   return true;
}



