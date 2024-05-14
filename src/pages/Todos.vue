<script setup>
import { ref, onMounted, computed } from 'vue';

import TodoList from '../components/TodoList.vue';
import AddTodo from '../components/AddTodo.vue';
import Loader from '../components/Loader.vue';

let todos = ref([])
let loading = ref(true)
let filter = ref("all")

const removeTodo = ((id) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
})

const addTodo = (todo => {
    todos.value.push(todo);
})

onMounted(async () => {
    try {
        await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    todos.value = json;
                    loading.value = false;
                }, 1000)
            });
    } catch (err) {
        console.log(err);
    }
});

const filteredTodos = computed(() => {
    if (filter.value == "all") {
        return todos.value
    }
    if (filter.value == "completed") {
        return todos.value.filter(t => t.completed)
    }
    if (filter.value == "not-completed") {
        return todos.value.filter(t => !t.completed)
    }
})

</script>
<template>
    <div>
        <h2>Список дел</h2>
        <router-link to="/">Домашняя страница</router-link>
        <hr>
        <AddTodo @add-todo="addTodo" />
        <select v-model="filter">
            <option value="all">Все</option>
            <option value="completed">Выполненные</option>
            <option value="not-completed">Не выполненные</option>
        </select>
        <hr>
        <Loader v-if="loading" />
        <TodoList
            v-else-if="filteredTodos.length"
            :todos="filteredTodos"
            @remove-todo="removeTodo"
        />
        <p v-else>Нет дел!</p>
    </div>
</template>