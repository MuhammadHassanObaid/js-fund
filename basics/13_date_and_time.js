
//
let newDate = new Date();

console.log("newDate :--", newDate);

console.log("typeof newDate :--", typeof(newDate));

console.log("newDate.toString() :--", newDate.toString());

console.log("newDate.toISOString():- ", newDate.toISOString());

console.log("newDate.toLocaleString()", newDate.toLocaleString());

console.log("newDate.toLocaleDateString()", newDate.toLocaleDateString());

console.log("newDate.toJSON()", newDate.toJSON());

console.log("newDate.toLocaleTimeString()", newDate.toLocaleTimeString());

console.log("newDate.toTimeString()", newDate.toTimeString());

console.log("newDate.toUTCString()", newDate.toUTCString());

console.log("newDate.toDateString()", newDate.toDateString());

let myCreatedDate = new Date(2023, 0, 23, 5 ,2)

console.log(myCreatedDate.toLocaleString());


// other formats for input date MM/DD/YY

// yy mm dd
// let myCreatedDate1 = new Date("2023-1-1")

// mm dd yy
let myCreatedDate1 = new Date("1-1-2026")

console.log(myCreatedDate1.toLocaleString());


// timestamp in date

let cDate = Date.now();

// 1970 se date in miliseecond
// below 2 ko easily compare kya ja sktaa
console.log(cDate);
console.log(myCreatedDate1.getTime());

// how to convert to seconds -- imp
console.log(Math.floor(cDate/1000));


// how to find month, year
const andDate = new Date()
console.log(andDate.getDay());
console.log(andDate.getMonth() + 1);

// INTERSTING methid is toLocaleString for date
console.log(andDate.toLocaleString('default', {
    weekday: 'long'
}));


