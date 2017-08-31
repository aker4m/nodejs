var Users = [
    {name : "kim", age : 20},
    {name : "lee", age : 22},
    {name : "choi", age : 23},
    {name : "park", age : 25}
];

console.log("Users.length : %d", Users.length);
console.log("Users");
console.dir(Users);

var Users2 = Users.slice(1, 3);

console.log("Users2 after slice()");
console.dir(Users2);

var Users3 = Users2.slice(1);

console.log('Users3 after slice(1)');
console.dir(Users3);