const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");

function showModalPromise() {
    return new Promise((resolve) => {
        const modal = document.getElementById("errorModal");
        const retryBtn = document.getElementById("retryBtn");

        // Show modal
        modal.style.display = "flex";

        // When TRY AGAIN is clicked → hide modal + resolve Promise
        retryBtn.onclick = () => {
            modal.style.display = "none";
            resolve("closed");
        };
    });
}

// Hide modal on page load
document.querySelector(".modal").style.display = "none";

function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("uname").value;
    const password = document.getElementById("pwd").value;

    const loginPromise = new Promise((resolve, reject) => {
        if (username === "admin" && password === "1234") {
            resolve();
        } else {
            reject();
        }
    });

    loginPromise
        .then(() => {
            window.location.href = "index.html"; // success
        })
        .catch(() => {
            // Show modal as a promise
            showModalPromise().then(() => {
                console.log("User closed modal. Ready to try again.");
            });
        });
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
