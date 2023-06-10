<script lang="ts">
import { PropType } from 'vue'
import type { UserReportFeedbackComment } from '@/types/typescript-axios'

export default {
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
        {{ userReportFeedbackComment.user_id }}
        <span>{{ userReportFeedbackComment.created_at }}</span>
      </div>
      <div>{{ userReportFeedbackComment.comment }}</div>
    </div>
  </div>
</template>
