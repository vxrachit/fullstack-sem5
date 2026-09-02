const username = document.querySelector("#username");
const fetchBtn = document.querySelector("#fetchBtn");
const profile = document.querySelector("#profile");
fetchBtn.addEventListener('click',() => {
    console.log(username);
    console.log(username.value);
    getUser(username.value);
})

async function getUser(username){
    try{
        username = username.toLowerCase().trim();
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        document.querySelector("#status").textContent = "Loading user data..."
        displayUser(data);
        document.querySelector("#status").textContent = ""
    }
    catch(error){
        console.error("Error fetching user data:", error);
        document.querySelector("#status").textContent = "Error fetching user data."
    }
}

function displayUser(user){
    profile.innerHTML = 
    `
    <img src="${user.avatar_url}" alt="${user.name}'s avatar" width="100" height="100">
    <h1>${user.name}</h1>
    <p>Public Repos: ${user.public_repos}</p>
    `
}

