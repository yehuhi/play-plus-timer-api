const express = require("express");
const router = express.Router();
const authBL = require("../models/authBL");

router.get("/", (req, resp) => {
    authBL.getUserData().then((data) => {
        let userData = resp.json(data);
        return userData;
    });
});

router.post("/userData", async(req, resp) => {
    let obj = req.body;

    let userData = await authBL.getUserData(obj);

    if (userData !== "USER EXIST") {
        console.log('data to return -> ', userData);
        return resp.json(userData);
    }
});

router.put("/:id", (req, resp) => {});

router.delete("/:id", (req, resp) => {});

module.exports = router;