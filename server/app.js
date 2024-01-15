const express = require("express");
const cors = require("cors");
const tripsRoutes = require("./routes/trip.routes");
const userRoutes = require("./routes/user.routes");
const path = require("path");
const mailRoutes = require("./routes/mail.routes");


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use("/api/v1/trips", tripsRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/mail", mailRoutes);


app.get("/test", (req, res) => {
    res.json({ msg: "works properly" });
});

// app.get("*",()=>{

// });
/* Global error handler */
app.use((error, req, res, next) => {
    console.log(error);
    return res.status(400).send({ msg: error.message });
});


module.exports.app = app;