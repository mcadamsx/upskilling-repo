const users = [
  { firstname: "Daniel", lastname: "Mensah", age: 3 },
  { firstname: "Daniel", lastname: "Mensah", age: 3 },
  { firstname: "Ben", lastname: "Lucky", age: 6 },
  { firstname: "Nolley", lastname: "Dadzie", age: 1 },
  { firstname: "Mark", lastname: "Mubarak", age: 9 },
];


// const firstName = users[1].firstname
// console.log(firstName);
// const totalumber  = users.length
// console.log(totalumber);
// const usersFirstnames = users.map(users => users.firstname)
// console.log(usersFirstnames);
// const firstNameDaniel = users.filter(user=> {
//   if(user.firstname.toLowerCase() === "daniel"){
//     return user;
//   }

// })


// const searchLastname = (lastname) => users.filter(user => {
//   if(user.lastname.toLowerCase() === lastname.toLowerCase()){
//     return user;
//   }

// }) 
// console.log(searchLastname("mensah"));






// //  How would you extract the first name of the second user in the list?
// const secondUserFirstName = users[1].firstname;
// console.log(secondUserFirstName);

// //How would you find the total number of users in the array?

// const totalUsers = users.length; 
// console.log(totalUsers);

// //How would you retrieve an array of all the first names of the users?
// const firstNames = users.map(user => user.firstname); 
// console.log(firstNames); 

//How would you find if there is a user in the list who is older than 30?
// const userOlder = users.find(user => user.age > 3)
// console.log(userOlder);

//How would you sort the array of users by their `age` in ascending order?
// const asend = users.sort((a,b) => a.age - b.age)

// How would you sort the users by their `first name` alphabetically?
// const accend = users.sort((a, b)=> a.firstname.localeCompare(b.firstname))
// console.log(accend);

//remove duplicates 
// const uniqueUsers = [
//   ...new Set(users.map(user => JSON.stringify(user)))
// ].map(user => JSON.parse(user));

// console.log(uniqueUsers);

//How would you update the `age` of the user with the first name "Ben" to 25?
// const updateAge = (firstName, newAge) => {   
//   const user = users.find(user => user.firstname === firstName);   
//   if (user) user.age = newAge; 
// }; 
//   updateAge("Ben", 25); 
//   console.log(users);


// How would you remove the user with `first name: "Nolley"` from the array?
// const removeUser = firstName => {
//   const index = users.findIndex(user => user.firstname === firstName);
//   if (index !== -1) users.splice(index, 1);
// };
// removeUser("Nolley");
// console.log(users);