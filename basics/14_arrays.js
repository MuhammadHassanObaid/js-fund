
// ( parenthesis) [ square brackets] {braces or curly braces}


const myArr = [0,1,2]

const myHeros = ['ad','asd']

const myArr2 = new Array(123,1,1)

cosnole of browser

const numbers = [1,2,3,4]

me prototype and then protote and length hota

// aray methods

myArr.push(6);

log(myArr);

myArr.pop()

myArr.unshift(0); // time consuming operation bcase shiftin, but reqirs in todo

// remove from front
myArr.shift()

log(myArr.includes(9)) // retrn booean

log(myArr.indexOf(9)); // -1 means not exist

const newArr = myArr.join

log(myArr)

log(newArr);  // typeof would be string 

// slice, splice

log("A ", myArr)

const myn1 = myArr.slice(1,3);// last range include hue

log(myn1);

log("B ",myArr)  

const myn2 = myArr.splice(1,3);
log(myn2); 

// difference betwen slice and splice














const myArr = [1,2,3,4]

myArr .prototype

push, pop, unshift, shift, includes, indexOf,

const marvel_heroes = ['a', 'i', 's']

const dc_heroes = ['a','b','c']

marvel_heroes.push(dc_heroes); // array me array a ajate means associative arrya

log(marvel_heores[3][1])

const all_heroes = marvel_heroes.concat(dc_heroes) // concat retrn new array

log(marvel_heroes)

// push and concat produce same result

log(all_heroes )


// concat ka easy alternative is SPREAD

const all_new_heroes = [ ...marvel_heroes, ...dc_heroes ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const (real_another_array)= another_array.flat(Infinity)

log(real_another_array)

// string, nodelist ke form me data a rhaa from server
// to convert it in Array

log(Array.isArray("as"));
log(Array.from("asd"));

log(Array.from({name:"as"})) // INTERESTING [] hm bta sktee kee keys ke aray bnao  ya values ke array bnao

const score1 = 1;
const score2 =2;
const score3 = 3;

log(Array.of(score1, score2, score3));

// Array.from
// Array.is
// Array.isArray


// see more in affordcommere drive array folder