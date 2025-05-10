Quiz Four - Beginner API Concepts

Basic Concept Questions

   1. What is an API, and how would you explain it to someone non-technical?

   2. What is the purpose of using fetch() in JavaScript?

   3. Can you describe what happens step by step when you call an API using fetch()?


Code Understanding & Troubleshooting

   4. Given this snippet, what does response.json() do? Why is it important?

    fetch('https://example.com/api/data')
    .then(response => response.json())

   5. What would happen if you forgot to include .catch() at the end of a fetch chain?

   6. Can you spot the error in this code?

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json)
      .then(data => console.log(data.message))

   7. Why is it helpful to use .then() when working with fetch? What does it do in terms of execution order?


DOM Interaction Questions

   8. How would you update an image on your webpage using data returned from an API?

   9. Can you explain how document.getElementById() is used when working with API responses?


Practical Application

   10. If I asked you to build a button that fetches and displays a random dog image, how would you structure your code?