<template lang="html">

  <section class="todo-list mb-20">
    <!-- <h1>todo-list Component</h1> -->
    
    <form 
      class="mb-4"
      v-on:submit.prevent="addNewTodo"
      >
      <label for="new-todo">Добавить задачу</label> <br>
      <input
        class="border border-2 border-red-900 p-1 mr-3"
        v-model="newTodoText"
        id="new-todo"
        placeholder="Например, покормить кота"
      >
      <button>Добавить</button>
    </form>

    <ul>
      <!-- <todo-list-item /> -->
      <li
        is="todo-list-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
    <hr>
  </section>

</template>

<script lang="js">
  import TodoListItem from '@/components/todo-list-item.vue'

  export default  {
    name: 'todo-list',
    components: {
      TodoListItem
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Помыть посуду'
          },
          {
            id: 2,
            title: 'Вынести мусор'
          },
          {
            id: 3,
            title: 'Подстричь газон'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    },
    computed: {

    }
}


</script>