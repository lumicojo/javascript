const baseUrl = 'http://localhost:3000/'
const ducksUrl = baseUrl + 'ducks'
const newDuckForm = document.getElementById('new-duck-form')
newDuckForm.onsubmit = (e) => {
    e.preventDefault()
    let newDuck = {
        name: e.target['duck-name-input'].value,
        img_url: e.target["duck-image-input"].value,
        likes: 0,
    }
     //add image from form when submitted
     renderingDuckNav(newDuck)
     renderDuckDetails(newDuck)
}
function getDucks() {
    fetch(ducksUrl)
    .then((response) => response.json())
    .then((ducksData) => renderDucks(ducksData))
}
getDucks()
function renderDucks(ducksData){
    console.log(ducksData)
    ducksData.forEach(duck => renderingDuckNav(duck))
}
//Add images to page
function renderingDuckNav( duck ) {
    console.log(duck)
    const duckNav = document.getElementById('duck-nav')
    const duckImg = document.createElement('img')
    duckImg.src = duck.img_url
    duckNav.appendChild(duckImg)
    duckImg.onclick = ()=> renderDuckDetails(duck)
    }
function renderDuckDetails (duck) {
    const duckName = document.getElementById('duck-display-name')
    duckName.textContent - duck.name
    const duckImg = document.getElementById('duck-display-image')
    duckImg.src = duck.img_url
    const duckLikesButton = document.getElementById('duck-display-likes')
    duckLikesButton.textContent = duck.likes
    //Event Listener that adds 1 to likes on click
    duckLikesButton.onclick = () => {
        duck.likes = duck.likes + 1
        renderDuckDetails(duck)
    }
}



