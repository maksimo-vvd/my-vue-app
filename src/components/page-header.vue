<template lang="html">

  <section class="header">
    <h1 class="mb-4">Page Header Component with navbar under</h1>
    <page-navbar />
  </section>

</template>

<script lang="js">
  import pageNavbar from '@/components/page-navbar.vue'
  export default  {
    name: 'page-header',
    components: {
      pageNavbar
    },
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

<style scoped data-lang="scss">
  .header {

  }
</style>
