const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passWordField = document.getElementById('password');
    const password = passWordField.value;
    if (email == 'robinmahmud358@gmail.com' && password == 'robin') {
        console.log("valid");
    }
    else {
        console.log('unvalid');
    }
})