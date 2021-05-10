<template>
    <div class="" >
        <form action="" @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
            <div class="grid grid-cols-6 my-3">
                <label for="username" class="col-start-3 text-right pr-5 block text-gray-700 text-sm font-bold mb-2 pt-3">Имя пользователя</label>
                <input v-model="username" type="text" id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Имя пользователя" />
            </div>
            <div class="grid grid-cols-6">
                <label for="password" class="col-start-3 text-right pr-5 block text-gray-700 text-sm font-bold mb-2 pt-3">Пароль</label>
                <input v-model="password" placeholder="Пароль" id="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="grid grid-cols-6">
                <div class="col-start-4 my-4">
                    <input value="Войти" type="submit" class="float-left bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {CHECK_AUTH} from "../store/actions.types";
import {mapGetters} from 'vuex'
export default {
    name: "Login",
    data(){
      return {
        username: null,
        password: null,
      }
    },
  computed:{
      ...mapGetters(['authStatus']),
  },
    methods:{
      submit(){
        const {username, password, authStatus} = this
        const $this = this
        this.$store.dispatch(CHECK_AUTH, {username, password}).then(()=>{
          console.log(status)
          if(authStatus === 'success'){
            $this.$router.push('/')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
