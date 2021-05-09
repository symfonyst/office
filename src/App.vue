<template>
  <div id="app" class="">
    <div class="container mx-auto">
      <div id="nav" class="flex flex-row">
        <router-link to="/" class="p-2">Профиль</router-link>
        <router-link to="/news" class="p-2">Новости</router-link>
        <router-link to="/logout" class="p-2">Выход</router-link>
      </div>
      <div class="">
        <router-view/>
      </div>
    </div>
  </div>
</template>

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
