const express = require('express')
const Book = require('./book')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const bookRouter = express.Router()
app.use('/api', bookRouter)

// lista inițială de cărți
let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Asimov")
]

// ------------------------
//      GET + POST
// ------------------------
bookRouter.route('/books')

    // GET toate cărțile + filtrare după genre
    .get((req, res) => {
        let filteredBooks = []

        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        } else {
            filteredBooks = books
        }

        res.json(filteredBooks)
    })

    // POST adaugă o carte nouă
    .post((req, res) => {
        let newBook = new Book(
            req.body.id,
            req.body.name,
            req.body.genre,
            req.body.author
        )

        books.push(newBook)
        return res.json(newBook)
    })


// ------------------------
//      PUT + DELETE
// ------------------------
bookRouter.route('/books/:bookId')

    // PUT modifică o carte
    .put((req, res) => {
        let bookModif = books.find(e => e.id === Number(req.params.bookId))

        if (!bookModif) {
            return res.status(404).json({ error: "Cartea nu a fost găsită" })
        }

        bookModif.name = req.body.name
        bookModif.genre = req.body.genre
        bookModif.author = req.body.author

        return res.json(bookModif)
    })

    // DELETE șterge cartea
    .delete((req, res) => {
        let index = books.findIndex(e => e.id === Number(req.params.bookId))

        if (index === -1) {
            return res.status(404).json({ error: "Cartea nu a fost găsită" })
        }

        let deletedBook = books.splice(index, 1)
        return res.json(deletedBook[0])
    })


// ------------------------
//      DEFAULT ROUTE
// ------------------------
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
