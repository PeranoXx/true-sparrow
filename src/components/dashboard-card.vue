<template>
    <div class="rounded-card shadow bg-white p-5 flex flex-col justify-between border border-gray-200 border-b-8" :class="borderClasses[color]">
        <div>
            <div class="text-gray-500 text-sm font-medium mb-2">{{ title }}</div>
            <div class="flex items-center justify-between">
                <span class="text-lg sm:text-metric font-semibold text-primary-text-500">{{ value }}</span>
                <span v-if="id != 'tickets'" class="flex items-center ml-3 text-base font-semibold " :class="textClasses[color]">
                    <svg v-if="trend === 'up'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-0.5 size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                    <svg v-if="trend === 'down'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-0.5 size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                    {{ percentage }}%
                </span>
                <span v-if="id == 'tickets'" class="text-sm" :class="textClasses[color]">Open</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    percentage: {
        type: Number,
        required: false,
    },
    color: {
        type: String,
        required: true,
    },
    trend: {
        type: String,
        required: true,
    },
})

const borderClasses = ref({
    success: 'border-b-success-500',
    info: 'border-b-info-500',
    warning: 'border-b-warning-500',
    danger: 'border-b-danger-500',
})

const textClasses = ref({
    success: 'text-success-500',
    info: 'text-info-500',
    warning: 'text-warning-500',
    danger: 'text-danger-500',
})

</script>
