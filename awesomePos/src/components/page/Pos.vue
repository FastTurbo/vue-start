<template>
    <div class="pos">
      <el-row >
        <el-col :span="7" class="pos-order" id="order-list">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border show-summary style="width:100%;">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="80"></el-table-column>
                <el-table-column prop="price" label="单价" width="80"></el-table-column>
                <el-table-column  label="操作" width="160" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">新增</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="div-btn">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">外卖</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">

            </el-tab-pane>
            <el-tab-pane label="外卖">

            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="item in oftenGoods">
                  <span>{{ item.goodsName }}</span>
                  <span class="o-price">¥{{ item.price }}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="type-goods">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class='cookList'>
                    <li v-for="item in typeGoods">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{ item.goodsName}}</span>
                      <span class="foodPrice">￥{{ item.price }}元</span>
                    </li>
                  </ul>
                </div>

              </el-tab-pane>
              <el-tab-pane label="小食">

              </el-tab-pane>
              <el-tab-pane label="饮料">

              </el-tab-pane>
              <el-tab-pane label="套餐">

              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "pos",
      data(){
        return {
          tableData:[{
            goodsName: '可口可乐',
            price: 8,
            count:1
          }, {
            goodsName: '香辣鸡腿堡',
            price: 15,
            count:1
          }, {
            goodsName: '爱心薯条',
            price: 8,
            count:1
          }, {
            goodsName: '甜筒',
            price: 8,
            count:1
          }],
          oftenGoods:[
            {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
            }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
            }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
            }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
            }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
            }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
            }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
            }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
            }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
            }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
            }

          ],
          typeGoods:[
            {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
            }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
            }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
            }, {
              goodsId:4,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
            }, {
              goodsId:5,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
            }, {
              goodsId:6,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
            }, {
              goodsId:7,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
            }, {
              goodsId:8,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
            }, {
              goodsId:9,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
            }, {
              goodsId:20,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
            }

          ]
        }
      },
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
    padding:10px;
  }
  .div-btn{
    margin-top:10px;
  }
  .title{
    text-align:left;
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
  }
  .often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
  }
  .o-price{
    color:#58B7FF;
  }
  .type-goods{
    padding:10px;
    clear:both;
  }
  .cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;

  }
  .cookList li span{

    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
</style>
