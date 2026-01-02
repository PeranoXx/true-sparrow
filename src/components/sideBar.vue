<template>
    <div class="">
        <div class=" bg-sidebar-500 h-screen sticky top-0 col-span-2">
            <div class="text-slate-100 text-[20px] py-5 text-center border-b border-border-500">
                Dashboard
            </div>
            <div class="border-b border-border-500">
                <ul class="flex flex-col gap-1 py-5">
                    <router-link v-for="(item, index) in menus" :key="index" class="text-slate-100 py-3 px-10 mr-5 rounded-br-[6px] rounded-tr-[8px] cursor-pointer hover:bg-sidebar-active-500" :class="activeMenu == item.id ? 'bg-sidebar-active-500' : ''" :to="{ name: item.id }" @click="emit('navClick')">
                        <span>
                            {{ item.name }}
                        </span>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { staticData } from '@/services/static';

const emit = defineEmits(['navClick']);
const data = staticData();

const route = useRoute();
const activeMenu = ref(null);
const menus = data.menus;

watch(route, (newVal) => {
    activeMenu.value = newVal.name;
}, {
    immediate: true,
})



</script>