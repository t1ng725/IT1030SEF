function getAllPosts() {
    return (JSON.parse(localStorage.getItem("lostAndFoundPosts")) || []);
}

function displayPosts(filteredPosts = null){
    const postsContainer = document.getElementById("postsContainer");

    let posts = (filteredPosts || getAllPosts());

    posts.sort(function(a, b){
        return b.id - a.id;
    });

    postsContainer.innerHTML = "";

    if(posts.length === 0){
        postsContainer.innerHTML = "<p>No items found</p>";
        return;
    }

    posts.forEach(function(post){
        const postCard = document.createElement("div");
        postCard.className = "post-card";

        const image = post.image 
            ? '<img src="' + post.image + '" alt="Item image">' 
            : '<div class="no-image">No image provided</div>';

        const type = post.type.toLowerCase() === "lost" ? "lost" : "found";

        postCard.innerHTML = image +
         '<div class="card-content">' +
                '<p class="post-type ' + type + '">' + post.type + ' Item</p>' +
                '<h3>' + post.name + '</h3>' +
                '<div class="info">' +
                    '<p><strong>Location:</strong> ' + post.location + '</p>' +
                    '<p><strong>Date:</strong> ' + post.date + '</p>' +
                    (post.contact ? '<p class="contact"><strong>Contact:</strong> ' + post.contact + '</p>' : '') +
                '</div>' +
                '<p class="description">' + (post.description || 'No description provided.') + '</p>' +
                '<p>Posted by: ' + post.userId + '</p>' +
            '</div>';

        postsContainer.append(postCard);
    }  
    );
}

function filterAndDisplay(){
    const query = (document.getElementById("searchInput").value || "").toLowerCase().trim();
    const typeFilter = document.getElementById("typeSelect").value;

    let posts = getAllPosts();

    if(query){
        posts = posts.filter(function(post){
            return post.name.toLowerCase().includes(query) ||
            post.location.toLowerCase().includes(query) ||
            (post.description || "").toLowerCase().includes(query);
        });
    }

    if  (typeFilter !== "all"){
        posts = posts.filter(function(post){
            return post.type === typeFilter;
        });
    }
    displayPosts(posts);
}

function resetFilters(){
    document.getElementById("searchInput").value = "";
    document.getElementById("typeSelect").value = "all";
    displayPosts();
}

function setupHomePage(){
    displayPosts();
    updateNavigation();

    const searchInput = document.getElementById("searchInput");
    const typeSelect = document.getElementById("typeSelect");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetButton");

    searchInput.addEventListener("input", filterAndDisplay);
    typeSelect.addEventListener("change", filterAndDisplay);
    searchButton.addEventListener("click", filterAndDisplay);
    resetButton.addEventListener("click", resetFilters);

}

document.addEventListener("DOMContentLoaded", setupHomePage);
