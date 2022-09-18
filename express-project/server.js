const express = require('express')

const app = express()

const PORT = 3000

const friends = [
	{
		id: 0,
		name: 'Albert Einstein',
	},
	{
		id: 1,
		name: 'Sir Isaac Newton',
	},
]

app.get('/friends', (req, res) => {
	res.json(friends)
})

app.get('/friends/:id', (req, res) => {
	const id = Number(req.params.id)
	const friend = friends[id]
	if (friend) {
		res.status(200).json(friend)
	} else {
		res.status(404).json({
			error: 'Friend does not exist',
		})
	}
})

app.post('/messages', (req, res) => {
	console.log('Updating messages...')
})

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`)
})
