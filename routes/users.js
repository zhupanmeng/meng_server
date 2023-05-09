var express = require('express');
var router = express.Router();
const UserModel = require('../model/models/UserModel')
const { SECRET } = require('../model/config/config')
const checkTokenMidware = require('../midware/checkTokenMidware')
var jwt = require('jsonwebtoken');
var md5 = require('md5');

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
      res.json({
        code: '0000',
        msg: '登录成功',
        data: {
          token
        }
      })
      return;
    }
    res.json({
      code: '0001',
      msg: '用户名或密码错误',
    })
  }, err => {
    res.json({
      code: '0002',
      msg: '出错了',
    })
  })
})

router.post('/register', (req, res) => {
  const { username, password } = req.body
  UserModel.create({ username, password: md5(password) }).then((data) => {
    res.json({
      code: '0000',
      msg: '注册成功',
      data
    })
  }, err => {
    res.json({
      code: '0001',
      msg: '注册失败',
    })
  })
})
router.get('/test', checkTokenMidware, (req, res) => {
  res.json({
    code: '0000',
    msg: 'token正确',
    data: req.user
  })
})

module.exports = router;
