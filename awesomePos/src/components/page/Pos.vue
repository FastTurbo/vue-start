<template>
    <div class="pos">
      <el-row >
        <el-col :span="7" class="pos-order" id="order-list">
          订单栏
        </el-col>
        <el-col :span="5">
          商品栏
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "pos",
      mounted(){
        let height = document.body.clientHeight;
        document.getElementById('order-list').style.height = height + 'px';
      }

    }
</script>

<style scoped>
  .pos-order{
    background:#f9fafc;
    border-right:1px solid #c0ccda;
  }

</style>
