const express = require("express");
const router = express.Router();
const timeBL = require("../models/timerBL");

router.get("/timerData", (req, resp) => {
    timeBL.getTimerData().then((data) => {
        let timerData = resp.json(data);
        return timerData;
    });
});

router.post("/addTimerData", async(req, resp) => {
    let obj = req.body;

    let addTimerData = await timeBL.addTimerData(obj);

    if (addTimerData !== "USER EXIST") {
        console.log(addTimerData);
        return resp.json(addTimerData);
    }
});

router.put("/:id", (req, resp) => {});

router.delete("/:id", (req, resp) => {});

module.exports = router;