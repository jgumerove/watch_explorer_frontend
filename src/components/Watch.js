class Watch {

    constructor(data){
        this.data = data
    }

    render = () => {
        const { imageUrl, collection, year, watchType, bandMaterial, price, movement, username } = this.data
        document.querySelector(".container").innerHTML += `
        <div class="card">
          <img src=${imageUrl} alt=${collection} width="200" height="250"/>
          <p>Collection: ${collection}</p>
          <p>Year: ${year}</p>
          <p>Type: ${watchType}</p>
          <p>Band Material: ${bandMaterial}</p>
          <p>Price: $ ${price}</p>
          <p>Movement: ${movement}</p>
          <p>Owner: ${username}</p>
        </div>
        `
    }

}