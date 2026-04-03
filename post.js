document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("postForm");

  form.addEventListener("submit", function (e)  {
    e.preventDefault();

    const post = {  
      id: Date.now(),
      type: document.getElementById("postType").value,
      name: document.getElementById("itemName").value.trim(),
      location: document.getElementById("location").value.trim(),
      date: document.getElementById("date").value,
      description: document.getElementById("description").value.trim(),
      status: "Active"
    };
      
    if (!post.name || !post.location) {
      alert("Please fill in the item name and location.");
      return;
    }


    const posts = JSON.parse(localStorage.getItem(lostandFoundPosts")) || [];
    posts.unshift(post);
    localStorage.setItem("lostAndFoundPosts", JSON.stringify(post));

    alert("Your " + post.type.toLowerCase() + "post has been created.");
    window.location.href = "Home.html";
  });
});
