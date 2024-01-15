const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const { app } = require("./app");
const path = require("path");
const { Trip } = require("./models/Trip.model");

// read from enviroment variable
dotenv.config(); //=> { path: "./.env" }
const mongoURL = process.env.MONGO_URL;
// connect to database
const connectToDB = () => {
    mongoose.connect(mongoURL)
        .then((con) => {
            console.log(`connected to database: ${mongoURL}`);
        }).catch((error) => {
            console.error("Error to connect to database");
            console.error(error);
        });
};
connectToDB();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage
}).single('file');


app.post('/api/v1/upload', upload, (req, res) => {
    Trip.create({ image: req.file.filename, tripName: 'Default Trip Name' })
        .then(result => res.json(result))
        .catch(err => console.log(err))
});

app.get('/api/v1/getImages', (req, res) => {
    Trip.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

const PORT = process.env.PORT || 1200;
app.listen(PORT, () => {
    console.log(`the server is running on port: ${PORT}`);
});
