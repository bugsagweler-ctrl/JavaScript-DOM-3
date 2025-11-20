/**************************************
 * LOGIN VALIDATION + MODAL MANAGEMENT
 **************************************/

// Hide modal when page loads
window.onload = function () {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.style.display = "none";
    }
};

// Validate Login
function validateLogin() {
    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pwd").value.trim();
    document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    validateLogin();
});

    // Hardcoded credentials for demo
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        // Redirect to homepage
        window.location.href = "index.html";
    } else {
        showModal("The LOGIN are incorrect");
    }
}

// Show modal
function showModal() {
    const modal = document.querySelector(".modal");
    if (modal) modal.style.display = "block";
}

// Hide modal
function dismissModal() {
    const modal = document.querySelector(".modal");
    if (modal) modal.style.display = "none";
}


/**************************************
 * SIDEBAR NAVIGATION TOGGLE
 **************************************/

let navOpen = false;

function toggleNav() {
    const sidebar = document.querySelector(".nav-sidebar");
    const toggleBtn = document.querySelector(".btn-toggle-nav");
    const links = document.querySelector(".nav-sidebar ul");

    if (!sidebar || !toggleBtn) return;

    if (!navOpen) {
        // Expand Sidebar
        sidebar.style.width = "272px";
        links.style.visibility = "visible";
        toggleBtn.style.transform = "rotate(90deg)";

        // Fade in links
        document.querySelectorAll(".nav-sidebar ul li *").forEach(el => {
            el.style.opacity = "1";
        });

        navOpen = true;

    } else {
        // Collapse Sidebar
        sidebar.style.width = "50px";
        links.style.visibility = "hidden";
        toggleBtn.style.transform = "rotate(0deg)";

        // Fade out links
        document.querySelectorAll(".nav-sidebar ul li *").forEach(el => {
            el.style.opacity = "0";
        });

        navOpen = false;
    }
}
