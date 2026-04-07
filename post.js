document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("postForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const post = {  
      id: Date.now(),
      type: document.getElementById("postType").value,
      name: document.getElementById("ItemName").value.trim(),  
      location: document.getElementById("Location").value.trim(),
      date: document.getElementById("Date").value,
      description: document.getElementById("Description").value.trim(),
      status: "Active"
    };
      
    if (!post.name || !post.location) {
      alert("Please fill in the item name and location.");
      return;
    }

    
    const posts = JSON.parse(localStorage.getItem("lostAndFoundPosts")) || [];
    posts.unshift(post);

   
    localStorage.setItem("lostAndFoundPosts", JSON.stringify(posts));

    alert("Your " + post.type.toLowerCase() + " post has been created.");
    window.location.href = "index.html";
  });
});
