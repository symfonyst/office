import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import {AUTH_ERROR, AUTH_REQUEST, AUTH_LOGOUT, AUTH_SUCCESS} from "./mutations.types";
import {CHECK_AUTH} from "./actions.types";
import {API_URL} from '../common/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    status: typeof(localStorage.getItem('user-token')) != 'undefined' ? 'success':'',
    hasLoadedOnce: null,
  },
  mutations: {
    [AUTH_REQUEST]: (state) => {
      state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, value) => {
      state.status = 'success'
      state.token = value.data.token
      state.hasLoadedOnce = true
    },
    [AUTH_ERROR]: (state, err) => {
      state.status = err
      state.hasLoadedOnce = true
    },
    [AUTH_LOGOUT]: (state) => {
      state.token = ''
    }
  },
  actions: {
    [CHECK_AUTH]({commit}, params) {
      const path = API_URL + '/api/login_check'
      console.log(params)
      commit(AUTH_REQUEST)
      console.log(path)
      return Axios({
        method: "POST",
        url: path,
        data: params,
        headers: {
          'accept': 'json',
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        commit(AUTH_SUCCESS, res)
      }).catch((err) => {
        commit(AUTH_ERROR, err)
      })
    }
  },
  modules: {}
})
