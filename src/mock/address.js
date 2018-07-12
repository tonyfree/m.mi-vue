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
    "address_id": "@id",
    "consignee": "tony",
    "address": "华发国际花园",
    "zipcode": "100011",
    "tel": "131****5678",
    "is_default": 1,
    "province": "广东",
    "province_id": "@id",
    "city": "珠海",
    "city_id": "@id",
    "district": "香洲区",
    "district_id": "@id",
    "area": "保税区",
    "area_id": "@id"
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

let addressRegion = Mock.mock({
  "code": 0,
  "data|3": [
    {
      "id": "@id",
      "name": "@order(翠香街道,拱北街道,梅华街道)"
    }
  ],
  "result": "ok"
})

export {
  addressList,
  addressAdd,
  addressSave,
  addressView,
  addressDel,
  addressRegion
}