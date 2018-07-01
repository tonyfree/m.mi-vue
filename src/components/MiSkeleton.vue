<template>
  <div data-server-rendered="true" class="skeleton-wrapper">
    <header class="skeleton-header"></header>
    <section class="skeleton-block">
        <img src="../assets/images/loading.png">
    </section>
    <footer class="skeleton-footer"></footer>
  </div>
</template>

<style scoped>
.skeleton-wrapper .skeleton-header {
  height: 50px;
  background: #f2f2f2;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  position: relative;
}
.skeleton-wrapper .skeleton-block {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}
.skeleton-wrapper .skeleton-block img {
  width: 100%;
}
.skeleton-wrapper .skeleton-footer {
  height: 52px;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
