import { cartIndex } from '@/mock/cart.js'
import MiSearch from '@/components/MiSearch.vue'
import fetch from '@/api/fetch.js'

export default {
  components: {
    MiSearch
  },
  data () {
    return {
      cartList: null
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      fetch('cartIndex').then(res => {
        next(vm => vm.setCartList(res))
      })
    } else {
      next(vm => vm.getCartList())
    }
  },
  methods: {
    getCartList () {
      this.$fetch('cartIndex').then(res => {
        this.setCartList(res)
      })
    },
    setCartList (res) {
      // this.cartList = res.data.data.items
      this.cartList = cartIndex.data.items
    },
  }
}