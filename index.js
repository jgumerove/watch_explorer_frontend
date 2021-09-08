const api = "http://localhost:3000/companies"

fetch(api)
.then(response => response.json())
.then(companies => console.log(companies))
