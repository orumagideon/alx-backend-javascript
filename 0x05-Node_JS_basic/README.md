# alx-backend-javascript

## Description

This repository contains solutions to tasks related to Node.js basics as part of the ALX Backend curriculum.

## Tasks

### Task 0: Executing basic javascript with Node JS
In the file `0-console.js`, a function named `displayMessage` is created that prints the string argument in STDOUT.

### Task 1: Using Process stdin
A program named `1-stdin.js` is created. It prompts the user with "Welcome to Holberton School, what is your name?" and accepts user input for their name. After receiving the input, it displays "Your name is: INPUT". When the program ends, it displays "This important software is now closing".

### Task 2: Reading a file synchronously with Node JS
A function `countStudents` is created in the file `2-read_file.js`. It reads the database file synchronously and logs the number of students in each field along with the list of first names.

### Task 3: Reading a file asynchronously with Node JS
Similar to Task 2, but the function `countStudents` in `3-read_file_async.js` reads the database file asynchronously using Promises.

### Task 4: Create a small HTTP server using Node's HTTP module
A small HTTP server is created in `4-http.js` using Node's HTTP module. It listens on port 1245 and displays "Hello Holberton School!" for any endpoint as plain text.

### Task 5: Create a more complex HTTP server using Node's HTTP module
Similar to Task 4, but in `5-http.js`, different responses are provided based on the URL path. "/" displays "Hello Holberton School!" and "/students" displays information about students from the database.

### Task 6: Create a small HTTP server using Express
In `6-http_express.js`, a small HTTP server is created using Express module. It listens on port 1245 and displays "Hello Holberton School!" for the endpoint "/".

### Task 7: Create a more complex HTTP server using Express
Similar to Task 6, but in `7-http_express.js`, different responses are provided based on the URL path. "/" displays "Hello Holberton School!" and "/students" displays information about students from the database.

### Task 8: Organize a complex HTTP server using Express
A full server structure is created in the directory `full_server`. It uses Babel and Express. Various controllers and routes are organized, and a server is created in `server.js`.

## Repository Structure

- `0x05-Node_JS_basic/`
  - `0-console.js`
  - `1-stdin.js`
  - `2-read_file.js`
  - `3-read_file_async.js`
  - `4-http.js`
  - `5-http.js`
  - `6-http_express.js`
  - `7-http_express.js`
  - `full_server/`
    - `controllers/`
      - `AppController.js`
      - `StudentsController.js`
    - `routes/`
      - `index.js`
    - `utils.js`
    - `server.js`

## Usage
Each task file can be executed using Node.js. For example:
```bash
node 0-main.js

markdown
Copy code
# alx-backend-javascript

## Description

This repository contains solutions to tasks related to Node.js basics as part of the ALX Backend curriculum.

## Tasks

### Task 0: Executing basic javascript with Node JS
In the file `0-console.js`, a function named `displayMessage` is created that prints the string argument in STDOUT.

### Task 1: Using Process stdin
A program named `1-stdin.js` is created. It prompts the user with "Welcome to Holberton School, what is your name?" and accepts user input for their name. After receiving the input, it displays "Your name is: INPUT". When the program ends, it displays "This important software is now closing".

### Task 2: Reading a file synchronously with Node JS
A function `countStudents` is created in the file `2-read_file.js`. It reads the database file synchronously and logs the number of students in each field along with the list of first names.

### Task 3: Reading a file asynchronously with Node JS
Similar to Task 2, but the function `countStudents` in `3-read_file_async.js` reads the database file asynchronously using Promises.

### Task 4: Create a small HTTP server using Node's HTTP module
A small HTTP server is created in `4-http.js` using Node's HTTP module. It listens on port 1245 and displays "Hello Holberton School!" for any endpoint as plain text.

### Task 5: Create a more complex HTTP server using Node's HTTP module
Similar to Task 4, but in `5-http.js`, different responses are provided based on the URL path. "/" displays "Hello Holberton School!" and "/students" displays information about students from the database.

### Task 6: Create a small HTTP server using Express
In `6-http_express.js`, a small HTTP server is created using Express module. It listens on port 1245 and displays "Hello Holberton School!" for the endpoint "/".

### Task 7: Create a more complex HTTP server using Express
Similar to Task 6, but in `7-http_express.js`, different responses are provided based on the URL path. "/" displays "Hello Holberton School!" and "/students" displays information about students from the database.

### Task 8: Organize a complex HTTP server using Express
A full server structure is created in the directory `full_server`. It uses Babel and Express. Various controllers and routes are organized, and a server is created in `server.js`.

## Repository Structure

- `0x05-Node_JS_basic/`
  - `0-console.js`
  - `1-stdin.js`
  - `2-read_file.js`
  - `3-read_file_async.js`
  - `4-http.js`
  - `5-http.js`
  - `6-http_express.js`
  - `7-http_express.js`
  - `full_server/`
    - `controllers/`
      - `AppController.js`
      - `StudentsController.js`
    - `routes/`
      - `index.js`
    - `utils.js`
    - `server.js`

## Usage
Each task file can be executed using Node.js. For example:
```bash
node 0-main.js
To start the server in the full_server directory:
npm run dev
