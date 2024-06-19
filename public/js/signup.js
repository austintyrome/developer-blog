async function signup(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value
    const email = document.querySelector("#email-login").value
    const password = document.querySelector("#password-login").value
     const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify({
            username, email, password
        }),
     })
if (response.ok) {
    document.location.replace("/")
} else {
    alert("Error please try again")
    console.log(response);
}
}

document.querySelector(".sign-up").addEventListener("submit", signup)