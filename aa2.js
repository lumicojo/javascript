let objGlobal



const nameDisplay = document.querySelector('name')
const imgDisplay = document.querySelector('#image')
const voteCountDisplay = document.querySelector('#vote-count')  


const addVotesForm = document.querySelector("#votes-form")
const votesInputBox = document.querySelector("#votes")

const uri = 'http://localhost:3000/characters'


const characterBarContainer = document.querySelector('#character-bar')

fetch(uri)
  .then((resp) =>resp.json())
  .then((data) => {
    console.log('Success:', data)
    renderCharacterDisplay(data[0])
})
   
  data.forEach(element => {
    renderList(element)
})

  .catch((error) =>{
    console.error("Error:", error)
   })

   function renderList(characterObj){
    let characterSpanE1 = document.createElement('span')


    characterSpanE1.textContent = characterObj.name
    characterBarContainer.appendChild(characterSpanE1)

    characterSpanE1.addEventListener("click",() => {
        renderCharacterDisplay(characterObj)
    })
   }
function renderCharacterDisplay(characterObj) {
    nameDisplay.textContent = characterObj.name
    imgDisplay.src = characterObj.image
    voteCountDisplay.textContent = characterObj.votes
    objGlobal = characterObj
}
addVotesForm.addEventListener('submit', (event) => {
    event.preventDefault()

    objGlobal.votes += parseInt(votesInputBox.value)
    voteCountDisplay.textContent = objGlobal.votes
    patchRequest(objGlobal)
})