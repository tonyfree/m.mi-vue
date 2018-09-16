/* eslint-disable */
import Mock from 'mockjs'

let orderCheckout = Mock.mock({
  "code": 0,
  "result": "ok",
  "description": "success",
  "data": {
    "cartlist": {
      "items|3": [
        {
          "goodsId": "@id",
          "image_url": "@order(//i1.mifile.cn/a1/pms_1528719455.74358029.jpg,//i1.mifile.cn/a1/pms_1501236937.96732594.jpg,//i1.mifile.cn/a1/pms_1527060327.66235934.jpg)",
          "num": "@order(2,1,1)",
          "short_name": "@order(红米6A 全网通版 2GB内存 16GB 樱花粉,米粉卡日租卡,小米电视4C 32英寸 黑色 32英寸)",
          "subtotal": "@order(1198,0,899)"
        }
      ]
    },
    "paymethod|7": [
      {
        "checked": "@order(0,0,1,0,0,0,0)",
        "subtitle": "@order(,支付订单，赢1999元红包,绑新卡支付，享最高立减99元,,,新用户首单享6期免息,)",
        "type": "@order(weixin_wap,alipaywap,micash_wap,unionpaywap,bestpay_wap,mifinanceinstal_m,antinstal_m)",
        "value": "@order(微信支付,支付宝,小米钱包,银联支付,翼支付,小米分期,花呗分期)"
      }
    ],
    "productMoney": "2599",
    "total": 2,
    "address": {
      "address_id": "@id",
      "consignee": "tony",
      "tel": "131****5678",
      "province": "北京",
      "city": "北京市",
      "district": "东城区",
      "area": "安定门街道",
      "address": "程序员之家",
      "zipcode": "100011"
    }
  }
})

let orderList = Mock.mock({
  "code": 0,
  "result": "ok",
  "description": "success",
  "data": {
    "list|2": [
      {
        "order_id": "@id",
        "order_status": "@order(3,39)",
        "goods_amount": "@order(6077.00,1949.00)",
        "add_time": "@datetime('yyyy/MM/dd  HH:mm:ss')",
        "order_status_info": "@order(等待付款,已退款)",
        "product|3": [
          {
            "goods_id": "@id",
            "image_url": "@order(//i1.mifile.cn/a1/pms_1527060327.66235934!180x1800.jpg,//i1.mifile.cn/a1/pms_1527735134.03584233!180x1800.jpg,//i1.mifile.cn/a1/pms_1501236937.96732594!180x1800.jpg)",
            "product_name": "@order(小米电视4C 32英寸 黑色 32英寸,小米8 全网通版 6GB内存 64GB 黑色,米粉卡日租卡)",
            "product_count": "@order(1,2,1)"
          }
        ]
      }
    ]
  }
})

let orderView = Mock.mock({
  "code": 0,
  "result": "ok",
  "description": "success",
  "data": {
    "order_id": "@id",
    "order_status": "3",
    "consignee": "tony",
    "country": "中国",
    "province": "北京",
    "city": "北京市",
    "district": "东城区",
    "area": "安定门街道",
    "address": "程序员之家",
    "tel": "131****5678",
    "best_time": "不限送货时间",
    "invoice_title": "个人",
    "invoice_type": "4",
    "invoice_type_name": "电子发票",
    "original_price": "6097",
    "goods_amount": "6077",
    "reduce_price": "20",
    "shipment_expense": "0",
    "add_time": "@datetime('yyyy/MM/dd HH:mm:ss')",
    "product|3": [
      {
        "goods_id": "@id",
        "image_url": "@order(//i1.mifile.cn/a1/pms_1527060327.66235934!180x1800.jpg,//i1.mifile.cn/a1/pms_1527735134.03584233!180x1800.jpg,//i1.mifile.cn/a1/pms_1501236937.96732594!180x1800.jpg)",
        "mode": 0,
        "product_name": "@order(小米电视4C 32英寸 黑色 32英寸,小米8 全网通版 6GB内存 64GB 黑色,米粉卡日租卡)",
        "product_count": "@order(1,2,1)",
        "price": "@order(899,2599,0)",
        "subtotal": "@order(899,5198,0)"
      }
    ],
    "order_status_info": {
      "trace|5": [
        {
          "info": "",
          "text": "@order(下单,付款,配货,出库,交易成功)",
          "time": "@order(2018/09/16  10:31,,,,)"
        }
      ],
      "info": "等待付款"
    }
  }
})

export {
  orderCheckout,
  orderList,
  orderView
}
