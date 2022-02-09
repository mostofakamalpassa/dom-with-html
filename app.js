document.getElementById('submit').addEventListener('click', function(e){

    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');

    if(userEmail.value == 'abc@gmail.com' && userPassword.value == '123'){
        window.location.href = 'banking.html';
    }else{
        alert('invalid');
    }
  
})