<template>
  <div id="app">
    <page-navbar />
    <!-- <v-for-test /> -->
<!--     <todo-list />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <page-footer />
    <page-header />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import PageHeader from '@/components/page-header.vue'
import PageNavbar from '@/components/page-navbar.vue'
import PageFooter from '@/components/page-footer.vue'
// import TodoList from '@/components/todo-list.vue'
// import VForTest from '@/components/v-for-test.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageNavbar,
    PageFooter,
    // HelloWorld,
    // VForTest,
    // TodoList,
    // 'my-component': () => import('./my-async-component')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
