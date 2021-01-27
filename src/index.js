console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

function fetchImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => displayImages(json.message))
}


function displayImages(images) {
  let container = document.getElementById("dog-image-container")
  images.forEach(function(i) {
    let node = document.createElement("img")
    node.src = i
    container.appendChild(node)
  })
}
window.onload = function() {
  fetchImages()
  fetchBreeds()

}

function fetchBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => displayBreeds(Object.keys(json.message)))
}

function displayBreeds(breeds) {
  let list = document.getElementById("dog-breeds")
  let filter = document.getElementById("breed-dropdown")
  filter.addEventListener("change", function(){
    filteredBreeds = breeds.filter(function(breed) {
      return breed.charAt(0) == filter.value
    })
    list.innerHTML = ''
    filteredBreeds.forEach(function(b){
      list.innerHTML += `<li>${b}</li>`
    })
    let lis = document.querySelectorAll("#dog-breeds li")
    lis.forEach(function(li){
      li.addEventListener('click', function(){
        li.style.color="blue"
      })
    })
  })
}


