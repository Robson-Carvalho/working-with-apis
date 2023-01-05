# Estudando APIs com o NodeJS


Para que nosso server consuma informações em JSON pelo body é necessário utilizarmos o middleware, express.json(), o qual irá receber primeiro qualquer informação enviada pelo body params e depois essas informações poderam ser tratadas pelo nosso código.

```js
const express = require("express");
const app = express();
const port = 3000;


// middleware => para que nosso server receba informações pelo body em JSON deve-se usar esse middleware
app.use(express.json());

app.listen(port, () => {
	console.log(`Server running in http://localhost:${port}`);
});

```

## Métodos HTTPs que utilizam o Body Params

* POST
* PUT
* PATCH

Exemplo do uso do Body Params:

```js
// Parâmetro body => Body params
app.post("/post", (req, res) => {
	dataBase.unshift(req.body.name);
	res.json({ content: dataBase });
});
;
```

## Route Params

No Route Params passamos os dados pela URL, na seguinte estrutura. 👇 <br> http://localhost:3000/delete/0
<br>
Vamos receber as informações

Exemplo de uso do Route Params no NodeJs:
```js
// Parâmetro  => Route params
app.delete("/delete/:id", (req, res) => {
	dataBase.splice(req.params.id, 1);
	res.json({ content: dataBase });
});
```
## Query Params

No Query Params passamos os dados pela URL, na seguinte estrutura. 👇 <br> http://localhost:3000/?name=Robson&?city=Governador Mangabeira&?age=18
<br>
Vamos receber as informações

```json
{
	"name": "Robson",
	"city": "Governador Mangabeira",
	"age": 18
}
```

Exemplo de uso do Query Params no NodeJS
```js
app.get("/", (req, res) => {
	res.send({ content: req.query });
});
```
