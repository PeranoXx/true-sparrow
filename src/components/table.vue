<template>
    <div class="rounded-lg shadow bg-white border border-gray-200">
        <slot name="head"></slot>
        <div class="overflow-x-auto">
            <table class="w-full ">
                <slot name="body"></slot>
            </table>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-end p-5">

            <div class="flex space-x-2">
                <button class="px-1 py-1 rounded  text-gray-700 bg-gray-300 hover:bg-gray-200 transition" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button v-for="page in totalPages" :key="page" class="px-3 py-1 rounded border" :class="page === currentPage ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'" @click="changePage(page)">
                    {{ page }}
                </button>
                <button class="px-1 py-1 rounded  text-gray-700 bg-gray-300 hover:bg-gray-200 transition" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
    headers: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
    pageSize: {
        type: Number,
        default: 5
    }
})

const currentPage = ref(1);

const totalPages = computed(() => {
    return Math.max(1, Math.ceil(props.data.length / props.pageSize));
})


function changePage(page) {
    if (page < 1 || page > totalPages.value) return;
    currentPage.value = page;
}

// Watch for data changes to reset page
watch(() => props.data, () => {
    currentPage.value = 1;
});
</script>
