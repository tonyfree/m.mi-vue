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
        <input class="item_account" autocomplete="off" type="text"  :placeholder="placeholderTxt" v-model.trim="username" @input="clearErr">
      </label>
      <label v-show="!isSmsLogin" class="pwd_panel">
        <input class="item_account" :type="pwdType" placeholder="密码" autocomplete="off" v-model.trim="pwd" @input="clearErr">
        <i class="iconfont" :class="{'icon-biyan':!isOpen, 'icon-kanjianmima-':isOpen}" @click="toggleOpen"></i>
      </label>
      <label v-show="isSmsLogin" class="pwd_panel">
        <input class="item_account" type="number" placeholder="短信验证码" autocomplete="off" v-model.trim="code" @input="clearErr">
        <a href="javascript:;" class="sms_code" :style="codeStyle" @click="getCode">{{codeMsg}}</a>
      </label>
      <!-- 错误信息 -->
      <div v-show="errMsg" class="err_tip">
        <!-- <em class="icon_error">err</em> -->
        <i class="icon_error iconfont icon-error"></i>
        <span class="error-con">{{errMsg}}</span>
      </div>
      <div class="btns_bg">
        <!-- <input class="btnadpt" type="button" :value="mainBtn" @click="submit"> -->
        <button  class="btnadpt" :class="{'is_loading':isLoading}" @click="submit">
          <i v-show="isLoading" class="icon-loading iconfont icon-error"></i>
          {{mainBtn}}
        </button>
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
// 1.每一个vue组件就是一个实例
import md5 from 'blueimp-md5'

export default {
  data () {
    return {
      isSmsLogin: true,
      codeMsg: '获取验证码',
      isOpen: false,
      countdown: 60,
      timer: null,
      errMsg: '',
      username: '',
      pwd: '',
      code: '',
      isLoading: false
    }
  },
  computed: {
    mainBtn () {
      return this.isSmsLogin ? '立即登录/注册' : '登录'
    },
    subBtn () {
      return this.isSmsLogin ? '用户名密码登录' : '手机短信登录/注册'
    },
    placeholderTxt () {
      return this.isSmsLogin ? '手机号码' : '邮箱/手机号码/小米ID'
    },
    pwdType () {
      return this.isOpen ? 'text' : 'password'
    },
    codeStyle () {
      return this.countdown === 60 ? {
        color: '#2ea5e5',
        cursor: 'pointer'
      } : {
        color: '#999',
        cursor: 'default'
      }
    }
  },
  created () {
    this.$store.commit('setViewLoading', false)
    this.$NProgress.done()
  },
  methods: {
    changeBtn () {
      this.isSmsLogin = !this.isSmsLogin
    },
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    getCode () {
      if (!this.username) {
        this.errMsg = '请输入手机号'
        return
      }
      if (!this.checkMobile()) {
        this.errMsg = '手机号码格式不正确'
        return
      }
      if (this.countdown !== 60) return
      this.$fetch('getCode', {username: this.username}).then(res => {
        this.timer = setInterval(() => {
          this.codeMsg = `重新发送${this.countdown}`
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
    clearErr () {
      this.errMsg = ''
    },
    submit () {
      // 校验
      if (this.isSmsLogin) {
        if (!this.username) {
          this.errMsg = '请输入手机号'
          return
        }
        if (!this.checkMobile()) {
          this.errMsg = '手机号码格式不正确'
          return
        }
        if (!this.code) {
          this.errMsg = '请输入短信验证码'
          return
        }
      } else {
        if (!this.username) {
          this.errMsg = '请输入账号'
          return
        }
        if (!this.pwd) {
          this.errMsg = '请输入密码'
          return
        }
      }
      // 节流处理
      if (this.isLoading) return
      this.isLoading = true

      let data = {
        username: this.username
      }
      if (this.isSmsLogin) {
        data.code = this.code
      } else {
        data.pwd = md5(this.pwd)
      }
      this.$fetch('login', data).then(res => {
        let status = res.status
        if (status === 200) {
          console.log('成功登录')
          this.$fetch('userInfo').then(res => {
            this.$store.commit('setUserInfo', res.data.user)
            let path = this.$route.query.redirect || '/user'
            this.$router.push(path)
          })
        } else {
          this.errMsg = res.data.message
        }
        this.isLoading = false
      }).catch(err => {
        console.err(err)
        this.isLoading = false
      })
    },
    checkMobile () {
      const reg = /^((1[3-8][0-9])+\d{8})$/
      return reg.test(this.username)
    }
  }
}
</script>

<style scoped>
.layout {
  padding: 0 28px;
  position: relative;
  box-sizing: border-box;
  display: block;
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
    left: -100%;
  }
  100% {
    left: 0;
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
  color: #2ea5e5;
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
.icon-kanjianmima- {
  color: #ff6700;
}
.icon-loading {
  display: inline-block;
  animation: rotating 2s linear infinite;
}
@keyframes rotating {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(1turn);
  }
}
.is_loading {
  position: relative;
  pointer-events: none;
}
.is_loading::before {
  pointer-events: none;
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: hsla(0,0%,100%,.35);
}
</style>
