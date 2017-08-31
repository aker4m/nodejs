var Users = [
    {name : "kim", age : 20},
    {name : "lee", age : 22}
];
console.log("Users.length : %d", Users.length);

Users.unshift(
    {name : "park", age : 23}
);
console.log("Users.length after unshift() : %d", Users.length);

Users.shift();
console.log("Users.length after shift() : %d", Users.length)