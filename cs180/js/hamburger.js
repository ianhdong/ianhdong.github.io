document.addEventListener("DOMContentLoaded", function () {
    // Fetch the hamburger.html file and inject it into the body
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/cs180/hamburger.html", true); // Adjust the path to where hamburger.html is located

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Inject the HTML into the page
            document.body.insertAdjacentHTML('afterbegin', xhr.responseText);

            // Initialize the hamburger toggle functionality
            var hamburger = document.getElementById("hamburger");
            var sidePanel = document.getElementById("side-panel");
            var content = document.getElementById("content"); // Assuming content has an id of 'content'

            hamburger.addEventListener("click", function () {
                hamburger.classList.toggle("active");
                sidePanel.classList.toggle("show");

                // Check if the side panel is open and adjust content
                if (sidePanel.classList.contains("show")) {
                    content.style.marginLeft = "250px"; // Shift content to the right
                } else {
                    content.style.marginLeft = "auto"; // Center content again
                }
            });
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.error("Error fetching hamburger.html. Status: " + xhr.status);
        }
    };

    xhr.send();
});
