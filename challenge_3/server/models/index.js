var db = require('../db/index.js').connection

db.connect()

module.exports = {

    users: {
        get: callback => {
            db.query('SELECT * FROM users', (err, result) => {
                if (err) {
                    throw err;
                }
                callback(null, result);
            });
        },
        post: (userInfo, callback) => {
            var username = userInfo.username;
            var email = userInfo.email;
            var password = userInfo.password;
            var address = userInfo.address;
            var city = userInfo.city;
            var state = userInfo.state;
            var zip = userInfo.zip;
            var phone = userInfo.phone;
            var cardnumber = userInfo.cardnumber;
            var expiration = userInfo.expiration;
            var cvv = userInfo.cvv;
            var billzip = userInfo.billzip
            db.query(`INSERT INTO users (username,email,password,address,city,state,zip,phone,cardnumber,expiration,cvv,billzip) VALUES ('${username},${email},${password},${address},${city},${state},${zip},${phone},${cardnumber},${expiration},${cvv},${billzip}')`, (err, result) => {
                if (err) throw err;
                db.query('SELECT * FROM users', (err, allUserInfo) => {
                    if (err) throw err;
                    callback(null, allUserInfo);
                });
            });
        }
    },

};

db.end()