function directToLogin(){
    window.location.href = "login.html";
}

function logout(){
    localStorage.removeItem("currentUser");
    window.alert("You have been logged out.");
    window.location.href = "index.html";
}

function checklogin(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        alert("Please log in first.");
        directToLogin();
    }
}

function updateNavigation(){
    const loginButton = document.querySelector(".login-btn");
    if(!loginButton) return;
    
    const currentUserStr = localStorage.getItem("currentUser");
    const currentUser = (currentUserStr ? JSON.parse(currentUserStr) : null);

    if(currentUser){
        loginButton.textContent = "Logout";
        loginButton.onclick = logout;
    }
    else{
        loginButton.textContent = "Login";
        loginButton.onclick = directToLogin;
    }

}
