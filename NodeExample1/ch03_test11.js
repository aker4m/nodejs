var Users = [
    {name : "kim", age : 20},
    {name : "lee", age : 22}
];
console.log("Users.length : %d", Users.length);

Users.push(
    {name : "park", age : 23}
);
console.log("Users.length after push() : %d", Users.length);

Users.pop();
console.log("Users.length after pop() : %d", Users.length);