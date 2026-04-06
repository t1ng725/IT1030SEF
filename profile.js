function loadUserInfo(){
    var storedUser = localStorage.getItem("currentUser")
    if (storedUser){
        var currentUser = JSON.parse(storedUser)
        document.getElementById("displayUserID").textContent = currentUser.uid
    }
    else{
        document.getElementById("displayUserID").textContent = "Not logged in"
    }
}

function Logout(){
    var logoutButton = document.getElementById("logoutButton")
    if(logoutButton){
        logoutButton.onclick = function(){
            localStorage.removeItem("currentUser")
            window.alert("You have been logged out.")
            window.location.href = "login.html"
        }
    }
}

window.onload = function(){
    loadUserInfo();
    Logout()
}