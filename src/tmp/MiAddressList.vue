<template>
  <div class="app-shell app-shell-bottom-navigation">
    <div class="app-view-wrapper">
      <div class="container app-view app-view-with-header">
        <div class="page-wrap">
          <div class="address-manager">
            <div class="address-manager-list">
              <div class="ui-card">
                <ul class="ui-card-item ui-list">
                  <li class="ui-list-item identity">
                    <a href="javascript:;">删除</a>
                    <span class="consignee">tony</span>
                    <span>131****5678</span>
                    <em> [默认]</em>
                  </li>
                  <li class="ui-list-item edit">
                    <p>北京 北京市 朝阳区 奥运村街道</p>
                    <p>测试地址数据</p>
                  </li>
                </ul>
              </div>
              <div class="ui-card">
                <ul class="ui-card-item ui-list">
                  <li class="ui-list-item identity">
                    <a href="javascript:;">删除</a>
                    <span class="consignee">tony</span>
                    <span>131****5678</span>
                  </li>
                  <li class="ui-list-item edit">
                    <p>广东 珠海市 香洲区 保税区</p>
                    <p>华发国际花园</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="add">
          <a href="javascript:;" class="btn ui-button ui-button-active">
            <span>新建地址</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.address-manager {
  position: relative;
  padding-bottom: 50px;
}
.address-manager .ui-card {
  border: 1px solid #f6f6f6;
  overflow: hidden;
  margin: 10px;
  border-radius: 3px;
  background: #fff;
  text-align: left;
}
.address-manager .ui-card .ui-list {
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
}
.address-manager .ui-card .ui-card-item {
  padding: 10px;
}
.address-manager .ui-list .ui-list-item {
  border-bottom: 1px solid #f6f6f6;
  display: block;
  font-size: 14px;
  overflow: hidden;
  background: #fff;
  padding: 10px 15px;
}
.address-manager .identity a {
  float: right;
  color: #999;
}
.address-manager .identity em {
  color: #f60;
  font-size: 10px;
  font-style: normal;
  margin-left: 3px;
}
.address-manager .consignee {
  margin-right: 30px;
  color: #f60;
}
.address-manager .ui-card .ui-list-item:last-child {
  border: 0;
}
.address-manager .ui-list .edit {
  position: relative;
  padding-right: 25px;
  font-size: 12px;
}
.address-manager .ui-card .ui-list-item p {
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.address-manager .ui-list .edit:after {
  content: " ";
  position: absolute;
  width: 7px;
  height: 7px;
  right: 7px;
  top: 50%;
  margin-top: 4px;
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
  transform: rotate(-45deg);
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
