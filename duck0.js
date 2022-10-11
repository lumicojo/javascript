document.addEventListener('DOMContentLoaded', fetchAllCharacters)
function fetchAllCharacters(){
    // grab character bar div
    // fetch characters endpoint
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(data => renderCharacters(data))
    // create span tag for each character
    // add name to each span tag
    // append the pan tag to the character-bar div
}
function renderCharacters(character){
    const characterBarDiv = document.getElementById('character-bar')
    character.forEach((character) => {
        const characterSpan = document.createElement('span')
        characterSpan.textContent = character.name
        characterSpan.dataset.id = character.id
        characterSpan.addEventListener('click', showCharacterInfo)
        characterBarDiv.append(characterSpan)
        //console.log(`span`, characterSpan)
    })
}
function showCharacterInfo(e) {
    fetch(`http://localhost:3000/characters/${e.target.dataset.id}`)
    .then(resp => resp.json())
    .then(data => renderCharactersInfo(data))
}
function renderCharactersInfo(character) {
    const characterName = document.getElementById(`name`)
    characterName.textContent = character.name
    const characterImage = document.getElementById(`image`)
    characterImage.src = character.image
    const characterVotes = document.getElementById(`vote-count`)
        characterVotes.textContent = character.votes
    }
const votesForm = document.getElementById('votes-form')
    votesForm.addEventListener('submit', countVotes)
    function countVotes(e) {
        e.preventDefault()
        const characterVotes = document.getElementById('votes')
        const characterVoteCount = document.getElementById('vote-count')
    characterVoteCount.textContent = parseInt(characterVotes.value) + parseInt(characterVoteCount.textContent)
    // console.log('votes: ', characterVotes)
    // console.log("votes submitted")
}



