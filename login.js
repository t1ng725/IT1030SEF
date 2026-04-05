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

    var users = {
        's111':{password:"Abcd1234"},
        's222':{password:"Password123"}
    }
    if (users[uidInput] && users[uidInput].password === pwInput){
        var currentUser = {
            uid: uidInput
        }

    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    
    window.location.href = "Home.html";
    }
    else {
        window.alert("Invalid User ID or password.");
        return;
    }
}

window.onload = initLogin
