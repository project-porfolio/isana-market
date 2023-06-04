const express = require("express");
const router = express.Router();
const ModelUser = require("../models/users");
const bycrypt = require("bcrypt");
const passwordCheck = require("../utils/passwordCheck");
const response = require("../utils/response");
const Upload = require("../controller");


//endpoint utama Method Get / Read Data
router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await ModelUser.findOne({ where: { username: username } });

    if (!user) {
      response.error("User not found", req.originalUrl, 404, res);
    }

    response.success(user, "Get all by user", res);
  } catch (err) {
    response.error({ error: err.message }, req.originalUrl, 403, res);
  }
});

//Endpoint Method Post / Create Data
router.post("/", async (req, res) => {
  try {
    const { username, fullname, password } = req.body;

    const encryptedPassword = await bycrypt.hash(password, 5);

    const user = await ModelUser.create({
      username,
      fullname,
      password: encryptedPassword,
    });

    response.success(user, "Data user Added Successfuly", res);
  } catch (err) {
    response.error({ error: err.message }, req.originalUrl, 403, res);
  }
});

//Endpoint Method Post / Login User
router.post("/login", async (req, res) => {
  try{
    const { username, password } = req.body;

  const check = await passwordCheck(username, password);

  if (check.compare === true) {
    res.status(200).json({
      status: 200,
      users: check.userData,
      metadata: "Login Successfuly",
    });
  } else {
    res.status(400).json({
      error: "Username or password are incorect",
    });
  }
  }catch(err){
    response.error({ error: err.message }, req.originalUrl, 403, res);
  }
});

//Endpoint Method Put / Update User Data
router.put("/", async (req, res) => {
  try{
    const { username, fullname, password, passwordBaru } = req.body;
  
    const check = await passwordCheck(username, password);
  
    const encryptedPassword = await bycrypt.hash(passwordBaru, 10);
  
    // res.json({userData})
    if (check.compare === true) {
      const users = await ModelUser.update(
        {
          fullname,
          password: encryptedPassword,
        },
        { where: { username: username } }
      );
      res.status(200).json({
        status: 200,
        users: { updated: users[0] },
        metadata: "Data User Updates Successfuly",
      });
    } else {
      res.status(400).json({
        error: "data invalid",
      });
    }
  }catch(err){
    response.error({ error: err.message }, req.originalUrl, 403, res);
  }
});

//Endpoint Method Delete / Delete Data User
router.delete("/", async (req, res) => {
  try{
    const { username } = req.body;
  
    const user = await ModelUser.destroy({
      where: { username: username },
    });
  
    res.status(200).json({
      data: { Deleted: user[0] },
      metadata: "Data User Deleted Successfuly!",
    });
  }catch(err){
    response.error({ error: err.message }, req.originalUrl, 403, res);
  }
});

router.post("/upload", Upload);

module.exports = router;
