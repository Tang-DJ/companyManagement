import mysql from 'mysql'
//调用mysql模块

//***使用连接池操作数据库
let pool=mysql.createPool({
    host:'localhost',//主机
    user:'root',//mysql认证的用户名
    password:'12345678',//mysql用户密码
    database:'company',//数据库名
    port:'3306'//端口号
});

let db = {};
db.con = function (callback) {   //callback是回调函数，连接建立后的connection作为其参数
    pool.createConnection(function (err, connection) {
        console.log("connect start...");
        if (err) {      //对异常进行处理
            throw err;  //抛出异常
        } else {
            callback(connection);   //如果正常的话，执行回调函数（即请求）
        }
        connection.release();   //释放连接
        console.log("connect end...")
    })
};

export default db;