
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");
const retryBtn = modal.querySelector("button");



// Hide modal with fade
function hideModal() {
    modal.style.opacity = 0;
    setTimeout(() => { modal.style.display = "none"; }, 300);
}

// Retry button closes modal
retryBtn.addEventListener("click", hideModal);


function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
        const validUsername = "admin";
        const validPassword = "1234";

        setTimeout(() => {
            if(username === validUsername && password === validPassword) {
                resolve("YOU LOGIN IS SUCCESSFUL");
            } else {
                reject(showModal);
            }
        }, 200);
    });
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    validateCredentials(username, password)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(() => {
            showModal();
        });
});

