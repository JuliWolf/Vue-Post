<template>
  <div id="app">
    <div class="columns">
      <div class="column is-full">
        <app-header></app-header>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/addPanels/Header'
  import { mapActions } from 'vuex'

  export default {
    components: {
      'app-header': Header
    },
    methods: {
      ...mapActions([
              'logIn',
              'authUser'
      ])
    },
    beforeMount() {
      if (localStorage.authStatus == 'true'){
        this.authUser()
      }
    }
  }
</script>

<style lang="scss">

</style>
