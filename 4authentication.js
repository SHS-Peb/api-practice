fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY' //authorisation in the header to communicate your key
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log('Error:', error);
});