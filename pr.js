document.addEventListener("DOMContentLoaded", function() {
  displayRecords();
});

function displayRecords() {
  const recordsDiv = document.getElementById("records");
  let posts = JSON.parse(localStorage.getItem("lostAndFoundPosts")) || [];

  recordsDiv.innerHTML = "";

  if (posts.length === 0) {
    recordsDiv.innerHTML = "<p>No posts yet.</p>";
    return;
  }

  posts.forEach((post, index) => {
    const item = document.createElement("div");
    item.classList.add("record-item");

    item.innerHTML = `
      <strong>${post.type}: ${post.name}</strong><br>
      <p><b>Location:</b> ${post.location}</p>
      <p><b>Date:</b> ${post.date}</p>
      <p><b>Description:</b> ${post.description}</p>
      <button onclick="editRecord(${index})">Edit</button>
      <button onclick="deleteRecord(${index})">Delete</button>
    `;

    recordsDiv.appendChild(item);
  });
}

function editRecord(index) {
  let posts = JSON.parse(localStorage.getItem("lostAndFoundPosts")) || [];
  const post = posts[index];

  
  const newName = prompt("Edit item name:", post.name);
  const newLocation = prompt("Edit location:", post.location);
  const newDate = prompt("Edit date:", post.date);
  const newDescription = prompt("Edit description:", post.description);

  if (newName && newLocation && newDate && newDescription) {
    posts[index] = {
      ...post,
      name: newName,
      location: newLocation,
      date: newDate,
      description: newDescription
    };

    localStorage.setItem("lostAndFoundPosts", JSON.stringify(posts));
    displayRecords();
  } else {
    alert("Edit cancelled or incomplete.");
  }
}

function deleteRecord(index) {
  let posts = JSON.parse(localStorage.getItem("lostAndFoundPosts")) || [];
  posts.splice(index, 1);
  localStorage.setItem("lostAndFoundPosts", JSON.stringify(posts));
  displayRecords();
}
