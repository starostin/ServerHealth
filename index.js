function sortArrayAscending(numbers) {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const myArray = [3, 1, 4, 1, 5, 9, 2, 6];
const sortedArray = sortArrayAscending(myArray);
console.log(sortedArray); // Output: [1, 1, 2, 3, 4, 5, 6, 9]
console.log('-=-=-=-=-=')
