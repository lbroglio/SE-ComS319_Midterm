function loadContent(data){
    const pageCheck = document.getElementById("pg1")
    let content;

    //Set what page of content
    if(pageCheck === null){
        content = data["Page2"]
    }
    else{
        content = data["Page1"]
    }

    //For every card
    let cards = document.getElementsByClassName("card-body")
    for(let i = 0; i < cards.length; i++){
        //Create new paragraph elements to hold the information
        const name = document.createElement("p")
        const rYear = document.createElement("p")
        const des = document.createElement("p")
        
        //Add the text nodes to the paragraphs
        name.appendChild(document.createTextNode("Name: " + content[i]["name"]))
        rYear.appendChild(document.createTextNode("Release Year: " + content[i]["release_year"]))
        des.appendChild(document.createTextNode(content[i]["description"]))

        //Add the correct class
        name.classList.add("card-text")
        rYear.classList.add("card-text")
        des.classList.add("card-text")

        //Add them to the document
        cards[i].appendChild(name)
        cards[i].appendChild(rYear)
        cards[i].appendChild(des)


    }
}

fetch('./data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    loadContent(data);
})
.catch(function (err) {
    console.log('error:' + err);
})