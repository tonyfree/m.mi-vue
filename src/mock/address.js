/* eslint-disable */
import Mock from 'mockjs'

let addressList = Mock.mock({
  "code": 0,
  "data|2": [
    {
      "province_id": "@order(2,20)",
      "province": "@order(北京,广东)",
      "city_id": "@order(36,236)",
      "city": "@order(北京,珠海)",
      "district_id": "@order(381,2226)",
      "district": "@order(朝阳区,香洲区)",
      "area_id": "@order(381002,2226001)",
      "area": "@order(奥运村街道,保税区)",
      "zipcode": "@order(100020,519000)",
      "address": "@order(测试地址数据,华发国际花园)",
      "consignee": "tony",
      "tel": "131****5678",
      "type": "common",
      "addrId": "",
      "address_id": "@id",
      "tag": "api",
      "need_edit": 0,
      "is_default": false,
      "is_invalid": 0
    }
  ],
  "result": "ok"
})

let addressAdd = Mock.mock({
  "code": 0,
  "data": {
    "result": "@id"
  },
  "result": "ok"
})

let addressSave = Mock.mock({
  "code": 0,
  "data": {
    "result": true
  },
  "result": "ok"
})

let addressView = Mock.mock({
  "code": 0,
  "data": {
    "address_id": "11000000008369815",
    "address_name": "",
    "consignee": "sdfsdf",
    "country": {
      "id": 1,
      "name": "中国"
    },
    "province": {
      "id": 2,
      "name": "北京"
    },
    "city": {
      "id": 36,
      "name": "北京市"
    },
    "district": {
      "id": 377,
      "name": "东城区"
    },
    "area": {
      "id": 377001,
      "name": "安定门街道"
    },
    "address": "123131231",
    "zipcode": "100011",
    "tel": "131****5678",
    "update_time": 1531144443,
    "add_time": 0,
    "used_count": 0,
    "need_edit": false,
    "is_default": 1,
    "is_invalid": false,
    "remark": "default",
    "tag_name": ""
  },
  "result": "ok"
})

let addressDel = Mock.mock({
  "code": 0,
  "data": {
    "result": true
  },
  "result": "ok"
})

export {
  addressList,
  addressAdd,
  addressSave,
  addressView,
  addressDel
}