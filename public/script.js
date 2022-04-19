/*------------------auth status------------------------*/
let loggedIn = document.getElementById("loggedIn");


auth.onAuthStateChanged(function(user) {
    if (user) {
        loggedInObjects();
        // sendData();
    } else {
        loggedOutObjects();
    }
})

// changes made to webpage when user logs in
function loggedInObjects() {
    let signUp = document.getElementById("signUp");
    signUp.style.display = "none";
    let signIn = document.getElementById("signIn");
    signIn.style.display = "none";
    let signOut = document.getElementById("signOut");
    signOut.style.display = "inline-block";
    let loggedIn = document.getElementById("loggedIn");
    loggedIn.style.display = "inline-block";
    let message = document.getElementById("message");
    message.style.display = "flex";
    let user = document.getElementById("userInfo");
    user.style.display = "block";
    var emailShow = document.getElementById("email");
    var passwordShow = document.getElementById("password");
    emailShow.style.display = "none";
    passwordShow.style.display = "none";
    // tells user they are logged in
    var thisUser = firebase.auth().currentUser;
    let html = `<p> You are logged in as: <strong> ${thisUser.email}</strong></p>`;
    loggedIn.innerHTML = html;
}

function loggedOutObjects() {
    let signUp = document.getElementById("signUp");
    signUp.style.display = "inline-block";
    let signIn = document.getElementById("signIn");
    signIn.style.display = "inline-block";
    let signOut = document.getElementById("signOut");
    signOut.style.display = "none";
    let loggedIn = document.getElementById("loggedIn");
    loggedIn.style.display = "none";
    message.style.display = "none";
    let user = document.getElementById("userInfo");
    user.style.display = "none";
    loggedIn.innerHTML = "";
}

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed up");
}

function signOut() {
    const promise = auth.signOut();
    promise.catch(e => alert(e.message));
    alert("Signed out")

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    email.style.display = "inline-block";
    password.style.display = "inline-block";
    let signUp = document.getElementById("signUp");
    let signIn = document.getElementById("signIn");
    let signOut = document.getElementById("signOut");
    signUp.style.display = "inline-block";
    signIn.style.display = "inline-block";
    signOut.style.display = "none";
}

function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed in")
    email.style.display = "none";
    password.style.display = "none";
}