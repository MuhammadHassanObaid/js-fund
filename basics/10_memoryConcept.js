let user = "Hassan"
let guestUser = user

// console.log('user = ', user);
// console.log('guestUser = ', guestUser);

guestUser = "Ahmed"
// console.log('guestUser = ', guestUser);

// console.log('While user = ', user);

console.log('NOW COME TOWARDS REFERENCE DATATYPES');

let loggedInUser = {
    name: 'ali',
    email: 'a@gmail.com',
};

// let loggedInGuestUser = {...loggedInUser};

// below is shallow copy means reference is stored and so changing one property of one object would affect other
let loggedInGuestUser = loggedInUser;

// console.log('loggedInUser : ');

for(let [k,v] of Object.entries(loggedInUser)){
    // console.log(`key ${k} -> ${v}`);
}

// console.log("\n\n");

// console.log('loggedInGuestUser : ');

for(let [k,v] of Object.entries(loggedInGuestUser)){
    // console.log(`key ${k} -> ${v}`);
}

// console.log('changing email of loggedInGuestUser : ');
loggedInGuestUser.email = 'b@gmail.com';

// console.log("\n\n\n------ after changing");

// console.log('loggedInGuestUser : ');

for(let [k,v] of Object.entries(loggedInGuestUser)){
    // console.log(`key ${k} -> ${v}`);
}

// console.log("\nloggedInUser : ");

for(let [k,v] of Object.entries(loggedInUser)){
    // console.log(`key ${k} -> ${v}`);
}

// console.log("---------------LETS DEMONSTRATE spread so that we can get rid of shallow copy----------------------");

loggedInGuestUser = {...loggedInUser};

// console.log("After spreading both are separate in memory but nested objects still have reference");

loggedInGuestUser.email="c@gmail.com"

// console.log("\nChanged email of loggedInGuestUser to ", loggedInGuestUser.email);

// console.log("\nBut email of loggedInUser is still ", loggedInUser.email);


// QUIZ BELOW

const testUser = {
  name: "Ali",
  age: 25,
  address: {
    city: "Lahore"
  }
};

// 1. Add role: "developer"
// 2. Create copy1 and copy2
// 3. Change copy1's city to Karachi
// 4. Change copy2's age to 26
// 5. Ensure user is unchanged
testUser.role = "developer"
console.log(testUser);

// since word is independent copies so use structuredClone
const cp1 = structuredClone(testUser);
const cp2 = structuredClone(testUser);

cp1.address.city = "Karanchi"
cp2.age=26

console.log("testUser",testUser);
console.log("testUser",testUser);










