class Company {
    
    static all = []
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { logo, description, name} = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
           <img src=${logo} alt=${name} width="250" height="200"/>
           <p>${description}<p>
        </div>
        <button id="goBack">Return to Main</button>
        `
        document.getElementById("goBack").addEventListener("click", Company.renderIndex)
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
       const main = document.getElementById("main")
       main.innerHTML = ""
       companyContainer.classList.add("company-container")
       main.appendChild(companyContainer)
       this.all.forEach(company => company.renderCard())
       companyContainer.addEventListener("click", this.handleIndexClick)
   }

   static find = (id) => this.all.find(company => company.data.id == id)

   static handleIndexClick = (e) => {
       if (e.target.tagName == "IMG") {
           const id = e.target.closest(".company-card").dataset.id
           this.find(id).renderShow()
       }
   }
    

    static getCompanies = () => {
        api.getCompanies().then(companies => {
            companies.forEach(company => Company.addCompany(company))
            this.renderIndex()
        })
    }

}