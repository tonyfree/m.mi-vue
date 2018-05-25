<template>
  <div class="layout">
    <div class="header_tit">
      <em class="milogo"></em>
      <h4 class="header_tit_txt">小米帐号登录</h4>
    </div>
    <div>
      <!-- 输入框 -->
      <label class="login_user">
        <div v-show="isSmsLogin" class="country_list">
          <div class="countrycode_selector" >
            <span class="country_code">
              <tt class="countrycode-value">+86</tt>
              <i class="icon_arrow_down"></i>
            </span>
          </div>
        </div>
        <input class="item_account" autocomplete="off" type="text"  :placeholder="placeholderTxt" v-model.trim="userName" @input="clearErr">
      </label>
      <label v-show="!isSmsLogin" class="pwd_panel">
        <input class="item_account" :type="pwdType" placeholder="密码" autocomplete="off" v-model.trim="pwd" @input="clearErr">
        <i class="iconfont" :class="{'icon-kanjianmima-':isOpen,'icon-biyan':!isOpen}" @click="toggleOpen"></i>
      </label>
      <label v-show="isSmsLogin" class="pwd_panel">
        <input class="item_account" type="number" placeholder="短信验证码" autocomplete="off" v-model.trim="code" @input="clearErr">
        <a href="javascript:;" class="sms_code" :style="codeStyle" @click="getCode">{{codeMsg}}</a>
      </label>
      <!-- 错误信息 -->
      <div v-show="errMsg" class="err_tip">
        <i class="iconfont icon-error icon_error"></i>
        <span class="error-con">{{errMsg}}</span>
      </div>
      <div class="btns_bg">
        <input v-show="!loading" class="btnadpt" type="button" :value="mainBtn" @click="submit" >
        <div v-show="loading" class="loading-cover" v>
          <span class="loading-spinner">
            <i class="iconfont icon-loading"></i>
          </span>
        </div>
      </div>
      <div class="other_panel">
        <a href="javascript:;" class="btnadpt btn_gray" @click="changeBtn">{{subBtn}}</a>
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'blueimp-md5'
export default {
  data () {
    return {
      isSmsLogin: true,
      isOpen: true,
      userName: '',
      pwd: '',
      code: '',
      errMsg: '',
      loading: false,
      codeMsg: '获取验证码',
      countdown: 60,
      timer: null
    }
  },
  computed : {
    mainBtn () {
      return this.isSmsLogin ? '立即登录/注册' : '登录'
    },
    subBtn () {
      return this.isSmsLogin ? '用户名密码登录' : '手机短信登录/注册'
    },
    placeholderTxt () {
      return this.isSmsLogin ? '手机号码': '邮箱/手机号码/小米ID'
    },
    pwdType () {
      return this.isOpen ? 'text' : 'password'
    },
    codeStyle ()  {
      return this.countdown === 60 ? {
          color:'#2ea5e5',
          cursor: 'pointer'
        } : {
          color:'#999',
          cursor: 'default'
        }
    }
  },
  methods: {
    changeBtn () {
      this.isSmsLogin = !this.isSmsLogin
      this.errMsg = ''
    },
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    getCode () {
      if (!this.userName) {
        this.errMsg = '请输入手机号'
        return
      }
      if (this.countdown !== 60) return
      let url = 'http://rap2api.taobao.org/app/mock/13801/api/getCode'
      axios.post(url).then(res => {
        this.timer = setInterval(() => {
          this.codeMsg = `重新发送(${this.countdown})` 
          this.countdown--
          if (this.countdown === 0) {
            clearInterval(this.timer)
            this.timer = null
            this.countdown = 60
            this.codeMsg = '获取验证码'
          }
        }, 1000)
      })
    },
    submit () {
      if (!this.userName) {
        this.errMsg =  this.isSmsLogin ? '请输入手机号' : '请输入账号' 
        return
      }
      if (this.isSmsLogin && !this.code) {
        this.errMsg = '请输入短信验证码'
        return
      }
      if (!this.isSmsLogin && !this.pwd) {
        this.errMsg = '请输入密码'
        return
      }
      this.confirm()
    },
    confirm () {
      this.loading = true
      let url = 'http://rap2api.taobao.org/app/mock/13801/api/login'
      let data = {
        userName: this.userName
      }
      if (this.isSmsLogin) {
        data.code = this.code
      } else {
        data.pwd = md5(this.pwd)
      }
      axios.post(url, data).then(res => {
        let status = res.data.status
        if (status === 200) {
          // todo: 跳转到登录来源
          console.log('跳转到登录来源')
        } else {
          this.errMsg = res.data.message
        }
        this.loading = false
      }).catch(err => {
        this.loading = false
      })
    },
    clearErr () {
      this.errMsg = ''
    }
  }
}
</script>

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
  background-image: url(../assets/images/milogo.png);
}
.header_tit_txt {
  font-size: 16px;
  font-weight: normal;
}
.login_user, .pwd_panel {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
}
.pwd_panel {
  justify-content: space-between;
}
.country_list {
  padding: 1px 10px 1px 0;
  margin-right: 8px;
  color: #4a4a4a;
  display: block;
  overflow: hidden;
}
.countrycode_selector {
  position: relative;
  animation: fade-in ease-in-out .5s;
}
@keyframes fade-in {
  0% {
    /* left: -100%; */
    transform: translateX(-100%);
  }
  100% {
    /* left: 0; */
    transform: translate(0);
  }
}
.country_code {
  display: flex;
  align-items: center;
}
.countrycode-value {
  margin-right: 2px;
  color: #9b9b9b;
  font-size: 16px;
}
.icon_arrow_down {
    /* margin-left: 2px; */
    display: block;
    width: 6px;
    height: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent transparent #9b9b9b #9b9b9b;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
.item_account {
  padding: 16px 0;
}
.sms_code {
  /* color: #2ea5e5; */
  font-size: 14px;
}
.err_tip {
  margin-bottom: 5px;
  padding-top: 14px;
  color: #F66;
  text-align: left;
  font-size: 14px;
}
.icon_error {
  font-size: 16px;
  margin-right: 5px;
  color: #ff6700;
}
.btns_bg {
  padding-top: 24px;
  position: relative;
}
.btnadpt,.loading-cover {
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
.loading-cover {
  cursor: default;
}
.loading-spinner {
  display: inline-block;
  animation: load-rotate 0.8s linear infinite;
}
.icon-loading {
  font-size: 18px;
  color: #fff;
}
@keyframes load-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
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
  background: url(../assets/images/icons_type.png) no-repeat;
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
