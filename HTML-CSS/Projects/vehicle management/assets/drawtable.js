

var drawTable = () => {
    let userBody = document.getElementById('userTableBody')
    console.log(userBody)
  
    html = ''
    let data = window.localStorage.getItem('userData')
    if (data) {
        data = JSON.parse(data)
        if (Array.isArray(data) && data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const item = data[i]
                console.log (item)
                userBody += (String.raw`
                    <tr>
                        <td> ${i + 1} </td>
                        <td> ${item.driverName} </td>
                        <td> ${item.vehicelType} </td>
                        <td> ₵ ${item.phoneNumber} </td>
                        <td>
                            <button type="button" class="btn btn-danger userTableBtn" data-userdata='${JSON.stringify(item)}'> Delete </button>
                        </td>
                    </tr>
                `)
            }
        } else {
            userBody = `<tr>
                    <td colspan="7"> No data found </td>
                     </tr> `
        }

    } else {
        userBody = `<tr>
                <td> No data found </td>
                 </tr> `
    }
}
drawTable()
export {drawTable};