var Users = [
    {name : "kim", age : 20},
    {name : "lee", age : 22},
    {name : "park", age : 23}
];
console.log("Users.length : %d", Users.length);

delete Users[1];
console.log("after delete Users[1]");
console.dir(Users);

Users.splice(1, 0, {name : "choi", age : 25});
console.log("after splice()");
console.dir(Users);

Users.splice(2, 1);
console.log("after splice(2, 1)");
console.dir(Users);