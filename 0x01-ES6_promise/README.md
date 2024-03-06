
JavaScript Backend Development Tasks
This repository contains JavaScript backend development tasks for the ALX School curriculum.

Setup
Before running any of the tasks, ensure you have Node.js and npm installed. You can install the project dependencies by running:

bash
Copy code
npm install
Files and Usage
package.json
This file contains metadata about the project and the list of dependencies. To install project dependencies, run:

bash
Copy code
npm install
babel.config.js
This file configures Babel, a JavaScript compiler that allows us to use modern JavaScript features in older environments. It is used to transpile modern JavaScript code into a backward-compatible version.

utils.js
This file contains utility functions that are useful for tasks requiring uploadPhoto and createUser.

uploadPhoto
This function returns a Promise with the response format:

javascript
Copy code
{
  status: 200,
  body: 'photo-profile-1'
}
createUser
This function returns a Promise with the response format:

javascript
Copy code
{
  firstName: 'Guillaume',
  lastName: 'Salva'
}
.eslintrc.js
This file configures ESLint, a static code analysis tool for identifying problematic patterns found in JavaScript code. It ensures code consistency and helps maintain code quality.

Tasks
0. Keep every promise you make and only make promises you can keep
Implement a function getResponseFromAPI() that returns a Promise.

javascript
Copy code
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
1. Don't make a promise...if you know you can't keep it
Implement a function getFullResponseFromAPI(success) that returns a Promise. The parameter is a boolean.

When the argument is true, resolve the promise with:

javascript
Copy code
{
  status: 200,
  body: 'Success'
}
When the argument is false, reject the promise with an error object with the message The fake API is not working currently.

2. Catch me if you can!
Implement a function handleResponseFromAPI(promise) that appends three handlers to the provided Promise.

When the Promise resolves, return an object with the following attributes:

javascript
Copy code
{
  status: 200,
  body: 'success'
}
When the Promise rejects, return an empty Error object.

For every resolution, log "Got a response from the API" to the console.
