<template lang="html">

  <li class="mb-2">
    {{ title }}
    <button 
      v-on:click="$emit('remove')"
      class="px-2 py-1 bg-red-500 text-white"
      >
        Удалить
      </button>
  </li>

</template>

<script lang="js">

  export default  {
    name: 'todo-list-item',
    props: ['title'],
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