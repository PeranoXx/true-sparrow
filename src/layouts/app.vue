<template>
    <div class="min-h-screen grid grid-cols-1 md:grid-cols-12">
        <aside class="hidden md:block md:col-span-3 xl:col-span-2 h-screen sticky top-0">
            <sideBar />
        </aside>

        <main class="col-span-1 md:col-span-9 xl:col-span-10 flex flex-col min-h-screen">
            <appHeader />
            <div class="flex-1 p-4">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup>
import sideBar from '@/components/sideBar.vue';
import appHeader from '@/components/header.vue';

</script>