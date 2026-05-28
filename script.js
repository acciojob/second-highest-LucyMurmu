//your JS code here. If required.
function secondHighest(arr) {

    if (arr.length < 2) {
        return -Infinity;
    }

    let firstHigh = -Infinity;
    let secondHigh = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstHigh) {
            secondHigh = firstHigh;
            firstHigh = arr[i];
        }

        else if (arr[i] > secondHigh && arr[i] !== firstHigh) {
            secondHigh = arr[i];
        }
    }

    return secondHigh;
}

// Call function
console.log(secondHighest([5, 1, 2, 3, 4]));