function getPairsCount(arr, n, sum)
{
    let count = 0; // Initialize result
 
    // Consider all possible pairs and check their sums
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}
 
// Driver function to test the above function
    let arr = [ 1, 5, 7, -1, 5 ];
    let n = arr.length;
    let sum = 6;
    document.write("Count of pairs is "
        + getPairsCount(arr, n, sum));
