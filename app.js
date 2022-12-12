// const numbers = [1, 2, 3];
// console.log(numbers);

// const inputData = prompt('Insert some Data', '');

// // const moreNumbers = Array(4);
// // console.log(moreNumbers);

// // const yetMoreArray = Array.of(2,6, 8);
// // console.log(yetMoreArray)

// const allItems = document.querySelectorAll('li');
// //console.log(allItems);

// const moreNumbers = Array.from(allItems);
// console.log(moreNumbers);

// const hobbies = ['cooking', 'sport'];
// const personalData = [30, 'Daniel', {More: [inputData]}]

// const analyticsData = [[1.6, 79], [4, 6.9]];

// // for(const data of analyticsData){
// //     for(const elements of data){
// //         console.log(elements);
// //     }
// // }

// for(const data of analyticsData){
//     for(const dataPoint of data){
//        // more.push(inputData);
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[2]);

// const hobbies = ['sports', 'cooking'];
// hobbies.push('sleeping');
// hobbies.unshift('coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'CODING';
// //hobbies[5] = 'READING';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Well done');
// console.log(hobbies);

// const removedElements = hobbies.splice(-1, 1);
// console.log(hobbies);

// const testResults = [2, 3.5, 10.92, -5, 15, 2.8];
// //const storedResults = testResults.slice(4);
// const storedResults = testResults.concat([2.98, 5]);
// testResults.push(98);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(2.8));

// console.log(testResults.includes(10.92));
// console.log(storedResults.indexOf(2+3) !== -1);

// const personData = [{name: 'Daniel'}, {name: 'Plamedie'}];
// //console.log(personData.indexOf({name: 'Daniel'}));
// const plamedie = personData.find((person) => {
//     return person.name === 'Plamedie'
// });

// plamedie.name = 'Glodie';
// console.log(plamedie, personData);

// const DanielIndex = personData.findIndex((person) => {
//     return person.name === 'Daniel'
// });
// console.log(DanielIndex);

// const prices = [5.99, 4.75, 3.83, 6.34];
// const tax = 0.19;
// const adjustPrices = [];

// // for(const price of prices){
// //     adjustPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, adjustedPrices: price * (1 + tax)}
//     adjustPrices.push(priceObj);
// })

// console.log(adjustPrices);

// const prices = [8.99, 4.75, 3.83, 6.34];
// const tax = 0.19;

// const adjustPrices = prices.map((price, idx, prices) => {
//     const priceObj = {index: idx, adjustedPrices: price * (1 + tax)}
//     return priceObj;
// })

// console.log(prices, adjustPrices);

// const sortedPrices = prices.sort((a, b) => {
//     if(a > b){
//         return 1;
//     }
//     else if(a === b){
//         return 0;
//     } else {
//         return -1
//     }
// });
// console.log(sortedPrices.reverse());

// const filtredArray = prices.filter(price =>  price > 6);
// console.log(filtredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //     sum += price;
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0 );

// console.log(sum);

// const data = "Danielkit; 2005; 2022";

// const transformedData = data.split(';');
// transformedData[2] = +transformedData[2];
// console.log(transformedData);

// const nameFrag = ['Daniel', 'Kitamenywa', 'Amani'];

// const util = nameFrag.slice(0, 2).join(' ');
// console.log(util);


// const name = nameFrag.join(' ');

// console.log(name);

// const copiedNameFrag = [...nameFrag];
// nameFrag.pop();
// console.log(nameFrag, copiedNameFrag);

// console.log(Math.max(...prices));

// const persons = [{name: 'Daniel', age: 18}, {name: 'Glodie', age: 17}];

// const copiedPersons = [...persons.map(person => ({
//     name: person.name, 
//     age: person.age
// }))];

// persons.push({name: 'Plamedie', age: 14});
// persons[0].age = 200;

// console.log(persons, copiedPersons);
const nameData = ['Daniel', 'Kitamenywa', 'Mr', 30];
const [ firstName, lastName, ...otherInfo ] = nameData;
console.log(firstName, lastName, otherInfo);