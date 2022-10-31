let person = {
    firstName: "Goutham",
    lastName : "Reddy",
}


let printFullName = function(hometown){
    console.log(`${this.firstName} ${this.lastName} from ${hometown}` )
}


let printMyname = printFullName.bind(person, "Kahargpur")

Function.prototype.myBind = function(...args){
    let obj = this
    let params = args.slice(1);
    return function(){
        obj.apply(args[0], params);
    }
}

 
person2 = {
    firstName: "Sumit",
    lastName : "Reddy",
}

let printMyname2 = printFullName.myBind(person2,"Kharagpur");

printMyname()
printMyname2()

console.log("2"+ "2");