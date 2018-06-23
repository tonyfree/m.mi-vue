/* eslint-disable */
import Mock from 'mockjs'

const forRecommend = Mock.mock({
  "code": 0,
  "data": {
    "header": {
      "view_type": "cells_auto_fill",
      "body": {
        "w": 720,
        "h": 120,
        "height": "0",
        "width": "0",
        "items": [
          {
            "w": 720,
            "h": 120,
            "img_url": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg",
            "path_type": "image"
          }
        ],
        "win_prize_action": null,
        "not_win_prize_action": null
      }
    },
    "recom_list|20": [
      {
        "action": {
          "type": "product",
          "path": "7354",
          "log_code": "recom_list_0-1#eid=force_15:0:0:0:0:0:0:0:0:7354&tid=BlankRec-78cpaAwFqwUTL0eVFuqCzg==&page=list&pid=7354",
          "recommend_code": "recom_list_0-1#eid=force_15:0:0:0:0:0:0:0:0:7354&tid=BlankRec-78cpaAwFqwUTL0eVFuqCzg==&page=list&pid=7354"
        },
        "image_url": "//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635.webp",
        "is_multi_price": false,
        "market_price": "799",
        "name": "红米5 16GB",
        "price": "699",
        "product_desc": "<font color='#ff4a00'>「“小米8周年618狂欢”，立减100元，领券再减50元，到手价649元」</font>搭载了玩游戏超给力的高通骁龙处理器，后置12MP旗舰相机，前置柔光自拍，配备5.7英寸全面屏",
        "product_tag": ""
      }
    ],
    "title": "为你推荐"
  },
  "result": "ok"
})

export {
  forRecommend
}