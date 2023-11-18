
function loginUserMessage(username = "sam"){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
  return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


//=====================arrow function============

const add = (num1, num2) => num1+num2;

const sub = (num1,num2) =>{
  return num1-num2;
}

console.log(add(3,4));



// =================
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



//============scope intresting========



console.log(addone(5))

function addone(num){
    return num + 1
}




addTwo(5) // can't access befor initialization.

const addTwo = function(num){
    return num + 2
}
