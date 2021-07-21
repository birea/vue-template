import Vue from 'vue'
import Vuex from 'vuex'
import ajustes from './modules/ajustes';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ajustes
  }
})