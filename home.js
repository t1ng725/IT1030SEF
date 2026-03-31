window.onload = function() {
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');

    if (searchButton) {
        searchButton.onclick = function() {
            var query = searchInput.value;
            if (query.trim() === "") {
                alert("Please enter keywords to search.");
            } else {
                alert("Searching for: " + query);
            }
        };
    }

    if (resetButton) {
        resetButton.onclick = function() {
            if (searchInput) searchInput.value = "";
            if (categorySelect) categorySelect.selectedIndex = 0;
            
            console.log("Filters reset successfully");
        };
    }
};</div>
    <script src="home.js"></script>
</body>
</html>
