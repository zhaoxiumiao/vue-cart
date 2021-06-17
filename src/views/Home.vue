<template>
  <div class="home">
    <label for="good">
      <input type="checkbox" name="good" id="good" :checked="check" @click="selectAll">全选
    </label>
    <list/>
    <div class="total">总价:{{total}}元</div>
  </div>
</template>

<script>
// @ is an alias to /src
import list from '@/components/List.vue'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'list1',
  components: {
    list
  },
  methods:{
    ...mapActions({
      selectAll:'selectAll'
    })
  },
  computed:{
    ...mapState({
      total:'total',
      check:'checked'
    })
  }
}
</script>

<style scoped>
.home {
  width: 1000px;
  margin: auto;
}
.total {
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding-right: 50px;
  background: #fff;
}
</style>
