class Company {
    
    static all = []
    constructor(data) {
        this.data = data
        this.watches = this.data.watches.map(watch => new Watch(watch))
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { logo, description, name} = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
           <img src=${logo} alt=${name} width="250" height="200"/>
           <p>${description}<p>
           <div class="container"></div>
        </div>
        <button id="goBack">Return to Main</button>
        `
        document.getElementById("goBack").addEventListener("click", Company.renderIndex)
        this.watches.forEach(watch => watch.render())
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
       const main = document.getElementById("main")
       main.innerHTML = ""
       const companyContainer = document.createElement("div")
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
            Company.all = []
            companies.forEach(company => Company.addCompany(company))
            this.renderIndex()
        })
    }

}