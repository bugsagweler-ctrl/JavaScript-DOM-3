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
function validateCredentials(username, password) {
  return new Promise((resolve, reject) => {

    // Simulated database user
    const storedUser = {
      username: "admin",
      password: "1234"
    };

    setTimeout(() => {
      if (username === storedUser.username && password === storedUser.password) {
        resolve("Login successful!");
      } else {
        reject("Incorrect username or password.");
      }
    }, 5000); // simulating delay

  });
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  validateCredentials(username, password)
    .then((message) => {
      console.log(message);
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      showModal(error); // your modal popup
    });
});


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
