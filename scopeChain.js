// scope chaing is looing for ariables  from it's lexical environment

function  a(){
    var b =10;
    c()
    function c(){
        console.log(b)
    }
}


a();
