var express = require('express');
var router = express.Router();
const UserModel = require('../model/models/UserModel')
const { SECRET } = require('../model/config/config')
const checkTokenMidware = require('../midware/checkTokenMidware')
var jwt = require('jsonwebtoken');
var md5 = require('md5');
const { send } = require('../Util/utils')

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username, password: md5(password) }).then((data) => {
    if (data) {
      let token = jwt.sign({
        username,
        id: data._id
      }, SECRET, {
        expiresIn: 60 * 60
      })
      send(res, '0000', '登录成功',{token})
      return;
    }
    send(res, '0001', '用户名或密码错误')
  }, err => {
    send(res, '0002', '出错了')
  })
})

router.post('/register', (req, res) => {
  const { username, password } = req.body
  UserModel.create({ username, password: md5(password) }).then((data) => {
    send(res, '0000', '注册成功',{ data })
  }, err => send(res, '0001', '该用户已存在，注册失败'))
})
router.get('/test', checkTokenMidware, (req, res) => {
  send(res, '0000', 'token正确', req.user )
})

module.exports = router;
