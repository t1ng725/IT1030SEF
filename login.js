function initDefaultUsers(){
    if(localStorage.getItem("users")){
        return;
    }

    const defaultUsers = {
            "s111" : {password: "Abcd1234"},
            's222' : {password: "Password123" }
        };
    localStorage.setItem("users", JSON.stringify(defaultUsers));

}

function initLogin(event){
    event.preventDefault();

    const uid = document.getElementById('loginUid').value.trim();
    const pw = document.getElementById('loginPw').value;

    if (uid === "" || pw === ""){
        window.alert("Please input User ID or password.");
        return;
    }

    const usersStr = localStorage.getItem('users');
    let users = {};
    
    if (usersStr) {
        users = JSON.parse(usersStr);
    } 
    
    if (users[uid] && users[uid].password === pw){
        localStorage.setItem("currentUser", JSON.stringify({uid : uid}));
        window.location.href = "index.html";
    }
    else{
        window.alert("Invalid User ID or password.");
    }
}

document.addEventListener('DOMContentLoaded', initDefaultUsers);
document.getElementById('loginForm').addEventListener('submit', initLogin);
