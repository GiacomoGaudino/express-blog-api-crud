const express = require('express')
const app = express()
const PORT = 3000
const postRouter = require('./routers/posts')
const logTime = require('./middleware/logTime')
const serverError = require('./middleware/serverError')
const notFound = require('./middleware/notFound')

app.use(express.static('public'))
app.use(express.json())
app.use(logTime)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.json('Welcome to Posts server')
})

app.use('/', postRouter)

app.use(serverError)
app.use(notFound)

