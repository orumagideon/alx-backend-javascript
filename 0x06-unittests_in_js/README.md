# alx-backend-javascript

This repository contains a series of tasks related to unit testing in JavaScript.

## Task 0: Basic test with Mocha and Node assertion library

- Install Mocha using npm.
- Set up scripts in `package.json` to run Mocha using `npm test`.
- Create a function named `calculateNumber` in `0-calcul.js` that accepts two arguments, rounds them, and returns their sum.
- Write test cases in `0-calcul.test.js`.
- Run the tests using `npm test 0-calcul.test.js`.

Repo structure:
- `package.json`
- `0-calcul.js`
- `0-calcul.test.js`

## Task 1: Combining descriptions

- Upgrade the `calculateNumber` function from Task 0 to accept a new argument named `type`, which can be SUM, SUBTRACT, or DIVIDE.
- Modify the function accordingly based on the type provided.
- Write test cases in `1-calcul.test.js` to test the new functionality.
- Run the tests using `npm test 1-calcul.test.js`.

Repo structure:
- `1-calcul.js`
- `1-calcul.test.js`

## Task 2: Basic test using Chai assertion library

- Rewrite the code from Task 1 into files `2-calcul_chai.js` and `2-calcul_chai.test.js`.
- Use the Chai assertion library for testing.
- Ensure all tests pass using `npm test 2-calcul_chai.test.js`.

Repo structure:
- `2-calcul_chai.js`
- `2-calcul_chai.test.js`

## Task 3: Spies

- Install Sinon with npm.
- Create a `Utils` module with a `calculateNumber` function.
- Write a `sendPaymentRequestToApi` function that uses `Utils.calculateNumber`.
- Create a test suite in `3-payment.test.js` to validate the usage of `Utils` function using spies.
- Run the tests using `npm test 3-payment.test.js`.

Repo structure:
- `utils.js`
- `3-payment.js`
- `3-payment.test.js`

## Task 4: Stubs

- Stub the `Utils.calculateNumber` function to always return the same number.
- Verify that the stub is being called with the correct arguments.
- Add a spy to verify that `console.log` is logging the correct message.
- Run the tests using `npm test 4-payment.test.js`.

Repo structure:
- `4-payment.js`
- `4-payment.test.js`

## Task 5: Hooks

- Use `beforeEach` and `afterEach` hooks to ensure that `sendPaymentRequestToAPI` is called with different arguments in different tests.
- Verify that the console logs the correct message and is only called once in each test.
- Run the tests using `npm test 5-payment.test.js`.

Repo structure:
- `5-payment.js`
- `5-payment.test.js`

## Task 6: Async tests with done

- Create an async function `getPaymentTokenFromAPI` that returns a resolved promise based on a boolean argument.
- Write a test suite named `getPaymentTokenFromAPI` to test the function.
- Use the `done` callback to execute the test.
- Run the tests using `npm test 6-payment_token.test.js`.

Repo structure:
- `6-payment_token.js`
- `6-payment_token.test.js`

## Task 7: Skip

- Use skipping to pass the test suite without fixing or removing the failing test in `7-skip.test.js`.
- Ensure that all tests pass using `npm test 7-skip.test.js`.

Repo structure:
- `7-skip.test.js`

## Task 8: Basic Integration testing

- Create an API using Express in `8-api/api.js`.
- Write integration tests in `8-api/api.test.js` to test the API endpoints.
- Run the tests using `npm test api.test.js`.

Repo structure:
- `8-api/package.json`
- `8-api/api.js`
- `8-api/api.test.js`

## Task 9: Regex integration testing

- Modify the API to add a new endpoint with validation using regex.
- Write test cases to ensure correct status codes for valid and invalid IDs.
- Run the tests using `npm test api.test.js`.

Repo structure:
- `9-api/api.js`
- `9-api/api.test.js`
- `9-api/package.json`

## Task 10: Deep equality & Post integration testing

- Add new endpoints to the API.
- Write test suites for each new endpoint, testing for correct responses and status codes.
- Ensure deep equality when comparing objects in tests.
- Run the tests using `npm test api.test.js`.

Repo structure:
- `10-api/api.js`
- `10-api/api.test.js`
- `10-api/package.json`

