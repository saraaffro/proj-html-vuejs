<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { database } from 'fontawesome';

export default{
  components:{
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <router-view></router-view> 
  </main>   
  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partial/variables' as *;


</style>
