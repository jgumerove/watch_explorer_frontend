class Company {
    
    static all = []
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
    }

    renderCard = () => {
        const { name, logo, id } = this.data
        document.querySelector(".company-container").innerHTML += `
        <div class="company-card" data-id=${id}>
          <p class="title">${name}</p>
          <img src=${logo} alt=${name} width="250" height="200"/>
        </div>`
    }



    static addCompany(company){
        new Company(company)
    }

   static renderIndex = () => {
       const companyContainer = document.createElement("div")
       companyContainer.classList.add("company-container")
       document.getElementById("main").appendChild(companyContainer)
       this.all.forEach(company => company.renderCard())
       companyContainer.addEventListener("click", this.handleIndexClick)
   }

   static handleIndexClick = (e) => {
       if (e.target.tagName == "IMG") {
           const id = e.target.closest(".company-card").dataset.id
           console.log(id)
       }
   }
    

    static getCompanies = () => {
        api.getCompanies().then(companies => {
            companies.forEach(company => Company.addCompany(company))
            this.renderIndex()
        })
    }

}