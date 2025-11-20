const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");



modal.style.display = "none";



function validateCredentials(username, password) {
  return new Promise((resolve, reject) => {

    
    const correctUser = "admin";
    const correctPass = "1234";

    
    setTimeout(() => {
      if (username === correctUser && password === correctPass) {
        resolve("Login successful");
      } else {
        reject("Incorrect username or password");
      }
    }, 600);

  });
}


function showModal() {
  modal.style.display = "block";
}

function dismissModal() {
  modal.style.display = "none";
}


function validateLogin(event) {
  event.preventDefault(); // stops form from refreshing page

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  validateCredentials(username, password)
    .then(() => {
      window.location.href = "index.html"; // redirect on success
    })
    .catch(() => {
      showModal();   // show modal on failed login
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
