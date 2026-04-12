function savePost(imageData = null){
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const post = {
        id: Date.now(),
        userId: currentUser.uid,
        type: document.getElementById("postType").value,
        name: document.getElementById("ItemName").value.trim(),
        location: document.getElementById("Location").value.trim(),
        date: document.getElementById("Date").value,
        description: document.getElementById("Description").value.trim(),
        contact: document.getElementById("contact").value.trim() || null,
        image: imageData,
        status: "Active"
    };

  let posts = JSON.parse(localStorage.getItem("lostAndFoundPosts")) || [];
  posts.unshift(post);
  localStorage.setItem("lostAndFoundPosts", JSON.stringify(posts));

  window.alert("Your " + post.type.toLowerCase() + " post has been created.");
  window.location.href = "index.html";
  
}

function readFile(event){
  const imageData = event.target.result;
  savePost(imageData);
}

function initPost(event){
  event.preventDefault();

  const name = document.getElementById("ItemName").value.trim();
  const location = document.getElementById("Location").value.trim();

  if(!name || !location){
    window.alert("Please fill in the item name and location.");
    return;
  }

  const file = document.getElementById("itemImage");

  if(file.files && file.files[0]){
    if(file.files[0].size > 4 * 1024 * 1024){
      window.alert("Please select an image under 4MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = readFile;
    reader.readAsDataURL(file.files[0]);
  }
  else{
    savePost();
  }
}

function setupPostPage(){
  checkLogin();
  updateNavigation();

  const postForm = document.getElementById("postForm");
  if(postForm){
    postForm.addEventListener("submit", initPost);
  }
}

document.addEventListener("DOMContentLoaded", setupPostPage);
