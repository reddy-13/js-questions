// promises using fetch 
// const GITHUB_URL  = "https://api.github.com/users/reddy-13"

// let user = fetch(GITHUB_URL)
//             .then(function(res){
//                 console.log(res);
//             })

// console.log(user);


const cart = ['pant', 'shirts', 'kurtas'];

const promise = createOrder(cart) // orderId

console.log(promise);
promise
    .then((orderId) => console.log(orderId))
    .then((orderId) => proceedToPayment(orderId))
    .then((res) =>  console.log(res))
    .catch((err) => console.log(err.message))


// creat order function
function createOrder(cart){
    const pr = new Promise(function(resolve , reject){
        // create an order

        // validate card

        // Orderid
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for create order
        const orderId = "123456"
        if(orderId){
            setTimeout(function () {
                resolve(orderId)
            }, 5000)
            
        }
    })



    return pr;
}


// 
function proceedToPayment(orderId){
    return new Promise((resolve, reject) => resolve("Payment successfull"));
}
function validateCart(cart){
    return true
}