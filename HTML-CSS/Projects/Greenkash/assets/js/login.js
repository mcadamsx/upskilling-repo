// function login() {

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;


//   if (username === "" || password === "") {
//     alert("Please enter your username and password");
//     return false;                                                                                                                                                                                                                                          
//   }
 
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "/authenticate", true);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {

//       window.location.href = "/home";
//     } else if (xhr.readyState === 4 && xhr.status === 401) {

//       alert("Invalid username or password");
//     }
//   };
//   const data = JSON.stringify({ username: username, password: password });
//   xhr.send(data);
// }

// ========Login=========
const loginForm = document.getElementById("loginForm")
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
if (username === "" || password ==="" ){
  alert("Please Enter your username and password");
}
else{
  alert ("You have logged in successfully")
}
})


