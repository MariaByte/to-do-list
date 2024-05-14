<script setup>
import { computed } from 'vue';

const props = defineProps({
    todo: Object,
    index: Number
}
);

const uppercase = computed(() => props.todo.title.toUpperCase())

</script>

<template>
    <li>
        <span :class="{ done: todo.completed }">
            <input
                type="checkbox"
                @change="todo.completed = !todo.completed"
            >
            <strong>{{ index + 1 }}</strong>
            {{ uppercase }}
        </span>
        <button
            class="rm"
            @click="$emit('removeTodo')"
        >&times;</button>
    </li>
</template>

<style scoped>
li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}

.rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
}

.done {
    text-decoration: line-through;
}

input {
    margin-right: 1rem;
}
</style>