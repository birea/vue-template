import axios from 'axios';

const state = {
    ajustes: {}
};

const getters = {
    ajustes: state => state.ajustes,
};

const actions = {
    async fetchAjustes({ commit }){
        const res = await axios.get('/api/ajustes');
        commit('setAjustesData', res.data.pageData);
    },
};

const mutations = {
    setAjustesData: (state, ajustesData) => (Object.assign(state.ajustes, ajustesData))
};

export default {
    state,
    getters,
    actions,
    mutations
};