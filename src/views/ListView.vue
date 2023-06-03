<script lang="ts">
import ReportDetailModal from '../components/common/ReportDetailModal.vue'
export default {
    components : {
        ReportDetailModal,
    },
    data () {
        return {
            "user_reports": [
                {
                    "user_id": "森　誠一郎",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "トイレの扉が壊れています",
                },
                {
                    "user_id": "浦川　真一",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "道路にひび割れがあって怖いです",
                },
                {
                    "user_id": "元谷　崇",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "土砂崩れがおきそうです",
                },
                {
                    "user_id": "山本　竜三",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "夜道が暗くて危ないです",
                },
                {
                    "user_id": "福山　怜史",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "道路が壊れて困っています",
                },
                {
                    "user_id": "佐野　太思",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "道路が壊れて困っています",
                },
                {
                    "user_id": "name",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "道路が壊れて困っています",
                },
                {
                    "user_id": "name",
                    "location": {
                        "longitude": '東京都台東区上野７丁目',
                        "latitude": 0
                    },
                    "content": "道路が壊れて困っています",
                },
            ],
        };
    }
}
</script>
<template>
<div class="p-1 sm:ml-64">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
            <div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="ml-3 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span class="sr-only">Action button</span>
                    フィルター
                    <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">未対応</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">対応中</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">完了済み</a>
                        </li>
                    </ul>
                    <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">リストダウンロード</a>
                    </div>
                </div>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mr-2">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search">
            </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        投稿内容
                    </th>
                    <th scope="col" class="px-6 py-3">
                        発生時間<br>最終更新時間
                    </th>
                    <th scope="col" class="px-6 py-3">
                        発生場所
                    </th>
                    <th scope="col" class="px-6 py-3">
                        ステータス
                    </th>
                    <th scope="col" class="px-6 py-3">
                        詳細
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user_report in user_reports" :key="user_report" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <div class="">
                            <div class="text-base font-semibold">{{ user_report.content }}</div>
                            <div class="font-normal text-gray-500">{{ user_report.user_id }}</div>
                        </div>  
                    </th>
                    <td class="px-6 py-4">
                        2023/06/02 12:19<br>
                        <span class="font-bold">2023/06/03 23:19</span>
                    </td>
                    <td class="px-6 py-4">
                        {{ user_report.location.longitude }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center">
                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> 対応中
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <!-- Modal toggle -->
                        <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">詳細表示</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <ReportDetailModal />
</div>
</template>

<script>

</script>