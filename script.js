/*
 * Complete the 'gamingArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function gamingArray(arr) {
    // too slow on a 3 test cases
    // let currArr = arr;
    // let numMoves = 0;

    // while(currArr.length > 0){
    //     let currMax = Math.max(...currArr);
    //     let maxIdx = currArr.indexOf(currMax);
    //     let newArr = currArr.slice(0, maxIdx);
    //     currArr = newArr;
    //     numMoves++;
    // }

    // if(numMoves % 2 === 0){
    //     console.log("ANDY");
    //     return "ANDY";
    // }
    // console.log("BOB");
    // return "BOB";

    let curMax = 0;
    const filteredArr = arr.filter((val) => {
        if (val > curMax) {
            curMax = val;
            return val;
        }
    });

    console.log(filteredArr)

    if (filteredArr.length % 2 === 0) {
        console.log("ANDY");
        return "ANDY";
    }
    console.log("BOB");
    return "BOB";
}
