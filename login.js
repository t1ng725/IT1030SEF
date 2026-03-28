function initLogin() {
    var buttonClicked = document.getElementById("loginButton");
    buttonClicked.onclick = checkInput;
}

function checkInput() {
    var uidInput = document.loginForm.uid.value;
    var pwInput = document.loginForm.pw.value;
    if (uidInput === "" || pwInput === "") {
        window.alert("Please input User ID or password.");
        return;
    }
    // testing acc
    else if (uidInput === "s123" && pwInput === "ABCD") {
        window.location.href = "home.html";
    }
    else {
        window.alert("Invalid User ID or password.");
        return;
    }
}

window.onload = initLogin
