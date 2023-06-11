<script lang="ts">
import { PropType } from 'vue'
import type { UserReportFeedbackComment } from '@/types/typescript-axios'
import moment from 'moment'

export default {
  setup() {
    return { moment }
  },
  props: {
    userReportFeedbackComment: {
      type: Object as PropType<UserReportFeedbackComment>
    }
  }
}
</script>

<template>
  <div class="flex">
    <div class="p-2 hidden md:block">
      <button
        type="button"
        class="md:flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="user photo"
        />
      </button>
    </div>
    <div>
      <div class="font-semibold">
        テストユーザ
        <span>
          {{ moment(userReportFeedbackComment.created_at).format('YYYY年MM月DD日 hh時mm分') }}</span
        >
      </div>
      <div
        class="block p-2.5 w-full text-sm text-dark-100 bg-gray-10 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      >
        {{ userReportFeedbackComment.comment }}
      </div>
    </div>
  </div>
</template>
