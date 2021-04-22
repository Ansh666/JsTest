var findMaxConsecutiveOnes = function(numbers) {
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i<numbers.length; i++) {
        if (numbers[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) largestCount = currentCount;
    };
    return largestCount;
};
