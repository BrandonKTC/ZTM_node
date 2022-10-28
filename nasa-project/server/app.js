require("dotenv").config();
const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(planetsRouter);

app.listen(process.env.PORT, () => {
	console.log(`Listening on : http://localhost:${process.env.PORT}`);
});
