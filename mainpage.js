const SigninButton = document.getElementById("id4");
const SignupButton = document.getElementById("id5");

SigninButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Studentlogin.html";
});

SignupButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "lecturerlogin.html";
});