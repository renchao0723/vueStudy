<template>
  <div class='hello' @touchmove='longTapM' @touchstart='longTapS' @touchend='longTapE'>
    <headTop>
      <div v-if='longBanner' slot='search' class='head_Search' >
        <span class='head_SearchTop'><i class='iconfont icon-menu'></i>请输入相关信息</span>
      </div>
    </headTop>
    <div class='bodyText'>
      <div id="target" class="target" @click = "paraboal().init()"></div>
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
      <h2>Essential Links</h2>
      <h2>Ecosystem</h2>
    </div>
    <footBottom></footBottom>
   </div>
</template>

<script>
import headTop from './header/head-top'
import footBottom from './footer/foot-bottom'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      longBanner: true,
      headBanner: false
    }
  },
  wacth: {
    longTapShow: function (newQuestion, oldQuestion) {
      console.log(newQuestion)
    }
  },
  mounted: function () {
    this.scrollToResolve(0, 400)
    this.paraboal().mark()
  },
  methods: {
    longTapS: function (id) {
    },
    longTapE: function () {
      this.turnToBack()
    },
    longTapM: function () {
      this.turnToBg()
    },
    turnToBg: function () {
      let headSearch = document.getElementsByClassName('head_Search')[0]
      if ((document.getElementsByClassName('head')[0].offsetHeight - headSearch.offsetHeight) <= document.documentElement.scrollTop) {
        headSearch.style.boxShadow = '1px 0px 1px #666666'
      } else {
        headSearch.style.boxShadow = 'none'
      }
    },
    turnToBack: function () {
      let headSearch = document.getElementsByClassName('head_Search')[0]
      if ((document.getElementsByClassName('head')[0].offsetHeight - headSearch.offsetHeight) / 2 > document.documentElement.scrollTop) {
        this.scrollToResolve(0, 400)
      } else if ((document.getElementsByClassName('head')[0].offsetHeight - headSearch.offsetHeight) < document.documentElement.scrollTop) {
        console.log('不做处理')
      } else {
        this.scrollToTop(document.getElementsByClassName('head')[0].offsetHeight - headSearch.offsetHeight, 400)
      }
    },
    scrollToResolve: function (scrollCount, scrollDuration) {
      const scrollHeight = window.scrollY
      const scrollStep = Math.PI / (scrollDuration / 15)
      const cosParameter = scrollHeight / 2
      let scrollMargin
      let scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          scrollCount = scrollCount + 1
          scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep)
          window.scrollTo(0, (scrollHeight - scrollMargin))
        } else {
          clearInterval(scrollInterval)
          if (document.getElementsByClassName('head_Search').length)document.getElementsByClassName('head_Search')[0].style.boxShadow = 'none'
        }
      }, 15)
    },
    scrollToTop: function (scrollCount, scrollDuration) {
      const scrollHeight = window.scrollY
      let scrollMargin = scrollHeight
      let betweenMar = (scrollCount - scrollHeight) * 15 / scrollDuration
      let scrollInterval = setInterval(function () {
        if (scrollCount > scrollHeight) {
          scrollCount = scrollCount - betweenMar
          scrollMargin += betweenMar
          window.scrollTo(0, scrollMargin)
        } else {
          clearInterval(scrollInterval)
          if (document.getElementsByClassName('head_Search').length)document.getElementsByClassName('head_Search')[0].style.boxShadow = '1px 0px 1px #666666'
        }
      }, 15)
    },
    paraboal: function (el, target, options) {
      target = document.getElementsByClassName('foot_List')[0].children[0]
      el = document.getElementById('target')
      /*
       * 网页模拟现实需要一个比例尺
       * 如果按照1像素就是1米来算，显然不合适，因为页面动不动就几百像素
       * 页面上，我们放两个物体，200~800像素之间，我们可以映射为现实世界的2米到8米，也就是100:1
       * 不过，本方法没有对此有所体现，因此不必在意
       */
      const defaults = {
        speed: 167.67, /* 每帧移动的像素大小，每帧（对于大部分显示屏）大约16~17毫秒 */
        curvature: 0.005, /* 实际指焦点到准线的距离，你可以抽象成曲率，这里模拟扔物体的抛物线，因此是开口向下的 */
        progress: function () {},
        complete: function () {}
      }
      let params = {}; options = options || {}
      for (let key in defaults) {
        params[key] = options[key] || defaults[key]
      }
      let exports = {
        mark: function () { return this },
        position: function () { return this },
        move: function () { return this },
        init: function () { return this }
      }
      /* 确定移动的方式 IE6-IE8 是margin位移 IE9+使用transform
       */
      let moveStyle = 'margin'
      let testDiv = document.createElement('div')
      if ('oninput' in testDiv) {
        ['', 'ms', 'webkit'].forEach(function (prefix) {
          let transform = prefix + (prefix ? 'T' : 't') + 'ransform'
          if (transform in testDiv.style) {
            moveStyle = transform
          }
        })
      }
      // 根据两点坐标以及曲率确定运动曲线函数（也就是确定a, b的值）
      /* 公式： y = a*x*x + b*x + c;
       */
      let a = params.curvature
      let b = 0
      // 是否执行运动的标志量
      let flagMove = true
      if (el && target && el.nodeType === 1 && target.nodeType === 1) {
        let rectElement = {}
        let rectTarget = {}
        // 移动元素的中心点位置，目标元素的中心点位置
        let centerElement = {}
        let centerTarget = {}
        // 目标元素的坐标位置
        let coordElement = {}
        let coordTarget = {}
        // 标注当前元素的坐标
        exports.mark = function () {
          if (flagMove === false) return this
          if (typeof coordElement.x === 'undefined') this.position()
          return this
        }
        exports.position = function () {
          if (flagMove === false) return this
          let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          // 初始位置
          if (moveStyle === 'margin') {
            el.style.marginLeft = el.style.marginTop = '0px'
          } else {
            el.style[moveStyle] = 'translate(0, 0)'
          }
          // 四边缘的坐标
          rectElement = el.getBoundingClientRect()
          rectTarget = target.getBoundingClientRect()
          // 移动元素的中心点坐标
          centerElement = {
            x: rectElement.left + (rectElement.right - rectElement.left) / 2 + scrollLeft,
            y: rectElement.top + (rectElement.bottom - rectElement.top) / 2 + scrollTop
          }
          // 目标元素的中心点位置
          centerTarget = {
            x: rectTarget.left + (rectTarget.right - rectTarget.left) / 2 + scrollLeft,
            y: rectTarget.top + (rectTarget.bottom - rectTarget.top) / 2 + scrollTop
          }
          // 转换成相对坐标位置
          coordElement = {
            x: 0,
            y: 0
          }
          coordTarget = {
            x: -1 * (centerElement.x - centerTarget.x),
            y: -1 * (centerElement.y - centerTarget.y)
          }
          /*
           * 因为经过(0, 0), 因此c = 0
           * 于是：
           * y = a * x*x + b*x;
           * y1 = a * x1*x1 + b*x1;
           * y2 = a * x2*x2 + b*x2;
           * 利用第二个坐标：
           * b = (y2+ a*x2*x2) / x2
           */
          // 于是
          b = (coordTarget.y - a * coordTarget.x * coordTarget.x) / coordTarget.x
          return this
        }
        // 按照这个曲线运动
        exports.move = function () {
          // 如果曲线运动还没有结束，不再执行新的运动
          console.log(flagMove)
          if (flagMove === false) return this
          let startx = 0
          let rate = coordTarget.x > 0 ? 1 : -1
          let step = function () {
            // 切线 y'=2ax+b
            let tangent = 2 * a * startx + b // = y / x
            // y*y + x*x = speed
            // (tangent * x)^2 + x*x = speed
            // x = Math.sqr(speed / (tangent * tangent + 1));
            startx = startx + rate * Math.sqrt(params.speed / (tangent * tangent + 1))
            // 防止过界
            if ((rate === 1 && startx > coordTarget.x) || (rate === -1 && startx < coordTarget.x)) {
              startx = coordTarget.x
            }
            let x = startx
            let y = a * x * x + b * x
            // 标记当前位置，这里有测试使用的嫌疑，实际使用可以将这一行注释
            el.setAttribute('data-center', [Math.round(x), Math.round(y)].join())
            // x, y目前是坐标，需要转换成定位的像素值
            if (moveStyle === 'margin') {
              el.style.marginLeft = x + 'px'
              el.style.marginTop = y + 'px'
            } else {
              el.style[moveStyle] = 'translate(' + [x + 'px', y + 'px'].join() + ')'
            }
            if (startx !== coordTarget.x) {
              params.progress(x, y)
              window.requestAnimationFrame(step)
            } else {
              // 运动结束，回调执行
              params.complete()
              flagMove = true
              setTimeout(function () { el.style['opacity'] = 0; el.style['transform'] = 'none' }, 100)
              setTimeout(function () { el.style['opacity'] = 1 }, 1000)
            }
          }
          window.requestAnimationFrame(step)
          flagMove = false
          return this
        }
        // 初始化方法
        exports.init = function () {
          this.position().mark().move()
        }
      }
      return exports
    }
  },
  components: {
    headTop,
    footBottom
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.target{
  height: 0.5rem;
  width: 0.5rem;
  border-radius:50%;
  background-color: #686868;
  position: absolute;
  right: 1rem;
  top: 3rem;
  transition: opacity ease 1s;
}
</style>
