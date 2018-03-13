<template>
  <div class="videoPlugin" @touchstart='touchVideo' @touchend='touchVideoE' v-bind:style="videoStyle">
    <video height="100%" width="100%" x-webkit-airplay="true" playsinline="true" loop="" :poster="cover_image">
      <source controls="" :src="ResolutGroup.normal" type="video/mp4; codecs=" webkit-playsinline="" playsinline="">
    </video>
    <transition name="fade">
      <div id="videoMenu" v-show="isMenuOn" class="theme positVideo">
        <div v-if="isplaying" class="iconfont icon-play videoPla"></div>
        <div v-if="!isplaying" class="iconfont icon-stop videoPla"></div>
        <div class="videoRange">
          <span class="videoPlayTimes">{{playingProTimes}}</span>
          <input class="playPro" v-model="playingPro" type="range"/>
          <span class="videoTimes">{{videoTimes}}</span>
        </div>
        <div class="volume" v-show="isFull">
          <span class="iconfont icon-voic">
            <input class="playVol" v-model="playingVol" type="range"/>
          </span>
        </div>
        <div class="ResolutChange"  v-show="isFull">
          <div class="Resolut">{{ResolutGroup[0].name}}
            <ul class="ResolutMenu">
              <li v-for = '(item, index) in ResolutGroup' v-bind:key="index" :data-source='item.source'>
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
        <div class="fullscreen iconfont icon-fullScreen" @click = "fullScreen"></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'headTop',
  data () {
    return {
      title: '视频title',
      isMenuOn: false,
      isFull: false,
      isvioce: true,
      playingVol: 10,
      isplaying: true,
      playingPro: 10,
      playback_spend: 1,
      videoStyle: {},
      videoTime: 193,
      cover_image: 'http://img1.myzx.cn/video/mysource/admin/20180208/5a7bcb2b4cb64.jpg',
      ResolutGroup: [
        {'source': 'http://v.myzx.cn/mysource/default/20180208/5a7bcacc48c48.mp4', 'name': '标清'},
        {'source': 'http://v.myzx.cn/mysource/default/20180208/5a7bcacc48c48.mp4', 'name': '高清'},
        {'source': 'http://v.myzx.cn/mysource/default/20180208/5a7bcacc48c48.mp4', 'name': '超清'}]
    }
  },
  methods: {
    touchVideo: function () {
      this.isMenuOn = true
    },
    touchVideoE: function () {
      setTimeout(() => {
        this.isMenuOn = false
      }, 3000)
    },
    resumePlayPro: function (val) {
    //  重置播放进度条
      document.getElementsByClassName('playPro')[0].style.background = 'linear-gradient(to right, #059CFA,white ' + val + '%, #fff)'
    },
    resumePlayingVol: function (val) {
    //  重置声音进度
      document.getElementsByClassName('playVol')[0].style.background = 'linear-gradient(to right, #059CFA,white ' + val + '%, #fff)'
    },
    fullScreen: function () {
      switch (this.isFull) {
        case true:
          this.videoStyle = ''
          this.isFull = false
          break
        case false:
          let height = document.documentElement.clientWidth
          let width = document.documentElement.clientHeight
          this.videoStyle = 'transform-origin: center; height: ' + height + 'px; width:' + width + 'px;;z-index: 999;position: fixed;left: ' + (height - width) / 2 + 'px;bottom: ' + -(height - width) / 2 + 'px;transform: rotate(90deg);'
          this.isFull = true
      }
    }
  },
  watch: {
    playingPro: function (newVal, oldVal) {
      this.resumePlayPro(newVal)
    },
    playingVol: function (newVal, oldVal) {
      this.resumePlayingVol(newVal)
    }
  },
  computed: {
    videoTimes: function () {
      return parseInt(this.videoTime / 60) + ':' + this.videoTime % 60
    },
    playingProTimes: function () {
      return parseInt(this.playingPro / 60) + ':' + this.playingPro % 60
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../style/publicDeclar';
  .videoPlugin{
    position: relative;
    overflow: hidden;
  }
  .positVideo{
    position: absolute;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    box-sizing: border-box;
  }
  .fade-enter-active, .fade-leave-active {
    transition: bottom .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    bottom: -1rem;
  }
  .theme{
    background: linear-gradient(to bottom, rgba(0,0,0,0) 10% ,rgba(123,123,123,0.1),#333)
  }
  /*播放进度*/
  .videoRange{
    line-height: 0.04rem;
    input[type=range] {
      width: 70%;
      -webkit-appearance: none;
      border-radius: 0.2rem; /*这个属性设置使填充进度条时的图形为圆角*/
      box-shadow: 1px 1px 1px rgba(159,159,159,0.8);
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
      height: 0.01rem;
      margin: 0.01rem 0;
      border-radius: 0.1rem; /*将轨道设为圆角的*/
    }
    input[type=range]:focus {
      outline: none;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 0.3rem;
      width: 0.3rem;
      margin-top: -0.15rem; /*使滑块超出轨道部分的偏移量相等*/
      background: #ffffff;
      border-radius: 50%; /*外观设置为圆形*/
      border: solid 0.25em rgba(205, 224, 230, 0.5); /*设置边框*/
      box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
    }
  }
  /*声音控制*/
  .volume{
    line-height: 0.3rem;
    .iconfont{
      font-size: 0.3rem;
      line-height: 0.3rem;
      .playVol{
        transform: rotate(270deg);
        position: absolute;
        bottom: 0.9rem;
        margin-left: -0.35rem;
        display: none;
      }
    }
    .iconfont:hover{
      .playVol{
        display: block;
      }
    }
    input[type=range] {
      width: 1rem;
      -webkit-appearance: none;
      border-radius: 0.1rem; /*这个属性设置使填充进度条时的图形为圆角*/
      box-shadow: 1px 1px 1px rgba(159,159,159,0.8);
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
      height: 0.02rem;
      margin: 0.02rem 0;
      border-radius: 0.1rem; /*将轨道设为圆角的*/
    }
    input[type=range]:focus {
      outline: none;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 0.2rem;
      width: 0.2rem;
      margin-top: -5px; /*使滑块超出轨道部分的偏移量相等*/
      background: #ffffff;
      border-radius: 50%; /*外观设置为圆形*/
      border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
      box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
    }
  }
  /* 分辨率选择 */
  .ResolutChange{
    .Resolut{
      .ResolutMenu{
        position: absolute;
        bottom: 1rem;
        background-color: $rgba6668;
        padding: 0.2rem 0.3rem ;
        margin-left: -0.28rem;
        display: none;
      }
    }
    .Resolut:hover{
      .ResolutMenu{
        display: block;
      }
    }
  }
  .videoPla, .volume, .ResolutChange, .fullscreen{
    flex: 1;
    text-align: center;
   }
  .videoRange{
      flex: 6;
  }
  .videoTimes{
    font-size: 0.25rem;
    text-align: right;
  }
  .videoPlayTimes{
    font-size: 0.25rem;
    text-align: left;
  }
</style>
