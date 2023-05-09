var jwt = require('jsonwebtoken');
const { SECRET } = require('../model/config/config')
module.exports = (req, res, next) => {
    const token = req.get('token')
    if (!token) {
        return res.json({
            code: '0001',
            msg: 'token为空!',
        })
    }
    jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return res.json({
                code: '0002',
                msg: '无效token!',
            })
        }
        req.user = user
        next()
    })
}