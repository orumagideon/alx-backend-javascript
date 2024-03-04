export default function createIteratorObject(report) {
  function* employeeIterator(report) {
    for (const department in report.allEmployees) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  return employeeIterator(report);
}
