<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @font-face {
    font-family: "aui_iconfont";
    src: url('./style/aui-iconfont.ttf') format('truetype');
  }
  .iconfont {
    position: relative;
    font-family:"aui_iconfont" !important;
    font-size: 0.45rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-menu:before { content: "\e6d2"; }
  .icon-left:before { content: "\e6f4"; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, "PingFang SC", "Microsoft YaHei", SimHei,Arial, SimSun;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:0.3rem;
}
  ul{
    list-style: none;
    padding-left:0;
    margin:0;
  }
  a{
    text-decoration: none;
    color: initial;
  }
</style>
