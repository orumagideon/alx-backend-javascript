alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
Task 0: Basic list of objects
Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco
javascript
Copy code
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());
Task 1: More mapping
Create a function getListStudentIds that returns an array of ids from a list of objects.

This function takes one argument which is an array of objects - in the same format as getListStudents from the previous task.

If the argument is not an array, the function returns an empty array.

javascript
Copy code
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
Task 2: Filter
Create a function getStudentsByLocation that returns an array of objects located in a specific city.

It accepts a list of students (from getListStudents) and a city (string) as parameters.

javascript
Copy code
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
Task 3: Reduce
Create a function getStudentIdsSum that returns the sum of all student ids.

It accepts a list of students (from getListStudents) as a parameter.

javascript
Copy code
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
Task 4: Combine
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade.

javascript
Copy code
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
Task 5: Typed Arrays
Create a function createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

javascript
Copy code
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));
Task 6: Set data structure
Create a function setFromArray that returns a Set from an array.

javascript
Copy code
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
Task 7: More set data structure
Create a function hasValuesFromArray that returns a boolean if all elements in the array exist within the set.

javascript
Copy code
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
Task 8: Clean set
Create a function cleanSet that returns a string of all set values that start with a specific string (startString).

javascript
Copy code
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
Task 9: Map data structure
Create a function groceriesList that returns a map of groceries.

javascript
Copy code
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());
Task 10: More map data structure
Create a function updateUniqueItems that returns an updated map for all items with an initial quantity of 1.

javascript
Copy code
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
Task 11: Weak link data structure
Export a const instance of WeakMap and name it weakMap.

Export a new function named queryAPI that accepts an endpoint argument.

javascript
Copy code
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
