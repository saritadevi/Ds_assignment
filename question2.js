function reverseArrayExtraArray(arr) {
    const reversedArr = arr.slice().reverse();
 
    // Print reversed array
    process.stdout.write("Reversed Array: ");
    reversedArr.forEach(element => process.stdout.write(element + " "));
}
 
// Example usage:
const originalArr = [1, 2, 3, 4, 5];
reverseArrayExtraArray(originalArr);
