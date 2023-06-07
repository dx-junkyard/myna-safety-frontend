<script lang="ts">
import ReportDetailModal from '../components/common/ReportDetailModal.vue'
import { defineComponent, computed, onBeforeMount } from "vue";
import { useStore } from '@/store';

export default defineComponent({
    setup(){
        const store = useStore();
        const userReport = computed(() => store.getters['userReports/getAllList']);

        onBeforeMount(async () => {
            await store.dispatch('userReports/getAllList')
        })
        return {userReport};
    },
    components : {
        ReportDetailModal,
    },
    data () {
        return {
        };
    },
})
</script>

<template>
    <div class="p-4 sm:ml-64">
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:md:grid-cols-6">
            <div v-for="user_report in userReport.userReports" :key="user_report" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal">
                    <img v-if="user_report.image_url" class="rounded-t-lg" :src=user_report.image_url alt="product image" />
                    <img v-if="user_report.content.indexOf('ひび割れ') != -1" class="rounded-t-lg" src="@/assets/image/hibiware.jpg" alt="product image" />
                    <img v-if="user_report.content.indexOf('夜道') != -1" class="rounded-t-lg" src="@/assets/image/yomichi.jpg" alt="product image" />
                    <img v-if="user_report.content.indexOf('土砂崩れ') != -1" class="rounded-t-lg" src="@/assets/image/dosyakuzure.jpg" alt="product image" />
                    <img v-if="!user_report.image_url && user_report.content.indexOf('ひび割れ') == -1 && user_report.content.indexOf('夜道') == -1 && user_report.content.indexOf('土砂崩れ') == -1"
                    class="p-8 rounded-t-lg bg-light-orange " src="@/assets/image/people_in_trable.png" alt="product image" />
                    <div class="px-5 pt-3 pb-5">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ user_report.content }}</h5>
                        <div class="flex items-center mt-2.5 mb-5">
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">緯度</span>
                            <span class="text-sm">{{ user_report.location.longitude }}</span>
                        </div>
                        <div class="flex items-center mt-2.5 mb-5">
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">緯度</span>
                            <span class="text-sm">{{ user_report.location.latitude }}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <ReportDetailModal />
    </div>
</template>

<style>
.bg-light-orange {
    background: #fdd23c78;
}
</style>