class Watch {

    constructor(data){
        this.data = data
    }

    render = () => {
        const { imageUrl, collection, year, watchType, bandMaterial, price, movement } = this.data
        document.querySelector(".container").innerHTML += `
        <div class="card">
          <img src=${imageUrl} alt=${collection} width="200" height="250"/>
          <h1>${collection}<h1>
        </div>
        `
    }

}