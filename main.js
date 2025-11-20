// ===========================
// LOGIN FORM & MODAL
// ===========================
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");
const retryBtn = modal.querySelector("button");

// Hide modal by default
modal.style.display = "none";
modal.style.opacity = 0;
modal.style.transition = "opacity 0.3s ease-in-out";

// Show modal with fade
function showModal() {
    modal.style.display = "flex";
    setTimeout(() => { modal.style.opacity = 1; }, 10);
}

// Hide modal with fade
function hideModal() {
    modal.style.opacity = 0;
    setTimeout(() => { modal.style.display = "none"; }, 300);
}

// Retry button closes modal
retryBtn.addEventListener("click", hideModal);

// Validate credentials using Promise
function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
        const validUsername = "admin";
        const validPassword = "1234";

        setTimeout(() => { // simulate async check
            if(username === validUsername && password === validPassword) {
                resolve();
            } else {
                reject();
            }
        }, 200);
    });
}

// Handle form submit
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    validateCredentials(username, password)
        .then(() => {
            // Correct → redirect to index.html
            window.location.href = "index.html";
        })
        .catch(() => {
            // Incorrect → show modal
            showModal();
        });
});


// ===========================
// SIDEBAR NAVIGATION TOGGLE
// ===========================
const sidebar = document.querySelector(".nav-sidebar");
const toggleBtn = document.querySelector(".btn-toggle-nav");
const sidebarLinks = sidebar.querySelectorAll("ul li span, ul li a");
let sidebarOpen = false;

function toggleNav() {
    sidebarOpen = !sidebarOpen;

    if(sidebarOpen) {
        sidebar.style.width = "272px";
        toggleBtn.style.transform = "rotate(90deg)";
        sidebarLinks.forEach(link => {
            link.style.opacity = "1";
            link.style.visibility = "visible";
            link.style.transition = "opacity 0.5s ease-in-out";
        });
    } else {
        sidebar.style.width = "50px";
        toggleBtn.style.transform = "rotate(0deg)";
        sidebarLinks.forEach(link => {
            link.style.opacity = "0";
            link.style.visibility = "hidden";
            link.style.transition = "opacity 0.5s ease-in-out";
        });
    }
}

// Attach toggle function to button
if(toggleBtn){
    toggleBtn.addEventListener("click", toggleNav);
}
