class Company {
    
    static all = []
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
    }



    static addCompany(company){
        new Company(company)
    }

   static renderIndex(){
       const companyContainer = document.createElement("div")
       companyContainer.classList.add("company-container")
       document.getElementById("main").appendChild(companyContainer)
   }
    

    static getCompanies() {
        api.getCompanies().then(companies => {
            companies.forEach(company => Company.addCompany(company))
            this.renderIndex()
        })
    }

}