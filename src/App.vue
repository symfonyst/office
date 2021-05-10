<template>
  <div id="app" class="">
    <div class="container mx-auto">
      <app-menu v-if="isAuthenticated" />
      <div class="">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Menu from "./components/Menu";
  export default {
    components:{
      'app-menu': Menu
    },
    computed:{
      ...mapGetters(['isAuthenticated'])
    }
  }
</script>

<style lang="less">
  body{
    background-color: lightgrey;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
