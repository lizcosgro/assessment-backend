const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);



const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune)

const { getQuote } = require('./controller')

app.get("/api/quote", getQuote)

const { getEmotions } = require('./controller')

app.get("/api/emotions", getEmotions)

app.listen(4000, () => console.log("Server running on 4000"));
