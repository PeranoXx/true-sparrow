<template>
    <button class="font-medium px-6 cursor-pointer rounded-button" :class="variantClasses[variant]"> {{ name }}</button>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'button'
    },
    variant: {
        type: String,
        default: 'primary'
    },
})

const variantClasses = {
    primary: 'bg-primary-500 text-white px-4 py-2 rounded-md',
    secondary: 'bg-gray-500 text-white px-4 py-2 rounded-md',
    danger: 'bg-red-500 text-white px-4 py-2 rounded-md',
    warning: 'bg-yellow-500 text-white px-4 py-2 rounded-md',
    info: 'bg-blue-500 text-white px-4 py-2 rounded-md',
}
</script>