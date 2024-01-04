
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var submit = document.getElementById("submit");
    var form = document.querySelector("form");
    var submittedMessage = document.getElementById("submittedMessage");


    // Reset error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    submittedMessage.style.display = "none";

    

    function validateForm() {
    // Validate username
    if (username.validity.valueMissing) {
        document.getElementById("usernameError").innerHTML = "Username is required.";
        // return false;
    }

    // Validate email
    if (email.validity.valueMissing) {
        document.getElementById("emailError").innerHTML = "Email is required.";
        // return false;
    } else if (email.validity.typeMismatch) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        // return false;
    }

    // Validate password
    if (password.validity.valueMissing) {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        return false;
    }

    username.value = "";
    email.value = "";
    password.value = "";

    // Show alert
    form.style.display = 'none';
    submittedMessage.style.display = 'flex';

    return false;
}
submit.addEventListener("click", validateForm)

username.addEventListener("input", function () {
    document.getElementById("usernameError").innerHTML = "";
});

email.addEventListener("input", function () {
    document.getElementById("emailError").innerHTML = "";
});

password.addEventListener("input", function () {
    document.getElementById("passwordError").innerHTML = "";
});