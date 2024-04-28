const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const SigninButton = document.getElementById("Signin");
const SignupButton = document.getElementById("Signup");

registerBtn.addEventListener('click', function () {
    container.classList.add("active");
});

loginBtn.addEventListener('click', function () {
    container.classList.remove("active");
});
