class ApiService {

    constructor(api){
        this.api = api
    }

    getCompanies = () => fetch(this.api + "/companies").then(res => res.json())

    findOrCreateUser = (username) => {
        return fetch(this.api +"/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username}),
        })
        .then(response => response.json())
    }

}
