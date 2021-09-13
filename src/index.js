const api = new ApiService("http://localhost:3000")
let user 

// Company.getCompanies()
document.querySelector("form").addEventListener("submit", handleUserSubmit)

function handleUserSubmit(e){
    e.preventDefault()
    document.getElementById("main").innerHTML = ""
    api.findOrCreateUser(e.target.username.value).then(userData => {
        user = userData
        Company.getCompanies()
    })
}