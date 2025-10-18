// stack memory create a duplicate value while heap gives you a reference value 
// for Example 
// statck memory is of primitive datatypes

let userName = "Hamza"
let userEmail = userName
userEmail = "Hamza@gmail.com"

console.log(userName);
console.log(userEmail);  // This is an example of Stack memory
  
// heap memory is of non primitive datatypes or reference datatypes

let userone ={
    email : "userone@google.com",
    name : "userhamz"
}
 
let usertwo = userone
userone.email = "habs@google.com"

console.log(userone.email);
console.log(usertwo.email);  // This is an example of Heap memory

