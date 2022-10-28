const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
	console.log("Get All Planets call");
	res.status(200).json(planets);
}

module.exports = {
	getAllPlanets,
};
