<template lang="html">

  <section class="page-d-3">
    <h1>page-d-3 Component</h1>

    <chart-d-3 />

  </section>

</template>

<script lang="js">

  import * as d3 from 'd3'

  import ChartD3 from "./chart-d3";
  export default  {
    name: 'page-d3',
    components: {ChartD3},
    props: [],
    mounted () {
      console.log("chart-d3 loaded")
      this.fetchData();
    },
    data () {
      return {
        loadData: {}
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>


<!--<style scoped lang="scss">-->
<!--.page-calendar {-->

<!--}-->
<!--</style>-->
