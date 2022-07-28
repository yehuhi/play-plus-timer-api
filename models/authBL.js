const authDB = require("./authModel");

const getUserData = async(obj) => {
    console.log("NOMBRE USUARIO -> ", obj);
    return new Promise((resolve, reject) => {
        // timerDB.find({}, function(err, data) {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve(data);
        //     }
        // });
        let name = obj.userName;
        // name.toLowerCase();
        authDB.findOne({ name: new RegExp("^" + name + "$", "i") },
            function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    });
};

const addTimerData = (obj) => {
    console.log("OBJ TIMER Data --------> ", obj);
    let id = "62e22368f344cd69baad4977";
    return new Promise((resolve, reject) => {
        timerDB.findByIdAndUpdate(
            id, {
                timer: {
                    hour: obj.hour,
                    minutes: obj.minutes,
                    seconds: obj.seconds,
                },
            },
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve("timer Updated");
                }
            }
        );
    });
};

module.exports = {
    getUserData,
    addTimerData,
};