<template>
  <div>
    <MiTitle title="个人中心" />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setViewLoading', false)
    this.$NProgress.done()
  }
}
</script>