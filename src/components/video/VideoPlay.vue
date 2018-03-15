<template>
  <div>
    <headTop>
      <div slot='headLeft' class='head_Left' >
        <router-link to="#" tag = 'span' class="iconfont icon-left"></router-link>
      </div>
      <div slot='centerTitle' class='head_CenterTit' >
  <span>视频播放页</span>
      </div>
      <div slot='headRight' class='head_Right' >
      </div>
    </headTop>
    <VideoMach></VideoMach>
    <ul>
      <li v-for ="(item,index) in items" :key = 'index'>
        <router-link to="/#">{{item.name}}</router-link>
      </li>
    </ul>
    <footBottom></footBottom>
  </div>
</template>
<script>
import VideoMach from '../publicChild/VideoMa'
import headTop from './../header/head'
import footBottom from './../footer/foot-bottom'
export default {
  name: 'VideoPlay',
  data () {
    return {
      msg: 'this is me',
      items: [{
        name: 'make',
        age: '10'
      }, {
        name: 'make',
        age: '10'
      }, {
        name: 'make',
        age: '10'
      }, {
        name: 'make',
        age: '10'
      }, {
        name: 'make',
        age: '10'
      }, {
        name: 'make',
        age: '10'
      }, {
        name: 'make',
        age: '10'
      }, {
        name: 'make',
        age: '10'
      }, {
        name: 'marry',
        age: '10'
      }]
    }
  },
  components: {
    VideoMach,
    headTop,
    footBottom
  }
}
</script>

<style lang='scss' scoped>
  @import '../../style/publicDeclar';
</style>
