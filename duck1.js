function getData() {
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(data => renderCharacters(data))
}    
getData();
function renderCharacters(char) {
    char.forEach(character => renderData(character))
}
function renderData(char) {
    //console.log(char)
    // Create span` tag with the character's name and add it the `div#character-bar`
    const divBar = document.querySelector('#character-bar')
    const spanLoc = document.createElement('span')
     //console.log(span)
    spanLoc.textContent = char.name
    divBar.append(spanLoc)
    // When the character in the div#character-bar is clicked, display the character's details in char
    const voteCount = document.querySelector('#vote-count')
    spanLoc.onclick = () => {
    
        const image = document.querySelector('#image')
        image.src = char.image
        const name = document.querySelector('#name')
        name.textContent = char.name
        voteCount.textContent = char.votes
        console.log(char)
    }

    const voteForm = document.querySelector('#votes-form') 
    voteForm.onsubmit = (e) => {
        e.preventDefault()
        const votes = document.querySelector('#votes') //user input elem

        console.log(votes.value)
       // const newVotes = parseInt(votes.value)  + char.votes
        //  add the input field votes to the total votes 
        
        const newVotes = parseInt(votes.value) + parseInt(voteCount.textContent) 
        voteCount.textContent = newVotes
       
    }
}

