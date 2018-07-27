<template>
  <div class="app-shell app-shell-bottom-navigation">
    <div class="app-view-wrapper">
      <div class="page-user-set app-view app-view-with-header">
        <ol>
          <li>
            <a href="/address/list?type=user">地址管理</a>
          </li>
        </ol>
        <footer>
          <a >退出账号</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-user-set ol {
  font-size: 16px;
  margin-bottom: 14px;
}
.page-user-set ol li {
  width: 100%;
  display: inline-block;
  padding: 10px;
  border-bottom: 1px solid #f6f6f6;
  box-sizing: border-box;
  position: relative;
  text-align: left;
  color: #3c3c3c;
}
.page-user-set ol li:after {
  content: " ";
  position: absolute;
  width: 7px;
  height: 7px;
  right: 8px;
  top: 50%;
  margin-top: -3px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  transform: rotate(-45deg);
}
.page-user-set ol li a {
  display: block;
  color: #3c3c3c;
}
.page-user-set footer {
  background-color: #f4f4f4;
  text-align: center;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.page-user-set footer a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #3c3c3c;
}
</style>
