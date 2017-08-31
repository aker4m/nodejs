var Users=[
    {name : "kim", age : 20},
    {name : "lee", age : 22},
    {name : "park", age : 23}
];

console.log("Users.length : %d ", Users.length);
for(var i=0;i<Users.length;i++){
    console.log("Users["+i+"].name : %s", Users[i].name);
}

console.log("\nforEach()");
Users.forEach(function(item, index){
    console.log("item.name #"+index+" : %s", item.name);
});