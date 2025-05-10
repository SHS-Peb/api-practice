function submitUser () {
    fetch('https://example.com/api/submit', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Shan',
            email: 'shan@example.com' 
        })        
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('User submitted successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}


//------------------------------------------------------

fetch('https://example.com/api/submit', {
//Questions for You:
    
//What do you think this line is doing?
    
method: 'POST',
//Questions for You:
    
//What do you think this line is doing?
    
headers: {
    'Content-Type': 'application/json'
  },
//Questions for You:
    
//What do you think this line is doing?
    
body: JSON.stringify({
    name: 'Shan',
    email: 'shan@example.com'
  })})
//Questions for You:
    
//Why do we need to use JSON.stringify() when sending data in the body of a POST request?
//What would happen if we didn't use JSON.stringify() and tried to send a JavaScript object directly in the body of the request?