const userForm = document.querySelectorAll("form");
const tableSearch = document.getElementById('table-search')
const tbody = document.querySelectorAll("tbody")

for (let index = 0; index < userForm.length; index++) {
    const element = userForm[index];
    const caution = element.querySelector('p')
    const username = element.querySelector('#username');
    const password = element.querySelector('#password');

    element.addEventListener('submit', (e)=>{
        e.preventDefault();

        if(username.value == "" && password.value == ""){
            caution.style.visibility = "visible";
            caution.innerHTML = "Please fill the space";
            username.style.borderColor = "red";
            password.style.borderColor = "red"
        }else if (username.value != "admin" || password.value !="admin" ){
            caution.style.visibility = "visible";
            caution.innerHTML = "Please enter correct username and password";
        }else{
        location.href="dashboard.html";
        }
    
    })
}




















 
//     // Search functionality
//     const searchForm = document.getElementById('search-form');
//     const searchInput = document.getElementById('search-input');
//     const previewContent = document.getElementById('preview-content');
  
//     searchForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const searchText = searchInput.value.trim();
//       if (searchText !== '') {
//        previewContent = 
       
//        document.createElement('td');
//        previewContent.textContent = "erroe"
//       }else{

         
//     function searchVehicle(searchText) {
//         for (let index = 0; index < previewContent.length; index++) {
//             const SerachFilter = previewContent[index];
            
     
//           const filteredVehicles = SerachFilter.filter(
//             function(searchValue) {
//                 return searchValue === searchText;
              
                
//             }
           
//           );
//           displaySearchResults(filteredVehicles);
//           console.log(searchValue);
//     }
// }


//       }
  
   
  
// });
    // function displaySearchResults(vehicles) {
    //   if (vehicles.length === 0) {
    //     previewContent.textContent = 'No matching vehicles found.';
    //     return;
    //   }
  
    //   const tr = document.createElement('td');
    //   vehicles.forEach(vehicle => {
    //     const tr = document.createElement('td');
    //     td.textContent = `${vehicle.driverName} - ${vehicle.carType} - ${vehicle.carNumber}`;
    //     tr.appendChild(td);
    //   });
  
    //   previewContent.innerHTML = '';
    //   previewContent.appendChild(tr);
    // }


    