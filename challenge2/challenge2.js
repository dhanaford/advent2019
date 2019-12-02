const fs = require('fs');
const input = fs.readFileSync('data.js', 'utf-8');
const intCode = input.split(',').map(val => parseInt(val, 10));

function fixComputer(input) {
    const memory = [...input];

    for (let optCodePtr = 0; optCodePtr < memory.length; optCodePtr += 4) {
        const optCode = memory[optCodePtr];
        const leftPtr = memory[optCodePtr + 1];
        const rightPtr = memory[optCodePtr + 2];
        const resultPtr = memory[optCodePtr + 3];

        const left = memory[leftPtr];
        const right = memory[rightPtr];
        if (optCode === 1) {
            memory[resultPtr] = left + right;
        }
        else if (optCode === 2) {
            memory[resultPtr] = left * right;
        }
        else if (optCode === 99) {
            break;
        }
    }

    return memory[0];

}

intCode[1] = 12;
intCode[2] = 2;
console.log(fixComputer(intCode));

const target = 19690720;

for (let noun = 0; noun < 99; noun++) {
    for (let verb = 0; verb < 99; verb++) {
        intCode[1] = noun;
        intCode[2] = verb;
        const result = fixComputer(intCode);
        if (result === target) {
            console.log(100 * noun + verb);
            break;
        }

    }
}