<template>
  <div>
    <MiSearch/>
    <div class="container app-view app-view-with-header app-view-with-footer">
      <div class="list-navbar">
        <ul>
          <li class="active">
            <a href="">
              <span>新品</span>
            </a>
          </li>
          <li>
             <a href="">
              <span>手机</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MiSearch from '../tmp/MiSearch.vue'
export default {
  components: {
    MiSearch
  }
}
</script>
