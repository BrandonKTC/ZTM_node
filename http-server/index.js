const http = require('http')

const PORT = 3000

const server = http.createServer()

friends = [
	{
		id: 0,
		name: 'Nikola Tesla',
	},
	{
		id: 1,
		name: 'Sir Isaac Newton',
	},
	{
		id: 2,
		name: 'Albert Einstein',
	},
]

server.on('request', (req, res) => {
	const items = req.url.split('/')
	if (req.method === 'POST' && items[1] === 'friends') {
		req.on('data', (data) => {
			const friend = data.toString()
			console.log('Request:', friend)
			friends.push(JSON.parse(friend))
		})
		req.pipe(res)
	} else if (req.method === 'GET' && items[1] === 'friends') {
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		if (items.length === 3) {
			const friendIndex = Number(items[2])
			res.end(JSON.stringify(friends[friendIndex]))
		} else {
			res.end(JSON.stringify(friends))
		}
	} else if (items[1] === 'messages') {
		res.setHeader('Content-Type', 'text/html')
		res.write(`<html>
  <body>
  <ul>
  <li>Hello Isaac!</li>
  <li>What are your thoughts on astronomy?</li>
  </ul>
  </body>
  </html>`)
		res.end()
	} else {
		res.statusCode = 404
		res.setHeader('Content-Type', 'text/html')
		res.write('<h1>Page Not Found</h1><h3>Error 404 Page Not Found</h3>')
		res.end()
	}
})

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
