<template>
  <div class="app-shell app-shell-bottom-navigation">
    <div class="app-view-wrapper">

      <div class="container app-view app-view-with-header">
        <div class="page-wrap">
          <div class="address-manager">
            <div class="address-manager-edit">
              <ul class="ui-list">
                <li class="ui-list-item">
                  <div class="label">收货人：</div>
                  <div class="ui-input">
                    <input placeholder="真实姓名" name="consignee" maxlength="15" type="text" autocomplete="off">
                  </div>
                </li>
                <li class="ui-list-item">
                  <div class="label">手机号码：</div>
                  <div class="ui-input">
                    <input placeholder="手机号" name="tel" maxlength="11" id="tel" type="tel" autocomplete="off">
                  </div>
                </li>
                <li class="ui-list-item">
                  <div class="label">所在地区：</div>
                  <div class="ui-input">
                    <input placeholder="省 市 区 街道信息" name="pcd" maxlength="20" type="text" readonly="readonly">
                  </div>
                </li>
                <li class="ui-list-item">
                  <div class="label">详细地址：</div>
                  <div class="ui-input">
                    <input placeholder="详细地址" id="address" name="address" maxlength="40" type="text" autocomplete="off">
                  </div>
                </li>
                <li class="ui-list-item">
                  <div class="label">设置为默认地址</div>
                  <label class="ui-cell">
                    <input name="is_default" type="checkbox">
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="add">
          <a class="btn ui-button ui-button-active">
            <span>保存地址</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.address-manager,
.address-manager .ui-list {
  position: relative;
}
.address-manager .ui-list .ui-list-item {
  border-bottom: 1px solid #f6f6f6;
  font-size: 14px;
  overflow: hidden;
  background: #fff;
  padding: 10px 15px;
  display: box;
  display: -webkit-box;
  box-align: center;
  -webkit-box-align: center
}
.address-manager .ui-list .ui-input {
  border: 0;
  box-flex: 1;
  overflow: hidden;
  font-size: 12px;
  width: 100%;
}
.address-manager .ui-list .ui-input input {
  padding: 9px 15px;
  width: 100%;
  -webkit-box-flex: 1;
  box-sizing: border-box;
  font-size: 14px;
  border: 0;
  text-decoration: none;
  outline: 0;
  vertical-align: middle;
}
.address-manager .ui-list .ui-cell {
  display: block;
  box-flex: 1;
  -webkit-box-flex: 1;
  width: 100%;
  text-align: right;
}
[type=checkbox], [type=radio] {
  box-sizing: border-box;
  padding: 0;
}
.add {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1;
}
.add span {
  font-size: 15px;
  color: #fff;
}
</style>
