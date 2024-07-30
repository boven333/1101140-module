function signup_form_password_check() {
    const regPassword = document.getElementById('register_password');
    const passCharacCount = document.getElementById('password_character_count');
    const regConPassword = document.getElementById("register_confirm_password");

    if (regPassword.value.length >= 8) {
        passCharacCount.style.color = '#00FF00';
        regConPassword.disabled = false;
    } else if (regPassword.value.length == "") {
        passCharacCount.style.color = '#000';
    } else {
        passCharacCount.style.color = '#ff0000';
        regConPassword.disabled = true;
    }
};

function match_check() {
    const regPassword = document.getElementById('register_password');
    const regConPassword = document.getElementById('register_confirm_password');
    const message = document.getElementById('message');
    const regAgree = document.getElementById('register_agree_to_terms');
    const signupBtn = document.getElementById('signup_button');

    if ((regPassword.value === regConPassword.value) && (regPassword.value.length > 0)) {
        message.style.color = '#00ff00';  // green color
        message.innerHTML = "Matched"
        regAgree.disabled = false; 
    } else if (regConPassword.value.length == 0) {
        message.style.color = '#000'; //black color
        regAgree.disabled = true; 
    } else if (regPassword.value !== regConPassword.value) {
        message.style.color = '#ff0000'; //red color
        message.innerHTML = "Not Match!"
        regAgree.disabled = true; 
    } 

    let x = false
    if (regAgree.checked) {
        x = true
        console.log("checked", x)
    } else {
        x = false
        console.log("Uncheck", x)
    }

    if (x === true) {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
};
