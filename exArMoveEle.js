//20 -4 MovingElem

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);// this 0,1 is offset
// 0 is 1,So 1 move position to the rite = [2, 1, 3, 4]
// if we put 1 first it will move to the left
console.log(output);
//console.error('invalid');

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('invalid offset.');
        return;
    }

    const output = [...array];// this is clone the original array
    const element = output.splice(index, 1)[0];// we remove 1 elem that will be [0]
// next we need to place back to the array
    output.splice(index + position, 0, element);
    return output;// (4) [2, 1, 3, 4]
}