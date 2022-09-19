const model = require('../models/friends.model')

function getFriendById(req, res) {
	const id = Number(req.params.id)
	const friend = model[id]
	if (friend) {
		res.status(200).json(friend)
	} else {
		res.status(404).json({
			error: 'Friend does not exist',
		})
	}
}

function getFriends(req, res) {
	res.json(model)
}

function postFriend(req, res) {
	if (!req.body.name)
		return res.status(400).send({ error: 'You have made a Bad Request' })
	const newFriend = {
		id: model.length,
		name: req.body.name,
	}

	model.push(newFriend)
	res.json(newFriend)
}

module.exports = {
	getFriendById,
	getFriends,
	postFriend,
}
