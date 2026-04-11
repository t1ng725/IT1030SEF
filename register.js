function initRegister(event){
    event.preventDefault();

    const uid = document.getElementById('regUid').value.trim();
    const pw = document.getElementById('regPw').value;
    const confirmPw = document.getElementById('regConfirmPw').value;

    if (!uid || !pw || !confirmPw) {
        window.alert("Please fill in all fields.");
        return;
    }

    if (pw !== confirmPw){
        window.alert("Passwords do not match.");
        return;
    }
    
    const usersStr = localStorage.getItem("users");
    let users = {};

    if (usersStr){
        users = JSON.parse(usersStr);
    }

    if (users[uid]) {
        window.alert("User ID already exists.");
        return;
    }

    users[uid] = { password: pw };
    localStorage.setItem('users', JSON.stringify(users));

    window.alert("Registration successful.");
    window.location.href = "login.html";

}

function setupRegisterForm(){
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', initRegister);
    }
}

document.addEventListener('DOMContentLoaded', setupRegisterForm);
