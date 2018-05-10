
import db from '../database';

db.con(function (connect) {
    connect.query('SELECT * FROM user WHERE useracAccount = ', "123456", function (err, result) {
        if (err) {
            console.log("select username:" + username + " error, the err information is " + err);
            return callback(err);
        }
        console.log(result);
    })
}) ;