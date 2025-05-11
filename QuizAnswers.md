Quiz One Answer Key:

1. a

2. c

3. c

4. False

5. c

6. b

7. c

8. c

9. b

10. True

------------------------------------------------------

Quiz Two Answer Key:

1. b

2. c

3. b

4. False

5. b

6. b

7. c

8. c

9. b

10. a

11. True

12. c

------------------------------------------------------

Quiz Three Answer Key:

1. Allows computational power & it means you don't have to maintain the data either it is all done elsewhere by someone else rather than having to learn to code it all from scratch. (time efficiency)

2. 
A. GET

B. POST

C. PUT

D. DELETE

3. There is a problem with the webserver not the client

4. If you are building a large-scale app I would assume that means there is a team working on it together. If the API is not RESTful it can become very chaotic code wise quite quickly. Developers would have to learn how to use to api from scratch as well which is very time consuming.

5. Set a prompt for when you have requested 50 words letting you know about another at 90 words. As well as caching the translated words you have requested so you do not waste the limit on re-requesting.

6. "a" will return user number 5's details while "b" will return a list of all users

7. Benefit 1. Allows for the data to stay safe rather than giving continuing access to everyone it allows for privacy. Benefit 2. It also lifts a weight off the bridge that connects the backend to the front end otherwise it would have to store more information constantly from users and become overwhelmed.


8. I use google translate app a lot - it would use an api to help store all the words for it to then be called upon.
Another would be tiktok - rather than having all those billions of videos stored in my phone - they will be pulled throug an API and shown and not stored.

------------------------------------------------------

Quiz Four Answer Key:

1. An api is a application programming interface and - it is a bridge between what you see on the front of a website and the data and lines of code. Developers use these in their programs as a sort of library to draw knowledge from when it is needed. there are hundreds if not millions of API's - the are api's for dog pictures, cat pictures, quotes, books, music, turning pictures black and white the possibilities are endless.

2. fetch() is a built in javascript method which initiates the getting of data from the API through a URL. The purpose of it is to have uniform and structured way to get the data.

3. ​​​​​​​the api would return the data call and in raw html and then you would convert that response to a json object, and then put the data into a function so you can do things to it.

4. It is important because what we recieve from the api is raw html and we need to convert it to a javascript object so the computer on our end can understand it.

5. If there was an error you would not know why or where it happened and it can make debugging a long a tedious process.

6. the response.json doesnt have the parentheses it is a method so it should have () at the end. 

7. it helps ensure that each chunk of data is complete before moving onto the next part it helps with asynchronous code

8. ​​​​​​​I would first assign the img to a variable

let img = documentgetElementById("dog-img")

and then reassign the source code

img.src = data.message

9. it allows you to access parts of the HTML through their id's to insert the data from the API

10. Refer to 1dog.api.js

------------------------------------------------------

Quiz Five Answer Key:

1. b
2. b
3. b
4. b
5. a

6. Using async/await gives the advantage of cleaner and easier to read code. As well as making it easier to debug as you can go step by step.

7. the response.ok checks it the response status code is anywhere from 200 - 299 you can use this when checking for errors like 
if (!response.ok) {
    console.log(error, "something is wrong")
}

8. it does not await for the data to be sucessfully retrieved or sent before proceeding with the rest of the function which will cause an error.

9. I would use try... catch and in the catch i would log the error and status code

10. It will return a Promise immediately, and the function continues execution without waiting for the Promise to resolve. However, it could cause issues in your logic if you are depending on the resolved data. To avoid that, await should be used with promises to pause the function until the promise is resolved.