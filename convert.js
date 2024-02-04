function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// const height = inchToFeet(75);
// console.log(height);

function secondInchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " Feet " + inchRemaining + " Inch";
    return result;
}

const height = secondInchToFeet(75);
console.log(height);