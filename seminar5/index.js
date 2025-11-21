import { nume, salut } from "./util.js"

// PAS 1
document.addEventListener("DOMContentLoaded", () => {
    const pas1Div = document.getElementById('pas1Output')
    if(pas1Div) pas1Div.innerHTML = `<p>${nume}</p><p>${salut("Andrei")}</p>`
})

const apiUrl = 'http://localhost:8000/api/'

//PAS 3 + 6
async function get(url){ return (await axios.get(url)).data }
async function post(url, body){ return (await axios.post(url, JSON.stringify(body), {headers:{'Content-Type':'application/json'}})).data }

async function loadTable(){
    const tableDiv = document.getElementById('tableData')
    if(!tableDiv) return
    let data = await get(apiUrl+'getList')
    let html = "<table border='1'><tr><th hidden>Id</th><th>Name</th><th>Age</th></tr>"
    for(let item of data) html += `<tr><td hidden>${item.id}</td><td>${item.name}</td><td>${item.age}</td></tr>`
    html += "</table>"
    tableDiv.innerHTML = html
}

async function sendData(){
    const name = document.getElementById('inputName').value
    const age = document.getElementById('inputAge').value
    if(!name || !age){ alert('Enter name and age'); return }
    await post(apiUrl+'postList', {name, age})
    loadTable()
    document.getElementById('inputName').value = ''
    document.getElementById('inputAge').value = ''
}

async function getById(){
    const id = document.getElementById('inputId').value
    const div = document.getElementById('resultById')
    if(!id){ alert('Enter ID'); return }
    try{
        const data = await get(apiUrl+'getById/'+id)
        div.innerHTML=`ID: ${data.id}, Name: ${data.name}, Age: ${data.age}`
    }catch{
        div.innerHTML=`<p style="color:red">Resource not found</p>`
    }
}

//PAS 4 + PAS 5
window.onload = () => {
    // PAS 4: eveniment custom
    const button = document.getElementById('myBtn')
    if(button){
        const customEvent = new Event('myCustomEvt')
        const handleCustomEvent = () => console.log('Evenimentul custom a fost declanșat!')
        const handleClick = () => {
            console.log('Butonul a fost apăsat!')
            document.dispatchEvent(customEvent)
        }
        button.addEventListener('click', handleClick)
        document.addEventListener('myCustomEvt', handleCustomEvent)
    }

    // PAS 5: Agenda contacte
    const contactForm = document.getElementById('contactForm')
    const tableBody = document.getElementById('contactsBody')
    if(contactForm && tableBody){
        contactForm.onsubmit = (e) => {
            e.preventDefault()
            const name = document.getElementById('name').value
            const phone = document.getElementById('phone').value
            if(name && phone){
                const row = document.createElement('tr')
                row.innerHTML = `<td>${name}</td><td>${phone}</td>`
                tableBody.appendChild(row)
                contactForm.reset()
            }
        }
    }

    // PAS 3: încarcă tabelul de persoane
    loadTable()

    // Expune funcțiile global pentru butoanele HTML
    const addBtn = document.getElementById('addPersonBtn')
    if(addBtn) addBtn.onclick = sendData

    const getBtn = document.getElementById('getByIdBtn')
    if(getBtn) getBtn.onclick = getById
}
