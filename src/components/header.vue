<template>
    <header class="sticky top-0 z-50 w-full">
        <div class="bg-gray-200 text-[20px] py-[17px] border-b border-gray-200">
            <div class="flex items-center md:justify-end justify-between gap-6 md:px-20 px-4">
                <div class="flex items-center gap-3 md:hidden">
                    <button @click="isSidebarOpen = true" class="focus:outline-none" aria-label="Open sidebar">
                        <svg v-if="!isSidebarOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-gray-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                    <span class="text-[20px] font-semibold text-gray-800 capitalize">{{ route.name }}</span>
                </div>
                <div class="flex items-center gap-5">
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-600">
                            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="cursor-pointer">
                        <img src="https://i.pravatar.cc/40" alt="User Avatar" class="w-9 h-9 rounded-full object-cover border border-gray-300 shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
    </header>

    <transition name="fade">
        <div v-if="isSidebarOpen" class="fixed inset-0 z-50 bg-black/20 bg-opacity-30" @click.self="isSidebarOpen = false"></div>
    </transition>
    <transition name="slide">
        <aside v-if="isSidebarOpen" class="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-sidebar-500 shadow-xl z-50 flex flex-col">
            <sideBar @navClick="toggleSidebar" />
        </aside>
    </transition>
</template>

<script setup>
import { ref } from 'vue';
import sideBar from '@/components/sideBar.vue';
import { useRoute } from 'vue-router';


const isSidebarOpen = ref(false);
const route = useRoute()


const toggleSidebar = () => {
    setTimeout(() => {
        isSidebarOpen.value = !isSidebarOpen.value;
    }, 100);
}



</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
