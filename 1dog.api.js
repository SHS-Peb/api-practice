function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        const img = document.getElementById('dogImage');
        img.src = data.message;
      })
      .catch(error => {
        console.log("Something went wrong:", error);
      });
  }
//------------------------------------------------------

function getDogImage() {
//Questions for You:

//Can you tell me in your own words what this line does?
//Why do you think we put the code inside a function instead of running it directly?

fetch('https://dog.ceo/api/breeds/image/random')
//Questions for You:

//What is fetch() doing here, in your own words?
//What do you think the string 'https://dog.ceo/api/breeds/image/random' represents?

.then(response => response.json())
//Questions for You:

//In your own words, what does .then() do here?
//What do you think response.json() is doing, and why is it needed?

.then(data => {
//Questions for You:

//What do you think the data represents here?
//Why do you think we use .then(data => {...}) to access this data?

const img = document.getElementById('dogImage');
//Questions for You:

//Can you explain what this line does in your own words?
//Why do you think we store the result of document.getElementById() in a variable (img)?

img.src = data.message; })
//Questions for You:

//What do you think this line is doing in your own words?
//Why do we need to change the src of the image element?

.catch(error => {
//Questions for You:

//Can you explain in your own words what .catch(error => {...}) is doing here?
//Why do you think we need to handle errors like this?

console.log("Something went wrong:", error);});}
//Questions for You:

//What do you think is the purpose of console.log() here?
//Why is it helpful to display the error in the console?