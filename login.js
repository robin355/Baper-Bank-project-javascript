//LogIn area
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passWordField = document.getElementById('password');
    const password = passWordField.value;
    if (email == 'robinmahmud358@gmail.com' && password == 'robin') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid your Password');
    }
})
//Deposit area 
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    console.log("larki click mara");
})