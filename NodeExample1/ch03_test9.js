var Users = [
    {name : "kim", age : 20},
    {name : "lee", age : 22}
];

var add = function(a, b){
    return a+b;
};

Users.push(add);

console.log("Users.length : %d", Users.length);
console.log("Users[2].add(10, 20) : %d", Users[2](10, 20));