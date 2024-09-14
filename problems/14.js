/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    dic = {};

    for (i=0; i <numbers.length;i++){
        if (!(numbers[i] in dic)) {
            dic[numbers[i]] = 0;
        }
        dic[numbers[i]]+=1;

    }
    
    major = Math.floor(numbers.length/2);

    for (i=0;i,numbers.length;i++){
        if (dic[numbers[i]] > major){
            return numbers[i]
        }
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};