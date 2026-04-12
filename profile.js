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

function setupProfilePage(){
    checkLogin();
    updateNavigation();
    loadUserInfo();

    const logoutBtn = document.getElementById("logoutButton");
    if(logoutBtn){
        logoutBtn.addEventListener("click", logout);
    }

}

document.addEventListener("DOMContentLoaded", setupProfilePage);
