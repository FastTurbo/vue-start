<template>
    <div class="left-nav">
      <ul>
        <li>
          <i class="iconfont icon-31dianpu"></i>
          <div>店铺</div>
        </li>
        <li>
          <i class="iconfont icon-hanbao"></i>
          <div>美食</div>
        </li>
        <li>
          <i class="iconfont icon-paixing"></i>
          <div>排行</div>
        </li>
        <li>
          <i class="iconfont icon-saoyisao"></i>
          <div>扫码</div>
        </li>
        <li>
          <i class="iconfont icon-guanyuwo"></i>
          <div>会员</div>
        </li>
        <li>
          <i class="iconfont icon-gongnengjianyi"></i>
          <div>设置</div>
        </li>

      </ul>
    </div>
</template>

<script>
    export default {
        name: "left-nav"
    }
</script>

<style scoped>
  .left-nav{
    height:100%;
    width:5%;
    font-size:10px;
    background:#1D8ce0;
    color:#fff;
    float:left;
  }
  .left-nav .iconfont{
    font-size:24px;
  }
  .left-nav ul{
    padding:0;
    margin:0;
    cursor:pointer;
  }
  .left-nav ul li{
    list-style:none;
    text-align:center;
    border-bottom:1px solid #20a0ff;
    padding:10px;
  }

</style>
