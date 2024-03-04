export default function taskBlock(trueOrFalse) {
  let task = false; /* Changed var to let  */
  let task2 = true; /* Changed var to let */

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
