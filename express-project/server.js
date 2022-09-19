const express = require('express')
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express()

const PORT = 3000

app.use((req, res, next) => {
	const start = Date.now()
	const delta = Date.now() - start
	next()
	console.log(`${req.method} ${req.baseUrl}/${req.url} ${delta}ms`)
})

app.use(express.json())

app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`)
})
