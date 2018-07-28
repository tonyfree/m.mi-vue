<template>
  <div class="app-shell app-shell-bottom-navigation">
    <div class="app-view-wrapper">
      <MiTitle title="收货地址" :show-search-icon="false"/>
      <div class="container app-view app-view-with-header">
        <div class="page-wrap">
          <div class="address-manager">
            <div class="address-manager-list">
              <div v-for="(list,index) in lists" :key="list.address_id" class="ui-card">
                <ul class="ui-card-item ui-list">
                  <li class="ui-list-item identity">
                    <a @click="remove(list, index)">删除</a>
                    <span class="consignee">{{list.consignee}}</span>
                    <span>{{list.tel}}</span>
                  </li>
                  <router-link
                    :to="{name: 'addressEdit', query: {address_id: list.address_id}}"
                    tag="li"
                    class="ui-list-item edit">
                    <p>{{list.province}} {{list.city}} {{list.district}} {{list.area}}</p>
                    <p>{{list.address}}</p>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="add">
          <router-link
            :to="{name: 'addressEdit'}"
            class="btn ui-button ui-button-active">
            <span>新建地址</span>
          </router-link>
        </div>
      </div>
    </div>
    <MiDialog
      v-model="showDialog"
      message="确定删除当前地址?"
      show-cancel-button
      @confirm="removeAction">
    </MiDialog>
  </div>
</template>

<script>
import Vue from 'vue'
import fetch from '@/api/fetch.js'
import MiTitle from '@/components/MiTitle.vue'
import Dialog from '@/components/dialog'
Vue.use(Dialog)

export default {
  components: {
    MiTitle
  },
  data () {
    return {
      lists: [],
      showDialog: false,
      removeCash: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      fetch('addressList').then(res => {
        next(vm => vm.setLists(res))
      })
    } else {
      next(vm => vm.getLists())
    }
  },
  methods: {
    getLists () {
      this.$fetch('addressList').then(res => {
        this.setLists(res)
      })
    },
    setLists (res) {
      this.$store.commit('setViewLoading', false)
      this.$NProgress.done()
      this.lists = res.data
    },
    remove (list, index) {
      this.removeCash = {
        id: list.address_id,
        index
      }
      this.showDialog = true
      // Dialog.confirm({
      //   title: '提示',
      //   message: '确定删除当前地址?'
      // }).then(() => {
      //   fetch('addressDel', {
      //     address_id: list.address_id
      //   }).then(res => {
      //     this.lists.splice(index, 1)
      //   })
      // })
    },
    removeAction () {
      let {id, index} = this.removeCash
      fetch('addressDel', {
        address_id: id
      }).then(res => {
        this.lists.splice(index, 1)
      })
    }
  }
}
</script>

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
