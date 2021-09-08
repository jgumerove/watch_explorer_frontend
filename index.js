const api = "http://localhost:3000/companies"

console.log(fetch(api)
.then(response => response.json()))
