const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");



// Hide modal on page load
document.querySelector(".modal").style.display = "none";

function validateLogin(event) {
    event.preventDefault();  // Stop form submission

    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pwd").value.trim();

    // PROMISE for credentials validation
    const loginPromise = new Promise((resolve, reject) => {
        if (username === "admin" && password === "1234") {
            resolve();
        } else {
            reject();
        }
    });

    loginPromise
        .then(() => {
            // Redirect on success
            window.location.href = "index.html";
        })
        .catch(() => {
            // Show modal on failure
            showModal();
        });
}

function showModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";    // FLEX = required for centering
}

function dismissModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
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
