// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let [hi, lo] = [scores[0], scores[0]];
    let [max, min] = [0, 0];

    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > hi) { hi = scores[i]; max++}
        if(scores[i] < lo) { lo = scores[i]; min++}
    }
    return [max, min];
}


// Input (stdin)
// 9
// 10 5 20 20 4 5 2 25 1

// Expected Output
// 2 4