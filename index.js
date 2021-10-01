function largestSubarraySum(arr) {
    let currentSum = 0
    let largestSum = 0

    for(let i = 0; i < arr.length; i++) {
        currentSum = Math.max(0, currentSum + arr[i])
        largestSum = Math.max(currentSum, largestSum)
    }

    return largestSum
}