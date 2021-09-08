class ApiService {

    constructor(api){
        this.api = api
    }

    getCompanies = () => fetch(this.api + "/companies").then(res => res.json())

}
