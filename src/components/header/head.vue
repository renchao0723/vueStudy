<template>
  <div class='head'>
      <slot name='headLeft'></slot>
      <slot name='centerTitle' ></slot>
      <slot name='headRight' ></slot>
  </div>
</template>
<script>
export default {
  name: 'headTop',
  data () {
    return {
      title: '请输入相关信息'
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
  @import '../../style/publicDeclar';
  .head{
    height: 0.9rem;
    font-size:0.4rem;
    text-align: center;
    color: #ffffff;
    background-color:$themesColor;
    margin-bottom:1px;
    background-attachment:fixed;
    -webkit-background-size:100% 100%;
    background-size:contain;
    background-repeat:no-repeat;
    box-shadow: 0 1px 1px rgba(123,123,123,0.5);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .head_Left{
    display: inline-block;
    padding-left: 0.3rem;
    width: 2rem;
    text-align: left;
  }
  .centerTitle{
    display: inline-block;
  }
  .head_Right{
    display: inline-block;
    padding-right: 0.3rem;
    width: 2rem;
    text-align: right;
  }
</style>
