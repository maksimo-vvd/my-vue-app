<template lang="html">
  <nav class="">
    <router-link
        to="/"
        exact class="nav-link"
    >
      Home
    </router-link>
    <router-link
        to="/d3js"
        class="nav-link"
    >
      D3.js
    </router-link>
    <router-link
        to="/projects"
        class="nav-link"
    >
      Projects
    </router-link>
    <router-link
        to="/calendar"
        class="nav-link"
    >
      Calendar
    </router-link>
  </nav>
</template>

<script lang="js">

  export default  {
    name: 'page-navbar-nav',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>
