<template>
  <div class='footer'>
    <div style="height: 1.3rem;line-height:1.3rem"></div>
    <ul class="foot_List">
        <router-link :to="{name:'VideoPlay',params:{activeIndex :0} }" class="active" tag = 'li'>
          <div class="iconfont icon-menu"></div>
          <div>首页</div>
        </router-link>
        <router-link :to="{name:'HelloWorld',params:{activeIndex :1} }" tag = 'li'>
          <div class="iconfont icon-menu"></div>
          <div>热点</div>
        </router-link>
        <router-link :to="{name:'VideoPlay',params:{activeIndex :2} }" tag = 'li'>
          <div class="iconfont icon-menu"></div>
          <div>关注</div>
        </router-link>
        <router-link :to="{name:'HelloWorld',params:{activeIndex :3} }" tag = 'li'>
          <div class="iconfont icon-menu"></div>
          <div>发现</div>
        </router-link>
        <router-link :to="{name:'PrintInvoice',params:{activeIndex :4} }" tag = 'li'>
          <div class="iconfont icon-menu"></div>
          <div>我的</div>
        </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'headTop',
  data () {
    return {
    }
  },
  mounted: function () {
    if (this.$route.params.activeIndex) {
      let footList = document.getElementsByClassName('foot_List')[0].children
      for (let item = 0; item < footList.length; item++) {
        footList[item].classList.remove('active')
      }
      document.getElementsByClassName('foot_List')[0].children[this.$route.params.activeIndex].className = 'active'
    }
  },
  methods: {
    longTapM: function () {
      console.log('move')
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../style/publicDeclar';
  ul li{
    text-align: center;
  }
  .active{
    color: #5494ff;
  }
  .foot_List{
    position: fixed;
    z-index:99;
    height: 1.2rem;
    padding:0 5%;
    bottom:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    background-color: #ffffff;
    box-shadow: 1px 0 20px rgba(171,171,171,0.4);
  }
  ul li{
    padding: 0 0.3rem;
  }
  .footer{
    height: 1.3rem;
    background-color: #ffffff
  }
</style>
