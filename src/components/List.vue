<template>
  <ul>
      <li v-for="(item, index) in goods" :key="index">
          <input type="checkbox" :checked="item.state" @click="choose(index)">
          <div class="goods">
              <p class="title">{{item.name}}</p>
              <div class="count">
                  <p class="plus" @click="add(index)">+</p>
                  <p class="num">{{item.count}}</p>
                  <p class="minus" @click="less(index)">-</p>
              </div>
              <p class="price">{{item.price}}元</p>
              <p class="delete" @click="del(index)">删除</p>
          </div>
      </li>
  </ul>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    name: 'list',
    methods:{
        ...mapActions({
            choose:'totalCalculate',
            add:'add',
            less:'less',
            del:'del',
        })
    },
    computed: {
        ...mapState({
            goods: 'goods'
        })
    }
}
</script>

<style>
    ul {
        list-style: none;
        background: #fff;
    }
    li {
        display: flex;
        overflow: hidden;
        padding: 20px;
        border-bottom: 1px solid #efefef;
    }
    input {
        flex: 0 0 30px;
        margin-right: 20px;
    }
    .goods {
        float: left;
        display: flex;
        flex: 1;
    }
    .count {
        display: flex;
    }
    p {
        margin: 0;
        padding: 0;
        margin-right: 10px
    }
    .delete {
        margin-left: auto;
    }
</style>