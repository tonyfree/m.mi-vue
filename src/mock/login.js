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

export {
  login,
  logout,
  getCode
}