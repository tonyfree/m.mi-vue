<template>
  <div class="popup-regions-box">
    <div v-if="value" class="ui-mask"></div>
    <transition name="bottom-up">
      <div v-if="value" class="ui-pop">
        <div class="ui-pop-close" @click="close">
          <a>
            <i class="image-icons iconfont icon-close"></i>
          </a>
        </div>
        <div class="ui-pop-title">选择地址</div>
        <div class="ui-pop-conten">
          <div class="region-tab">
            <span
              v-for="(item,index) in regions"
              :key="index"
              :class="{active:index==curIndex}"
              @click="changeTab(index)">{{item.name}}</span>
          </div>
          <div class="region-list">
            <dl class="rl1">
              <dd
                v-for="list in curList"
                :key="list.id"
                @click="select(list)">{{list.name}}</dd>
            </dl>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import addressAll from '@/mock/addressAll.js'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      curIndex: 0,
      regions: [
        {
          id: 0,
          name: '请选择',
          list: []
        },
        {
          id: 0,
          name: '',
          list: []
        },
        {
          id: 0,
          name: '',
          list: []
        },
        {
          id: 0,
          name: '',
          list: []
        }
      ],
      curList: []
    }
  },
  watch: {
    curIndex (val) {
      this.curList = this.regions[val].list
    },
    regions: {
      deep: true,
      handler (val) {
        this.curList = val[this.curIndex].list
      }
    }
  },
  created () {
    this.getAll()
  },
  methods: {
    getAll () {
      this.$fetch('addressAll').then(res => {
        this.regions[this.curIndex].list = addressAll.data
      })
    },
    select (list) {
      this.regions[this.curIndex].name = list.name
      this.regions[this.curIndex].id = list.id
      if (this.curIndex < 2) {
        this.curIndex++
        this.regions[this.curIndex].name = '请选择'
        this.regions[this.curIndex].list = list.child
      } else if (this.curIndex === 2) {
        this.curIndex++
        this.regions[this.curIndex].name = '请选择'
        this.$fetch('addressRegion', {
          parent: list.id
        }).then(res => {
          this.regions[this.curIndex].list = res.data
          this.curList = res.data
        })
      } else {
        let region = this.regions
        this.$emit('region', {
          province: region[0].name,
          province_id: region[0].id,
          city: region[1].name,
          city_id: region[1].id,
          district: region[2].name,
          district_id: region[2].id,
          area: region[3].name,
          area_id: region[3].id
        })
        this.close()
      }
    },
    changeTab (index) {
      this.curIndex = index
      this.regions[index].name = '请选择'
      for (let i = index + 1; i < 4; i++) {
        this.regions[i] = {
          id: 0,
          name: '',
          list: []
        }
      }
    },
    close () {
      this.curIndex = 0
      this.regions[0].name = '请选择'
      for (let i = 1; i < 4; i++) {
        this.regions[i] = {
          id: 0,
          name: '',
          list: []
        }
      }
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
.popup-regions-box {
  font-size: 12px;
}
.popup-regions-box .ui-pop {
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  position: fixed;
  overflow: hidden;
  z-index: 101;
  text-align: left;
}
.popup-regions-box .ui-pop .ui-pop-close {
  display: block;
  top: 10px;
  right: 0;
  position: absolute;
  z-index: 1;
}
.popup-regions-box .ui-pop .ui-pop-close i {
  color: #a6a6a6;
  font-size: 20px;
  font-weight: 900;
  line-height: 40px;
}
.popup-regions-box .ui-pop-title {
  font-size: 15px;
  text-align: center;
  line-height: 50px;
}
.popup-regions-box .region-tab {
  border-bottom: 1px solid #f6f6f6;
  padding: 0 10px;
}
.popup-regions-box .region-tab span {
  padding: 8px;
  display: inline-block;
}
.popup-regions-box .region-tab span.active {
  border-bottom: 2px solid #f60;
  color: #f60;
}
.popup-regions-box .region-list {
  height: 200px;
  overflow: auto;
}
.popup-regions-box .region-list dl {
  padding: 5px 10px;
}
.popup-regions-box .region-list dd {
  display: block;
  padding: 5px 8px;
}
.bottom-up-enter-active, .bottom-up-leave-active {
  transition: all .5s;
}
.bottom-up-enter {
  transform: translateY(100%);
}
.bottom-up-enter-to, .bottom-up-leave {
  transform: translateX(0);
}
.bottom-up-leave-to {
  transform: translateY(100%);
}
</style>
