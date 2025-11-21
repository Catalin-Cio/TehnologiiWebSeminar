const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

let array = [
    { id: 1, name: "Ionuț", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
]

app.get('/api/getList', (req, res) => res.json(array))
app.post('/api/postList', (req, res) => {
    const el = req.body
    el.id = array.length + 1
    array.push(el)
    res.json(el)
})
app.get('/api/getById/:id', (req, res) => {
    const item = array.find(x => x.id == req.params.id)
    if(item) res.json(item)
    else res.status(404).json({message: "Resource not found"})
})

app.listen(8000, () => console.log("Api is running"))
