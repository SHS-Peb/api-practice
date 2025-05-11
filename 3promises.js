const promise1 = fetch('https://api1.com'); // resolves
const promise2 = fetch('https://api2.com'); // rejects
const promise3 = fetch('https://api3.com'); // resolves

// Using Promise.all:
Promise.all([promise1, promise2, promise3])
  .then(responses => {
    console.log(responses); // will never get here because promise2 rejects
  })
  .catch(error => {
    console.log('Error:', error); // catches error from promise2 rejection
  });

// Using Promise.allSettled:
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'rejected') {
        console.log('Promise rejected:', result.reason);
      } else {
        console.log('Promise resolved:', result.value);
      }
    });
  });