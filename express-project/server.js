const express = require('express')
const path = require('path')
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000

app.use((req, res, next) => {
	const start = Date.now()
	const delta = Date.now() - start
	next()
	console.log(`${req.method} ${req.baseUrl}/${req.url} ${delta}ms`)
})

app.use('/site', express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
	res.render('index', {
		title: 'My Friends Are VERY Strong',
		caption: 'Basketball is bae!',
	})
})

app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`)
})
