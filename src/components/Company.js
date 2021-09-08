class Company {
    
    static all = []
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)
    }



    static addCompany(company){
        new Company(company)
    }


    static getCompanies() {
        api.getCompanies().then(companies => {
            companies.forEach(company => Company.addCompany(company))
        })
    }

}