const biryani = [
  "Kacci Dine",
  "Sultan's Dine",
  "Almaz Kitchen",
  "Kacci Dine",
  "Sultan's Dine",
  "Rosonar Shad",
  "Hungry Town",
  "Almaz Kitchen",
];

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for(const item of array){
        // console.log(item);
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    // console.log(unique);
    return unique;
}

const array = noDuplicate(biryani);
// console.log(array);

const min = Math.min(45, 1, 65, 99, 126, 21, 5, -99);
// console.log(min);

const max = Math.max(45, 1, 65, 99, 126, 21, 5, -99, 987);
// console.log(max);

// console.log(Math.PI);
// console.log(Math.abs(5 - 20));
// console.log(Math.round(2.25));
// console.log(Math.floor(2.95));
// console.log(Math.ceil(2.00001));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.round(Math.random()*10));

const today = new Date();
const date = new Date("2024-12-25");
// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDay());
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
// console.log(specificDate);
console.log(specificDate.toLocaleString());