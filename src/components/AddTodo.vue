<script setup>
import { ref } from 'vue';


const emit = defineEmits(['addTodo']);


const title = ref('');

const onSubmit = () => {
    if (title.value.trim()) {
        const newTodo = {
            id: Date.now(),
            title: title.value,
            completed: false
        }
        emit('addTodo', newTodo);
        title.value = '';
    }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <input
            type="text"
            v-model="title"
        >
        <button type="submit">Создать</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
}

input {
    width: 400px;
}
</style>