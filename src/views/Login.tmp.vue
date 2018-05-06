<template>
  <div class="layout">
    <div class="header_tit">
      <em class="milogo"></em>
      <h4 class="header_tit_txt">小米帐号登录</h4>
    </div>
    <div>
      <!-- 输入框 -->
      <label class="login_user" for="">
        <input class="item_account" autocomplete="off" type="text"  placeholder="邮箱/手机号码/小米ID">
      </label>
      <label class="pwd_panel">
        <input class="item_account" type="password" placeholder="密码" autocomplete="off">
        <i class="eye pwd-eye">eye</i>
      </label>
      
      <!-- 错误信息 -->
      <div class="err_tip">
        <em class="icon_error">err</em>
        <span class="error-con">请输入密码</span>
      </div>
  
      <div class="btns_bg">
        <input class="btnadpt" type="button" value="登录">
      </div>
      <div class="other_panel">
        <a href="javascript:;" class="btnadpt btn_gray">手机短信登录/注册</a>
        <div class="reverse">
          <div class="n_links_area">
            <a class="outer-link">立即注册</a>
            <span>|</span>
            <a class="outer-link">忘记密码？</a>
          </div>
        </div>
        <!-- 其他登录方式 s -->
        <div  class="other_login_type">
          <fieldset class="oth_type_tit">
            <legend align="center" class="oth_type_txt">其他方式登录</legend>
          </fieldset>
          <div class="oth_type_links">
            <a class="icon_type btn_qq" data-type="qq"  title="QQ登录" target="_blank"><i class="btn_sns_icontype icon_default_qq"></i></a>
            <a class="icon_type btn_weibo" data-type="weibo"  title="微博登录" target="_blank"><i class="btn_sns_icontype icon_default_weibo"></i></a>
            <a class="icon_type btn_alipay" data-type="alipay"  title="支付宝登录" target="_blank"><i class="btn_sns_icontype icon_default_alipay"></i></a>
            <a class="icon_type btn_weixin" data-type="weixin"  title="微信登录" target="_blank"><i class="btn_sns_icontype icon_default_weixin"></i></a>
          </div>
        </div>
        <!-- 其他登录方式 e -->
        <p class="acq_tips" style="display: none;"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  padding: 0 28px;
  position: relative;
  box-sizing: border-box;
}
.header_tit {
  padding: 30px 0 10px;
  text-align: center;
}
.milogo {
  width: 48px;
  height: 48px;
  margin: 0 auto 15px;
  display: block;
  background-image: url(../assets/milogo.png);
}
.header_tit_txt {
  font-size: 16px;
  font-weight: normal;
}
.login_user, .pwd_panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
}
.item_account {
  padding: 16px 0;
}
.err_tip {
  margin-bottom: 5px;
  padding-top: 14px;
  color: #F66;
  text-align: left;
}
.icon_error {
  font-size: 16px;
  margin-right: 5px;
  color: #ff6700;
}
.btns_bg {
  padding-top: 24px;
}
.btnadpt {
  width: 100%;
  padding: 12px 0;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  background-color: #ff6700;
}
.btn_gray {
  background: #fff;
  margin-top: 10px;
  border: 1px solid #d3d3d3;
  color: #000;
}
.n_links_area {
  color: #646464;
}
.outer-link {
  padding: 0 9px;
  color: #646464;
}
.other_login_type {
  padding-top: 40px;
}
.oth_type_tit {
  border-top: 1px solid #f2f2f2;
  padding-top: 10px;
}
.oth_type_txt {
  font-size: 12px;
  color: #b0b0b0;
  width: 80px;
}
.icon_type {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  display: inline-block;
  border-radius: 50%;
}
.btn_qq {
  background-color: #72c7db;
}
.btn_weibo {
  background-color: #ed9090;
}
.btn_alipay {
  background-color: #6bb6ea;
}
.btn_weixin {
  background-color: #00be00;
}
.btn_sns_icontype {
  background: url(../assets/icons_type.png) no-repeat;
  display: block;
  width: 18px;
  height: 18px;
  margin: 5px auto 0;
}
.icon_default_qq {
  background-position: -19px 0;
}
.icon_default_weibo {
  background-position: -38px 0;
}
.icon_default_alipay {
  background-position: -57px 0;
  width: 26px;
}
.icon_default_weixin {
  width: 23px;
  background-position: -84px 0;
}
</style>

