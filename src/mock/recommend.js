/* eslint-disable */
import Mock from 'mockjs'

const recommend = Mock.mock({
  "code": 0,
  "result": "ok",
  "description": "success",
  "data": {
    "recommend_list|12": [
      {
        "product_id": "8154",
        "commodity_id": "8154",
        "name": "小米6X 4GB+32GB",
        "image_url": "//i8.mifile.cn/b2c-mimall-media/cf8df89713342d51d01bff5ed1bced57.jpg",
        "action": {
          "type": "product",
          "path": "@id",
          "log_code": "recom_product_12-0#eid=24:0:0:0:0:0:0:0:0:0&tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&page=product&pid=8154",
          "recommend_code": "recom_product_12-0#eid=24:0:0:0:0:0:0:0:0:0&tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&page=product&pid=8154"
        },
        "big_image_url": "",
        "price": "1399",
        "market_price": "1499",
        "product_desc": "前后2000万，拍人更美",
        "trace_id": "DetailRec-78cpaAwFqwUTL0eVFuqCzg==",
        "eid": "24:0:0:0:0:0:0:0:0:0"
      }
    ],
    "title": "为你推荐"
  }
})

export {
  recommend
}