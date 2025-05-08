// function signupUser (name, email, passward){
// }
// const name = 'John Doe';
// const email = 'example@mail.com'
// const password = 'password123'

// signupUser (name, email, password)
// .then ((response)=>{
//     console.log (`Sign Up Successful: ${response} `);
 
//     windows.location.href = '/login';
// })
// .catch((error) =>{
    
//     console.error(`sign up not sucessful ${error.message}`);

//     document.getElementById(`error-message`).innerHTML = error.message;

// })

// function signUpUser(name, email, password) {

//   if (name === "" || email === "" || password === ""){

//     alert("Please Enter Email or Password")
//   } else {
//     name = name.value;
//     email = email.value;
//     password = password.value;

//   }}   
//   function loginUser(email, password) {
//     if(email == email.value || password == password.value){
//       name.innerHTML += "Youve Successfully logged in "}
//     }

   
//   const signupForm = document.getElementById('signup-form');
//   signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = signupForm.elements['name'].value;
//     const email = signupForm.elements['email'].value;
//     const password = signupForm.elements['password'].value;
//     signUpUser(name, email, password)
//       .then((response) => {
//         console.log(`Sign up successful: ${response}`);
  
//         return loginUser(email, password);
//       })
//       .then((token) => {
      
//         localStorage.setItem('jwtToken', token);
//         console.log(`Login successful. JWT token: ${token}`);

//         window.location.href = '/dashboard';
//       })
//       .catch((error) => {
//         console.error(`Sign up or login failed: ${error.message}`);

//         document.getElementById('error-message').innerHTML = error.message;
//       });
//   });
  
(()=>{
  //======Sign Up =========
const signupForm = document.getElementById("signup-form")
const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const phone = document.getElementById("phone").value;
const username = document.getElementById_("username").value
const email = document.getElementById("email").value;
const passward = document.getElementById("password").value;


signupForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  if(firstName ==="" || lastName ==="" || phone ===""|| username ===""|| email === "" || passward ==""){
    alert("Some fileds are not filled");
    
  }else{
    alert ("You have log in successfully")
    firstName = firstName.value;
    lastName = lastName.value;
    phone = phone.value;
    username = username.value;
    email = email.value;
    password = password.value;

  }
  
})



})