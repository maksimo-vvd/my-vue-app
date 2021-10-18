<template lang="html">

  <section class="page-d-3">
    <h1>page-d-3 Component</h1>

    <chart-d3 :data=loadData />

  </section>

</template>

<script lang="js">

  import * as d3 from 'd3'
  import { json } from 'd3-fetch'
  // import dataFile from '../assets/data/countries.geo.json';

  console.log(d3)
  console.log(json)
  console.log('-----')

  import ChartD3 from "./chart-d3";

  export default  {
    name: 'page-d3',
    components: {ChartD3},
    props: [],
    mounted () {
      this.fetchData();
    },
    data () {
      return {
        loadData: {}
      }
    },
    methods: {
      fetchData() {
        d3.json('../assets/data/countries.geo.json').then((data) => {
          console.log(data)
        });
        // const data = await d3.json('https://api.openweathermap.org/data/2.5/forecast/daily?q=Kiev&cnt=9&lang=ua&units=metric&appid=7ec907063568fc5ed7b75fe4b96c293b')
        // const data = await d3.json('https://gist.github.com/pandafulmanda/4442be1d0208b3b087fe1f61b0a70e75#file-sample-json')
        // const data = await d3Fetch.json('tweets.json').then(function(data) {
        //   console.log('data', data)
        // })
        // console.log(333, data)
        // this.loadData = data
      }
    },
    computed: {

    }
}
</script>


<!--<style scoped lang="scss">-->
<!--.page-calendar {-->

<!--}-->
<!--</style>-->
