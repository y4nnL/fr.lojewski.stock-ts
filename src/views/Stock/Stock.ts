import { Component, Vue } from 'vue-property-decorator'

import { UserRole } from '@/storage/types'

@Component
export default class Stock extends Vue {
  
  setRole(role: UserRole) {
    this.$storage.commit('userRole', role)
  }
  
  setList() {
    this.$storage.commit('productList', [])
  }
  
  async pushItem() {
    try {
      let pushed = await this.$storage.dispatch('productPush', Math.random().toString())
      console.log(pushed)
    } catch (e) {
      console.log(e.message)
    }
  }
  
  toggleRole() {
    this.$storage.dispatch('userToggleRole', void 0)
      .then(role => console.log(role))
  }
  
  get userIsAuthenticated() {
    return this.$storage.getters.userIsAuthenticated
  }
  
  get userRole() {
    return this.$storage.state.user.role
  }
  
  get productIsEmpty() {
    return this.$storage.getters.productIsEmpty
  }
  
  get productList() {
    return this.$storage.state.product.list
  }
  
}
