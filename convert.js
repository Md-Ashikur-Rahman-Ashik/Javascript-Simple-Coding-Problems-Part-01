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
// console.log(height);

function mileToKm(mile){
    const kilo = mile * 1.609344;
    return kilo;
}

// const result = mileToKm(5);
// console.log(result);

function kmToMile(km){
    const mile = km * 0.6213712;
    return mile;
}

const result = kmToMile(5);
// console.log(result);

function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear = isLeapYear(2100);
// console.log(leapYear);

function oddAverage(numbers){
    // console.log(numbers);
    let sum = 0;
    let odd = [];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 1){
            console.log(number);
            odd.push(number);
            sum = sum + number;
        }
    }
    console.log(odd);
    console.log("The sum of numbers is:", sum);
    let average = sum / odd.length;
    return average;
}

const numbers = [42, 13, 58, 65, 81, 5, 105];
// console.log("The sum of numbers is:", sum);
const avg = oddAverage(numbers);
console.log("Average of the odd numbers:", avg);