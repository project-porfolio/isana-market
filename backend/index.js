const express = require("express");
const cors = require("cors");
const multer = require("multer");
const uploadFile = require("./middleware/uploadFile")
const port = 3300;

const sequelize = require("./db.config");
sequelize.sync().then(() => console.log("database ready!"));

const userEndpoint = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use(uploadFile)
app.use("/users", userEndpoint);

app.use((err,req, res, next) => {
    if(err instanceof multer.MulterError) {
        if(err.code === "LIMIT_FILE_SIZE") {
            err.message = "max size file is 1MB";
        }
    }
    console.log(err);
    res.status(500).json(err);
})


app.listen(port, () => console.log(`running server on port ${port}`));

// console.log("test server");
