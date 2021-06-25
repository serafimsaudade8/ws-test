import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
})

Vue.use(VueApollo)

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
