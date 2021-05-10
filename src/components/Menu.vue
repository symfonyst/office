<template>
    <div id="nav" class="flex flex-row">
        <router-link to="/" class="p-2">Профиль</router-link>
        <router-link to="/news" class="p-2">Новости</router-link>
        <a class="p-2" href="#" @click="logout">Выход</a>
    </div>
</template>

<script>
import {AUTH_LOGOUT} from "../store/actions.types";

export default {
    name: "Menu",
    methods: {
      logout: function () {
        this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
      }
    }
  }
</script>

<style scoped>

</style>
