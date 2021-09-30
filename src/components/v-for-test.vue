<template lang="html">

  <section class="v-for-test">
    <h1>v-for-test Component</h1>
    <!-- <ul id="example-1" class='mb-20'>
      <li v-for="(item, index) in items" :key="item.message">
        {{ index }} : {{ item.message }}
      </li>
    </ul> -->
    <hr />
    <mark class="mx-2" v-for="n in evenNumbers" :key="n">{{ n }}</mark>
    <hr />
    <ul v-for="(set, index) in sets" :key="index"> <!-- [ 1, 2, 3, 4, 5 ] -->
      <li v-for="n in filteredEven(set)" :key="n">{{ n }}</li>
    </ul>
    <hr />
    <ul>
      <template v-for="(item, index) in items">
        <li :key="item.message">{{ index }}: {{ item.message }}</li>
        <li :key="'key' + item.message" class="border-b" role="presentation"></li>
      </template>
    </ul>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'v-for-test',
    props: [],
    mounted () {

    },
    data () {
      return {
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        numbers: [ 1, 2, 3, 4, 5 ],
        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
      }
    },
    methods: {
        filteredEven: function (numArr) {
          return numArr.filter(function (number) {
            return number % 2 === 0
          })
        }
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
}
</script>
