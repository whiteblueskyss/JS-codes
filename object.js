const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// we can't change freeze object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
]

users[1].email
// console.log(newObj);

// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));
// console.log(Object.entries(newObj));

// console.log(newObj.hasOwnProperty('isLoggedIn'));

