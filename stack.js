

function stack(){
    this.count =0;
    this.storage = {};
    this.push =function (value){
        this.storage[this.count]=value;
        this.count++;
    }

    this.pop = function(value){
        if(this.count == 0){
            return undefined;
        }
        this.count --;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }   

    this.peek =  function(){
        return this.storage[this.count -1];
    }

    this.size = function(){
        return this.count;
    }
}
let list = new stack();
list.push(1)
console.log(list.count);