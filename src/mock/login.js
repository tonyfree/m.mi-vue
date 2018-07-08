/* eslint-disable */
import Mock from 'mockjs'

let login = Mock.mock({
  "status": 200,
  "message": "登录成功",
  "data": {}
})

let logout = Mock.mock({
  "status": 200,
  "message": "退出成功",
  "data": {}
})

let getCode = Mock.mock({
  "status": 200,
  "message": "已发送信息",
  "data": {}
})

let userInfo = Mock.mock({
  "code": 0,
  "result": "ok",
  "description": "success",
  "data": {
    "send_order": 1,
    "unpaid_order": 2,
    "user": {
      "email": "",
      "icon": "//s1.mi-img.com/mfsv2/download/fdsc3/p01EqaJOqAcW/Iyi86dNydBoYWa.jpg",
      "mobile": "131****4068",
      "userName": "tony",
      "user_id": 1313124239
    }
  }
})

export {
  login,
  userInfo,
  logout,
  getCode
}