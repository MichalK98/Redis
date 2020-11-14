const express = require('express');
const app = express();

const port = 8080;

const users = require("./modules/user");

app.get('/', (req, res) => {
    res.sendStatus(200)
});

app.get('/users/:id', async (req, res) => {
    let user = await users.getUser(req.params.id);
    res.json({ user });
})

app.listen(port, () => {
    console.log('http://localhost:' + port);
})
