const express = require("express");
const app = express();
const port = 3000;

let dataBase = ["Kira", "Kirito", "Midorya"];

// middleware => para que nosso server receba informações pelo body em JSON deve-se usar esse middleware
app.use(express.json());

app.get("/", (req, res) => {
	return res.send({ content: dataBase });
});

// Parâmetro body => Body params
app.post("/post", (req, res) => {
	dataBase.unshift(req.body.name);
	res.json({ content: dataBase });
});

app.patch("/put", (req, res) => {
	dataBase[req.body.index] = req.body.content;
	res.json({ content: dataBase });
});

// Parâmetro  => Route params
app.delete("/delete/:id", (req, res) => {
	dataBase.splice(req.params.id, 1);
	res.json({ content: dataBase });
});

app.listen(port, () => {
	console.log(`Server running in http://localhost:${port}`);
});
