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
      
