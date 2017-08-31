var Person = {
    age : 20,
    name : "kim",
    add : function(a, b){
        return a+b;
    }
};

console.log("add(10, 20) : %d", Person.add(10, 20));