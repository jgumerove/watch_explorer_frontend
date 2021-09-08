const api = "http://localhost:3000/companies"


function getApi() {
    fetch(api)
    .then(response => response.json())
    .then(companies => console.log(companies));   
}

getApi()
