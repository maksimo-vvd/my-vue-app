<template lang="html">

  <main class="page-content py-20 bg-gray-100">
    <h1>page-content Component</h1>
    <p>Main Component for &lt;router-view /> <br> - Home / About / Contact, etc.</p>

    <hr class="my-12">

    <router-view />

    <hr class="my-12">

  </main>

</template>

<script lang="js">

  export default  {
    name: 'page-content',
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
