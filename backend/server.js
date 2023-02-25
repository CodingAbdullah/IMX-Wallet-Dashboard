require("dotenv").config({ path : '.env'});
const express = require("express");
const app = express();

// Adding PORT for communication
app.listen(process.env.PORT || 8080, () => {
    console.log("Listening to PORT " + process.env.PORT);
});