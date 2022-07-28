const express = require("express");
const router = express.Router();
const repBL = require("../models/reportBL");

router.get("/", (req, resp) => {
    repBL.getAllData().then((data) => {
        let allData = resp.json(data);
        return allData;
    });
});

router.post("/addData", async(req, resp) => {
    let obj = req.body;

    let addData = await repBL.addData(obj);

    if (addData !== "USER EXIST") {
        console.log(addData);
        return resp.json(addData);
    }
});

router.put("/:id", (req, resp) => {});

router.delete("/:id", (req, resp) => {});

module.exports = router;