function solution(list) {
  let formattedList = [];   // Initialize an empty array to store the formatted elements.
  let start = list[0];      // Initialize the 'start' variable with the first element of the input list.
  let end = start;          // Initialize the 'end' variable with the same value as 'start'.

  // Iterate through the list starting from the second element.
  for (let i = 1; i < list.length; i++) {
      if (list[i] === end + 1) {
          // If the current element is consecutive to the previous 'end' value,
          // update the 'end' to the current element.
          end = list[i];
      } else {
          if (end - start >= 2) {
              // If the range between 'start' and 'end' is at least 3 numbers,
              // push the formatted range (e.g., "3-5") into the 'formattedList'.
              formattedList.push(`${start}-${end}`);
          } else {
              // If the range is less than 3 numbers, push 'start' to 'formattedList'.
              formattedList.push(start.toString());

              // If 'end' is different from 'start', push 'end' to 'formattedList' as well.
              if (end !== start) {
                  formattedList.push(end.toString());
              }
          }

          // Update 'start' and 'end' to the current element, as we start a new range.
          start = end = list[i];
      }
  }

  // After the loop, check the range one last time and push the appropriate value(s) to 'formattedList'.
  if (end - start >= 2) {
      formattedList.push(`${start}-${end}`);
  } else {
      formattedList.push(start.toString());
      if (end !== start) {
          formattedList.push(end.toString());
      }
  }

  // Join the formatted elements using commas and return the final formatted string.
  return formattedList.join(',');
}

let result = solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
console.log(result);   // Output the formatted string.
