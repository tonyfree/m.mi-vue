<template>
  <div class="app-shell">
    <div class="app-view-wrapper">
      <div class="container app-view app-view-with-header app-view-with-footer">
        <div class="list-navbar">
          <ul>
            <li class="active">
              <a>
                <span>新品</span>
              </a>
            </li>
            <li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li>
            <li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li><li>
              <a>
                <span>手机</span>
              </a>
            </li>
            <li>
              <a>
                <span>电视</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  flex-basis: 100%;
}
.container .list-navbar {
  position: fixed;
  top: 49px;
  bottom: 52px;
  left: 0;
  width: 80px;
  border-right: 1px solid #efefef;
  overflow: hidden;
}
.container .list-navbar ul {
  z-index: 90;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  /* 隐藏滚动条 */
  right: -6px;
  padding: 8px 6px 8px 0;
  background: #fefefe;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.container .list-navbar ul li.active {
  color: #fb7d34;
  transform: scale(1);
}
.container .list-navbar ul li {
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  transition: transform .1s linear;
  transform-origin: center center;
  transform: scale(.76);
}
.container .list-navbar ul li span {
  display: inline-block;
}
</style>
