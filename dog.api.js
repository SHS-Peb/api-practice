getDog () {
    fetch('https://dog.ceo/api/breeds/image/random') 
    .then(response => response.json) 
    .then(data => { let img = document.getElementById("dogImg") 
        img.src = data.message }) 
        .catch(error => { console.log(error, "something went wrong") 
        }) 
    }