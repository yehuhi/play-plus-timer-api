const dataDB = require("../models/reportModel");

const getAllData = async() => {
    return new Promise((resolve, reject) => {
        dataDB.find({}, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const addData = (obj) => {
    console.log("OBJ Data --------> ", obj);
    return new Promise((resolve, reject) => {
        let newData = dataDB({
            date: obj[obj.length - 1].date,
            started_at: obj[obj.length - 1].started_at,
            ended_at: obj[obj.length - 1].ended_at,
            total_hours_with_break: obj[obj.length - 1].total_hours_with_break,
            total_hours_without_break: obj[obj.length - 1].total_hours_without_break,
            break_time: obj[obj.length - 1].break_time,
        });

        newData.save((err, data) => {
            if (err) {
                reject(err);
            } else {
                console.log(data);
                resolve("200");
            }
        });
    });
};

module.exports = {
    getAllData,
    addData,
};