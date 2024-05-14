<script setup>
import TodoItem from "./TodoItem.vue";

defineProps({
    todos: Array
});

</script>


<template>
    <div>
        <ul>
            <TodoItem
                v-for="(todo, i) in todos"
                :key="todo.id"
                :index="i"
                :todo="todo"
                @remove-todo="$emit('removeTodo', todo.id)"
            />
        </ul>
    </div>

</template>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>