function displayRecords(){
  const recordsDiv = document.getElementById("records");
  if (!recordsDiv) return;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return;

  let posts = (JSON.parse(localStorage.getItem("lostAndFoundPosts")) || []);
  const userPosts = posts.filter(function(post){
    return post.userId === currentUser.uid;
  });

  recordsDiv.innerHTML = "";

  if(userPosts.length === 0){
    recordsDiv.innerHTML = "<p>No posts yet.</p>";
    return;
  }

  userPosts.forEach(function(post){
    const item = document.createElement("div");
    item.className = "record-item";
    item.innerHTML = `
      <strong>${post.type}:</strong> ${post.name}<br>
      <b>Location:</b> ${post.location}<br>
      <b>Date:</b> ${post.date}<br>
      <b>Description:</b> ${post.description}<br>
      ${post.contact ? `<b>Contact:</b> ${post.contact}<br>` : ''}
      <button onclick="editRecord('${post.id}')">Edit</button>
      <button onclick="deleteRecord('${post.id}')">Delete</button>
    `;
    recordsDiv.append(item);
  });
}

function editRecord(postId){
  postId = Number(postId);

  let posts = (JSON.parse(localStorage.getItem("lostAndFoundPosts")) || []);
  const index = posts.findIndex(function(post){
    return post.id === postId;
  });
  if (index === -1) return;

  const post = posts[index];

  const newName = window.prompt("Edit item name:", post.name);
  const newLocation = window.prompt("Edit location:", post.location);
  const newDate = window.prompt("Edit date (YYYY-MM-DD):", post.date);
  const newDescription = window.prompt("Edit description:", post.description);
  const newContact = window.prompt("Edit contact:", post.contact);

  if(newName && newLocation && newDate && newDescription){
    posts[index] = {
      ...post,
      name: newName,
      location: newLocation,
      date: newDate,
      description: newDescription,
      contact: newContact
    };
    localStorage.setItem("lostAndFoundPosts", JSON.stringify(posts));
    displayRecords();
    window.alert("Record updated.");
  }
}

function deleteRecord(postId){
  postId = Number(postId);

  if (!confirm("Delete this record permanently?")) return;

  let posts = (JSON.parse(localStorage.getItem("lostAndFoundPosts")) || []);
  const index = posts.findIndex(function(post){
    return post.id === postId;
  });
  if (index === -1) return;

  posts.splice(index, 1);
  localStorage.setItem("lostAndFoundPosts", JSON.stringify(posts));
  displayRecords();
  window.alert("Record deleted.");
}

function setupPRPage(){
  checkLogin();
  updateNavigation();
  displayRecords();
}

document.addEventListener("DOMContentLoaded", setupPRPage);
