const express = require('express');
const cors = require('cors');
const reviews = require('./api/reviewsRoute');
require('./index');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews", reviews);
app.use("*", (req, res) => res.status(404).json({error: "Not found.."}));

app.listen(port, () => {
    console.log(`Listening server on port: http://localhost:${port}`);
});
