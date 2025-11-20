
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("pwd");
const modal = document.querySelector(".modal");
const retryBtn = modal.querySelector("button");


function hideModal() {
    modal.style.opacity = 0;
    setTimeout(() => { modal.style.display = "none"; }, 300);
}

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

let toggleNavStatus = false;

let toggleNav =function(){
    const getSidebar = document.querySelector(".nav-sidebar");
    const getSidebarUl = document.querySelector(".nav-sidebar ul");
    const getSidebarTitle = document.querySelector(".nav-sidebar span");
    const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false){
      getSidebarUl.style.visibility = "visible";
      getSidebar.style.width = "272px";
      getSidebarTitle.style.opacity = "0.5";

      let arrayLength = getSidebarLinks.length;
      for(let i = 0; i < arrayLength; i++){
        getSidebarLinks[i].style.opacity = "1";
      }

      
      toggleNavStatus = true;
    } else if(toggleNavStatus === true){
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0.5";
        
        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}
