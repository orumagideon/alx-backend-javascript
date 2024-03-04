export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += item + ' | ';
  }
  /* Remove the last separator '| ' from the result */
  return result.slice(0, -3);
}