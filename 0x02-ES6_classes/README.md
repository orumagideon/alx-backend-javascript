
Configuration Files
This repository includes several configuration files that are essential for setting up and managing your JavaScript project. These files define scripts, dependencies, and other project settings.

package.json
The package.json file contains metadata about the project and its dependencies. It includes scripts for various tasks like linting, testing, and running the development environment. Here's the content of package.json:

json
Copy code
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
babel.config.js
The babel.config.js file contains configuration options for Babel, a JavaScript compiler that allows you to use the latest JavaScript features without worrying about compatibility issues. Here's the content of babel.config.js:

javascript
Copy code
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
.eslintrc.js
The .eslintrc.js file contains ESLint configuration, which is a tool for identifying and reporting on patterns found in JavaScript code. Here's the content of .eslintrc.js:

javascript
Copy code
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
Tasks
0. Pascal's Triangle
This task involves implementing a class named ClassRoom with a constructor that accepts the attribute maxStudentsSize and assigns it to _maxStudentsSize.

1. Let's make some classrooms
This task involves importing the ClassRoom class and implementing a function named initializeRooms that returns an array of three ClassRoom objects with sizes 19, 20, and 34.

2. A Course, Getters, and Setters
This task involves implementing a class named HolbertonCourse with attributes name, length, and students. Getter and setter methods are implemented for each attribute, and type verification is performed during object creation.

3. Methods, static methods, computed methods names..... MONEY
This task involves implementing a class named Currency with attributes code and name, along with getter and setter methods for each attribute. Additionally, a method named displayFullCurrency is implemented.

4. Pricing
This task involves importing the Currency class and implementing a class named Pricing with attributes amount and currency. Getter and setter methods are implemented for each attribute, along with a method named displayFullPrice and a static method named convertPrice.

5. A Building
This task involves implementing an abstract class named Building with attribute sqft and a getter method for the attribute. Any class that extends Building must implement a method named evacuationWarningMessage.

6. Inheritance
This task involves implementing a class named SkyHighBuilding that extends Building. It includes attributes sqft and floors, along with getter methods for each attribute. The method evacuationWarningMessage is overridden to return a specific message.

7. Airport
This task involves implementing a class named Airport with attributes name and code. The default string description of the class returns the airport code.

8. Primitive - Holberton Class
This task involves implementing a class named HolbertonClass with attributes size and location. When the class is cast into a number, it returns the size, and when cast into a string, it returns the location.

9. Hoisting
This task involves fixing a code snippet to ensure it works correctly. It involves defining classes HolbertonClass and StudentHolberton, along with exporting a list of students.

10. Vroom
This task involves implementing a class named Car with attributes brand, motor, and color. Additionally, a method named cloneCar is implemented to return a new object of the class.
