/**
 * Created by Administrator on 2018/3/7.
 */
import Vue from 'vue'
import Hammer from 'hammer'
function VueTouch (el, type, binding) {
  this.el = el
  this.type = type
  this.binding = binding

  let hammertime = new Hammer(this.el)
  hammertime.on(this.type, this.binding.value)
}

const tap = Vue.directive('tap', {
  bind: function (el, binding) {
    return new VueTouch(el, 'tap', binding)
  }
})

const swipeleft = Vue.directive('swipeleft', {
  bind: function (el, binding) {
    return new VueTouch(el, 'swipeleft', binding)
  }
})

const swiperight = Vue.directive('swiperight', {
  bind: function (el, binding) {
    return new VueTouch(el, 'swiperight', binding)
  }
})

const press = Vue.directive('press', {
  bind: function (el, binding) {
    return new VueTouch(el, 'press', binding)
  }
})
export {tap, swipeleft, swiperight, press}
