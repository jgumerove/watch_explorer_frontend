const api = "http://localhost:3000/companies"


function getCompanies() {
    fetch(api)
    .then(response => response.json())
    .then(companies => {
        companies.forEach(company => {
            const companyMarkup = `
            <div data-id=${company.id}>
              <h3>${company.name}</h3>
            </div>
            <br><br>
            `
            document.querySelector("#company-container").innerHTML += companyMarkup
        })
    });   
}

getCompanies()
