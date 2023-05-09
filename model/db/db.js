module.exports = function db(sussess, err) {
    const mongoose = require('mongoose')
    const { DBHOST, DBPORT, DBNAME } = require("../config/config")
    if (!err) { err = () => console.log('连接失败！') }
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
    mongoose.connection.on('open', sussess)
    mongoose.connection.once('error', err)
    mongoose.connection.once('close', () => console.log('连接关闭！'))
}