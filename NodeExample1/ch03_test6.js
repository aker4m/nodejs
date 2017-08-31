var Person={};

Person["age"]=20;
Person["name"]="kim";

var oper = function(a, b){
    return a+b;
};

Person["add"]= oper;

console.log("add(10, 20) : %d", Person.add(10, 20));