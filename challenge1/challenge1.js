const fs = require('fs');
const input = fs.readFileSync('data.js', 'utf-8');

// part 1
function fuelRequirements (input) {
    input = input.split('\n').map(val => parseInt(val, 10));
    let result = input.reduce((accumFuel, mass) => {
    let fuel = Math.floor(mass / 3) - 2;
        return fuel + accumFuel;
    }, 0);
    return result;
}

// part 2
function fuelRequirementsTwo(input) {

    const calc = (currentFuel, currentMasses) => {
        const nextMasses = currentMasses
            .map(mass => Math.floor(mass / 3) - 2)
            .filter(val => val > 0)

        const nextFuel = nextMasses.reduce((accumFuel, fuel) => (fuel + accumFuel), currentFuel);

        return {
            fuel: nextFuel,
            masses: nextMasses
        }
    }
    
    const masses = input.split('\n').map(val => parseInt(val, 10));
    let current  = {fuel: 0, masses: masses};

    while (current.masses.length > 0) {
        current = calc(current.fuel, current.masses);
    }

    return current.fuel;
}


console.log(fuelRequirementsTwo(input));