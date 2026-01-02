<template>

    <!-- card section -->
    <section>
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <dashboardCard v-for="card in headerCards" :key="card.id" :id="card.id" :title="card.title" :value="card.value" :percentage="card.percentage" :color="card.color" :trend="card.trend" />
        </div>
    </section>

    <!-- chart section -->
    <section class="py-5">
        <div class="bg-white rounded-card p-5 shadow">
            <div class="text-lg font-medium text-primary-text-500">Sales Overview</div>
            <div class="w-full overflow-x-auto">
                <Chart :size="{ width: '700', height: 420 }" :data="chartData" :margin="margin" :direction="direction">

                    <template #layers>
                        <Grid strokeDasharray="2,2" />
                        <Line :dataKeys="['name', 'expense']" :lineStyle="{ stroke: 'green' }" />
                        <Line :dataKeys="['name', 'revenue']" :lineStyle="{ stroke: 'blue' }" />
                    </template>
                </Chart>
            </div>
        </div>
    </section>

    <!-- table section -->
    <section class="py-5">

        <appTable :data="styledTableData" :pageSize="10">
            <template #head>
                <div class="flex items-center justify-between p-5">
                    <div class="w-full">
                        <appButton name="Add Task" variant="primary" />
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/5">
                        <appInput v-model="search" placeholder="Search..." @keyup="searchTask" />
                    </div>
                </div>
            </template>
            <template #body>
                <thead class="text-left bg-table-header-500 border-b border-t border-border-500">
                    <tr>
                        <th class="text-md font-medium text-primary-text-500 px-6 py-2 min-w-60" v-for="header in tableHeaders" :key="header.data">{{ header.title }}</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr v-for="row in tableData" :key="row.id" class="hover:bg-stone-50 transition border-b border-border-500">
                        <td class="px-6 py-3">
                            <a href="#" class="text-primary-500 hover:underline font-medium">
                                {{ row.task_name }}
                            </a>
                        </td>

                        <td class="px-6 py-3">
                            <span class="px-3 py-1 text-xs rounded-button font-semibold capitalize" :class="{
                                'bg-success-500 text-white': row.status === 'completed' || row.status === 'in_progress',
                                'bg-warning-500 text-white': row.status === 'pending',
                            }">
                                {{ row.status.replace('_', ' ') }}
                            </span>
                        </td>

                        <td class="px-6 py-3">
                            {{ row.assigned_to }}
                        </td>

                        <td class="px-6 py-3">
                            {{ row.due_date }}
                        </td>

                        <td class="px-2 py-3">
                            <span class="text-slate-400 hover:text-slate-600 cursor-pointer text-lg">&#x2026;</span>
                        </td>
                    </tr>
                    <tr v-if="tableData?.length === 0">
                        <td colspan="5" class="text-center py-5">No data found</td>
                    </tr>
                </tbody>
            </template>
        </appTable>
    </section>


</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart, Grid, Line } from 'vue3-charts'
import { staticData } from '@/services/static';

import dashboardCard from '@/components/dashboard-card.vue';
import appTable from '@/components/table.vue';
import appButton from '@/components/button.vue';
import appInput from '@/components/input.vue';

const search = ref('');
const tableData = ref();
const data = staticData();

const headerCards = data.headerCards;

const styledTableData = data.styledTableData;

const tableHeaders = data.tableHeaders;

const chartData = data.chartData;
const direction = data.direction;
const margin = data.margin;


onMounted(() => {
    tableData.value = styledTableData.value;
})

const searchTask = (event) => {
    // Debounce timer ref
    if (!window.__searchTaskTimer) window.__searchTaskTimer = null;

    if (window.__searchTaskTimer) {
        clearTimeout(window.__searchTaskTimer);
    }

    window.__searchTaskTimer = setTimeout(() => {
        const q = event.target.value ? event.target.value.trim().toLowerCase() : '';
        console.log(q);
        if (!q) {
            tableData.value = styledTableData.value;
        } else {
            tableData.value = styledTableData.value.filter(row =>
                Object.values(row)
                    .join(' ')
                    .toLowerCase()
                    .includes(q)
            );
        }
    }, 300);
}
</script>