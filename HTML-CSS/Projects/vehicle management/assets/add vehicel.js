import {drawTable} from './drawtable.js';
// (() => {

//     const userForm = document.getElementById('userForm')

//     const formSubmit = (e) => {
//         e.preventDefault()

//         const driverName = document.getElementById('driverName')
//         const vehicelType = document.getElementById('vehicelType')
//         const licensePlate = document.getElementById('licensePlate')
//         const fuelLevel = document.getElementById('fuelLevel')
//         const currentMileage = document.getElementById('currentMileage')
//         const phoneNumber = document.getElementById('phoneNumber')
//         const lastService = document.getElementById('lastService')
//         const nextService = document.getElementById('nextService')
//         const complaintsOne = document.getElementById('complaintsOne')
//         const complaintsTwo = document.getElementById('complaintsTwo')
//         const complaintsThree = document.getElementById('complaintsThree')
//         const ComplaintsFour = document.getElementById('ComplaintsFour')
//         const spareTyre = document.getElementById('spareTyre')
//         const fireBox = document.getElementById('fireBox')
//         const fireExtinguisher = document.getElementById('fireExtinguisher')
//         const jackBar = document.getElementById('jackBar')
//         const Jerk = document.getElementById('Jerk')
//         const wherlSpanner = document.getElementById('wherlSpanner')
//         const logBok = document.getElementById('logBok')
//         const battery = document.getElementById('battery')
//         const approval = document.getElementById('approval')


//         if (driverName && vehicelType && licensePlate && phoneNumber) {

//             saveData({
//                 driverName: driverName.value, 
//                 vehicelType: vehicelType.value, 
//                 licensePlate: licensePlate.value, 
//                 fuelLevel: fuelLevel.value, 
//                 currentMileage: currentMileage.value, 
//                 lastService: lastService.value,
//                 nextService: nextService.value, 
//                 complaintsOne: complaintsOne.value, 
//                 complaintsTwo: complaintsTwo.value, 
//                 complaintsThree: complaintsThree.value, 
//                 ComplaintsFour: ComplaintsFour.value, 
//                 spareTyre: spareTyre.value,
//                 fireBox: fireBox.value, 
//                 fireExtinguisher: fireExtinguisher.value,
//                 jackBar: jackBar.value, 
//                 Jerk: Jerk.value, 
//                 wherlSpanner: wherlSpanner.value, 
//                 logBok: logBok.value, 
//                 battery: battery.value, 
//                 approval: approval.value
//             })

//             drawTable()

//             driverName.value = ''
//             vehicelType.value = ''
//             licensePlate.value = ''
//             phoneNumber.value = ''

//             alert('User data is saved successfully !')

//         } else {
//             alert('Some fields are required!')
//         }
//     }


// // ========= Save Data to local storage
// // ========= Save Data to local storage

// userForm.addEventListener('submit', formSubmit)

// const saveData = (data) => {
//     let result = window.localStorage.getItem('userData')
//     if (result) {
//         const oldData = JSON.parse(result)
//         oldData.push(data)
//         window.localStorage.removeItem('userData')
//         window.localStorage.setItem('userData', JSON.stringify(oldData))
//     } else {
//         const userData = [data]
//         window.localStorage.setItem('userData', JSON.stringify(userData))
//     }
// }
// // ======== Delate data from local storage
// // ======== Delate data from local storage


// const deleteDataFromLocalStorage = (value) => {
//     let userdata = window.localStorage.getItem('userData')
//     if (userdata) {
//         userdata = JSON.parse(userdata)
//         const result = []
//         for (let i = 0; i < userdata.length; i++) {
//             const item = userdata[i]
//             if (JSON.stringify(item) != value) {
//                 result.push(item)
//             }
//         }
//         window.localStorage.removeItem('userData')
//         window.localStorage.setItem('userData', JSON.stringify(result))
//         drawTable()
//     }
// }

// const deleteRecord = (e) => {
//     e.preventDefault()
//     console.log(e.target.dataset.userdata)
//     deleteDataFromLocalStorage(e.target.dataset.userdata)
// }

// const buttonEvents = () => {
//     const userTableBtns = document.getElementsByClassName('userTableBtn')
//     for (let i = 0; i < userTableBtns.length; i++) {
//         const element = userTableBtns[i]
//         element.addEventListener('click', deleteRecord)
//     }
// }


// // ======== Draw table to inner html
// // ======== Draw table to inner html


// const drawTable = () => {
//     let html = ''
//     let data = window.localStorage.getItem('userData')
//     if (data) {
//         data = JSON.parse(data)
//         if (Array.isArray(data) && data.length > 0) {
//             for (let i = 0; i < data.length; i++) {
//                 const item = data[i]
//                 console.log (item)
//                 html += (String.raw`
//                     <tr>
//                         <td> ${i + 1} </td>
//                         <td> ${item.product} </td>
//                         <td> ${item.quantity} </td>
//                         <td> ₵ ${item.price} </td>
//                         <td id="total">  ${item.quantity * (item.price) } </td>
//                         <td>
//                             <button type="button" class="btn btn-danger userTableBtn" data-userdata='${JSON.stringify(item)}'> Delete </button>
//                         </td>
//                     </tr>
//                 `)
//             }
//         } else {
//             html = `<tr>
//                     <td colspan="7"> No data found </td>
//                      </tr> `
//         }

//     } else {
//         html = `
//             <tr>
//                 <td colspan="7"> No data found </td>
//             </tr>
//         `
//     }

        
// } 

// drawTable()



// })


   
const userForm = document.querySelector('#userForm');
console.log(userForm);

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const driverName = document.getElementById('driverName');
            const vehicelType = document.getElementById('vehicelType');
            const licensePlate = document.getElementById('licensePlate');
            const fuelLevel = document.getElementById('fuelLevel');
            const currentMileage = document.getElementById('currentMileage');
            const phoneNumber = document.getElementById('phoneNumber');
            const lastService = document.getElementById('lastService');
            const nextService = document.getElementById('nextService');
            const complaintsOne = document.getElementById('complaintsOne');
            const complaintsTwo = document.getElementById('complaintsTwo');
            const complaintsThree = document.getElementById('complaintsThree');
            const ComplaintsFour = document.getElementById('ComplaintsFour');
            const spareTyre = document.getElementById('spareTyre');
            const fireBox = document.getElementById('fireBox');
            const fireExtinguisher = document.getElementById('fireExtinguisher');
            const jackBar = document.getElementById('jackBar');
            const Jerk = document.getElementById('Jerk');
            const wherlSpanner = document.getElementById('wherlSpanner');
            const logBok = document.getElementById('logBok');
            const battery = document.getElementById('battery');
            const approval = document.getElementById('approval');
   
    if (driverName && vehicelType && phoneNumber) {

        saveData({
            driverName: driverName.value, 
            vehicelType: vehicelType.value,
            licensePlate: licensePlate.value, 
            phoneNumber: phoneNumber.value,
            fuelLevel: fuelLevel.value, 
            currentMileage: currentMileage.value, 
            lastService: lastService.value,
            nextService: nextService.value, 
            complaintsOne: complaintsOne.value, 
            complaintsTwo: complaintsTwo.value, 
            complaintsThree: complaintsThree.value, 
            ComplaintsFour: ComplaintsFour.value, 
            spareTyre: spareTyre.value,
            fireBox: fireBox.value, 
            fireExtinguisher: fireExtinguisher.value,
            jackBar: jackBar.value, 
            Jerk: Jerk.value, 
            wherlSpanner: wherlSpanner.value, 
            logBok: logBok.value, 
            battery: battery.value, 
            approval: approval.value              
        
        })

        drawTable()

        driverName.value = ''
        vehicelType.value = ''
        phoneNumber.value = ''
        
    } else {
        alert('Some fields are required!')
    }
});

// ========= Save Data to local storage
// ========= Save Data to local storage

//

const saveData = (data) => {
    let result = window.localStorage.getItem('userData')
    if (result) {
        const oldData = JSON.parse(result)
        oldData.push(data)
        window.localStorage.removeItem('userData')
        window.localStorage.setItem('userData', JSON.stringify(oldData))
    } else {
        const userData = [data]
        window.localStorage.setItem('userData', JSON.stringify(userData))
    }
}


// ======== Delate data from local storage
// ======== Delate data from local storage


// const deleteDataFromLocalStorage = (value) => {
//     let userdata = window.localStorage.getItem('userData')
//     if (userdata) {
//         userdata = JSON.parse(userdata)
//         const result = []
//         for (let i = 0; i < userdata.length; i++) {
//             const item = userdata[i]
//             if (JSON.stringify(item) != value) {
//                 result.push(item)
//             }
//         }
//         window.localStorage.removeItem('userData')
//         window.localStorage.setItem('userData', JSON.stringify(result))
//         drawTable()
//     }
// }

// const deleteRecord = (e) => {
//     e.preventDefault()
//     console.log(e.target.dataset.userdata)
//     deleteDataFromLocalStorage(e.target.dataset.userdata)
// }

// const buttonEvents = () => {
//     const userTableBtns = document.getElementsByClassName('userTableBtn')
//     for (let i = 0; i < userTableBtns.length; i++) {
//         const element = userTableBtns[i]
//         element.addEventListener('click', deleteRecord)
//     }
// }

// ======== Draw table to inner html
// ======== Draw table to inner html




    // ============== Find Grand Total =========
    // ============== Find Grand Total =========

        // const userTableBody = document.getElementById('userTableBody')
        // userTableBody.innerHTML = html
        

        //     let table = document.getElementById('userTableBody'),
        //     totalValue = 0;
        //     for (let i = 0; i < table.rows.length; i++) {
        //     totalValue = totalValue + parseFloat(table.rows[i].cells[4].innerHTML);
        // }
        
        // document.getElementById("finaltotal").innerHTML = "Grand Total: ₵" + totalValue;
        // console.log(totalValue);
        


