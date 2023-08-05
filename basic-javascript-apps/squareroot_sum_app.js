//JavaScript function that squares each number in the input array and then sums the squared results together:

function squareSum(numbers) {
  if (!Array.isArray(numbers)) {
    return "Invalid input: Please provide an array of numbers.";
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return "Invalid input: Array must only contain numbers.";
    }
    sum += numbers[i] * numbers[i];
  }

  return sum;
}
