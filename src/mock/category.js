/* eslint-disable */
import Mock from 'mockjs'

const category = Mock.mock({
  "status": 200,
  "message": "ok",
  "data": {
    "lists|18": [
      {
        "category_name": "@order('新品','手机','电脑')",
        "category_list|2-3": [
          {
            "category_title": "@order('小米手机','红米手机','手机配件')",
            "category_group|3-9": [
              {
                "img_url": "@img(52x52,@color)",
                "product_name": "@order('小米8','小米8 SE','小米MIX 2S')",
                "category_id": "@id"
              }
            ]
          }
        ],
        "category_img": "@img(260x104,@color)",
        "category_id": "@id"
      }
    ]
  }
})

export {
  category
}
