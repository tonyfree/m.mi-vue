/* eslint-disable */
import Mock from 'mockjs'

let navList = Mock.mock({
  "status": 200,
  "message": "",
  "data": {
    "list|8-10": [
      {
        "page_id": "@id",
        "name": "@order('推荐','618狂欢','智能','电视','电脑','手机','双摄','全面屏','生活周边','盒子')"
      }
    ]
  }
})

let homePage = Mock.mock({
  "status": 200,
  "message": "",
  "data": {}
})

export {
  navList,
  homePage
}