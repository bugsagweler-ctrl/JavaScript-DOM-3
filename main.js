
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");
const retryBtn = document.querySelector(".modal button"); 

//Hides the error modal using CSS transitions.
 
function hideModal() {
    if (modal) {
        modal.style.opacity = 0;
        
        setTimeout(() => { modal.style.display = "none"; }, 300);
    }
}

// Displays the error modal.
function showModal() {
    if (modal) {
        modal.style.display = "block";
        // Timeout to ensure 'display: block' has taken effect before setting opacity
        setTimeout(() => { modal.style.opacity = 1; }, 10);
    }
}


/**
 * Validates the provided credentials against hardcoded values.
 * @param {string} username - The username entered by the user.
 * @param {string} password - The password entered by the user.
 * @returns {Promise<void>} A promise that resolves on success or rejects on failure.
 */
function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
        const validUsername = "admin";
        const validPassword = "1234";

        // Simulate network latency (200ms) for a more realistic login attempt
        setTimeout(() => {
            if (username === validUsername && password === validPassword) {
                resolve();
            } else {
                reject();
            }
        }, 200);
    });
}

/**
 * Handles the login form submission and validation.
 * @param {Event} e - The form submission event.
 */
async function handleLogin(e) {
    // 1. Prevent the default form submission behavior (page reload)
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    try {
        // 2. Validate user credentials
        await validateCredentials(username, password);

        // 3. Successful login: Redirect to index.html
        window.location.href = "index.html";

    } catch (error) {
        // 4. Incorrect credentials: Display error modal
        showModal();
    }
}

// --- Login Page Initialization ---
if (loginForm && usernameInput && passwordInput && modal && retryBtn) {
    // Hide modal on initial load
    modal.style.display = "none";
    
    // Attach event listeners for login
    loginForm.addEventListener("submit", handleLogin);
    retryBtn.addEventListener("click", hideModal);
}


let navOpen = false;

/**
 * Toggles the state of the side navigation bar.
 * This function is called via onclick="toggleNav()" in the HTML.
 */
function toggleNav() {
    const sidebar = document.querySelector(".nav-sidebar");
    const toggleBtn = document.querySelector(".btn-toggle-nav");
    const linksList = document.querySelector(".nav-sidebar ul");

    // Exit if elements don't exist (e.g., running on login.html without the sidebar)
    if (!sidebar || !toggleBtn || !linksList) return; 

    if (!navOpen) {
        // --- Expand Sidebar (Closed -> Open) ---
        sidebar.style.width = "272px";
        linksList.style.visibility = "visible"; // Show the container
        toggleBtn.style.transform = "rotate(90deg)";

        // Fade in links
        // We select the links and spans (using * inside li) and set opacity
        document.querySelectorAll(".nav-sidebar ul li *").forEach(el => {
            el.style.opacity = "1";
        });

        navOpen = true;

    } else {
        // --- Collapse Sidebar (Open -> Closed) ---
        sidebar.style.width = "50px";
        toggleBtn.style.transform = "rotate(0deg)";

        // Fade out links
        document.querySelectorAll(".nav-sidebar ul li *").forEach(el => {
            el.style.opacity = "0";
        });
        
        // Hide the container after links fade out (to prevent scrollbar issues)
        // Match the timeout to your CSS transition duration if possible
        setTimeout(() => { 
            linksList.style.visibility = "hidden";
        }, 300); 

        navOpen = false;
    }
}