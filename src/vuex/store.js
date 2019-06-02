import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:0
}
const mutations = {
    add(state,n){
        state.count+=n;
    },
    reduce(state,n){
        state.count+=n;
    }
}
const getters = {
    count:state=>state.count+=10
}
const actions = {
    addAction({commit}){
        commit('add',5)
        //setTimeout(()=>{commit('reduce')},3000);
    },
    reduceAction({commit}){
        commit('reduce',-100)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})



// const moduleA = {
//     state,
//     mutations,
//     getters,
//     actions
// }

// export default new Vuex.Store({
//     modules:{
//            a:moduleA
//          }
// })

