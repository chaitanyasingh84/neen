
const adminUser = document.getElementById("username");
const adminPassword2 = document.getElementById("password");

//Login function
function login(){
    userText = adminUser.value;
    userPassword = adminPassword2.value;

    if(userText == "rick" && userPassword == "roll"){
        localStorage.setItem('loggedIn', true);
        console.log("Login successful");
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Incorrect username or password';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    console.log("User logged out.");
    window.location.href = 'index.html';
}

// Check if admin is logged in when loading dashboard
if (window.location.pathname.includes('dashboard.html')) {
    if (!localStorage.getItem('loggedIn')) {
        console.log("Redirecting to login page - user not logged in.");
        window.location.href = 'index.html';
    }
}
