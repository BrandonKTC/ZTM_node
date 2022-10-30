require("dotenv").config();
const app = require("./app");
const http = require("http");
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
	await loadPlanetsData();

	server.listen(PORT, () => {
		console.log(`listening on http://localhost:${PORT}`);
	});
}

startServer();
