<template>
  <div class='head'>
    <div>
      <slot name='search'></slot>
      <slot name='search_base' ></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headTop',
  data () {
    return {
      title: '请输入相关信息'
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../style/publicDeclar';
  .head{
    height: 3.7rem;
    font-size:0.4rem;
    text-align: center;
    color: #fff;
    margin-bottom:1px;
    background-attachment:fixed;
    background-image: url('../../images/timg.jpg');
    -webkit-background-size:100% 100%;
    background-size:contain;
    background-repeat:no-repeat;
  }
  .head_Search{
    position: fixed;
    display: inline-block;
    width:100%;
    left:0;
    z-index:999;
    box-sizing: border-box;
    padding:0.28rem 0;
    font-size:0.28rem;
    color: #f11f1f;
    background-image: url('../../images/timg.jpg');
  }
  .head_SearchTop{
    height: 0.6rem;
    display: inline-block;
    line-height: 0.6rem;
    z-index:1000;
    width:88%;
    left:6%;
    margin:0 auto;
    border-radius: 0.1rem;
    background-color: rgba(255,255,255,0.5);
    border:1px solid #ffffff;
  }
</style>
