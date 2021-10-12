const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let friends =["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];

app.get("/api/users", (req, res) => {
    if (req.query.item){
        const filteredItems = friends.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    }else {
        res.status(200).send(friends)
    }
});

app.get("/weather/:temperature", (req,res) => {
    const{temperature} = req.params;
    const phrase = `<h3> It was ${temperature} today!</h3>`;
    res.status(200).send(phrase);
});

app.listen(4000, () => console.log("Server running on port 4000"))
