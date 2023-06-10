<template>
    <div style="padding: 15px 13px">{{ emojisOutput }}</div>
    <Picker :data="emojiIndex" set="twitter" @select="showEmoji" />
</template>

<script>
// Import data/twitter.json to reduce size, all.json contains data for
// all emoji sets.
import data from 'emoji-mart-vue-fast/data/all.json'
// Import default CSS
import 'emoji-mart-vue-fast/css/emoji-mart.css'
// Vue 3, import components from `/src`:
import { Picker, EmojiIndex } from 'emoji-mart-vue-fast/src'

// Create emoji data index.
// We can change it (for example, filter by category) before passing to the component.
let emojiIndex = new EmojiIndex(data)

export default {
  name: 'App',
  components: {
    Picker
  },

  data() {
    return {
      emojiIndex: emojiIndex,
      emojisOutput: ''
    }
  },

  methods: {
    showEmoji(emoji) {
      this.emojisOutput = emoji.native
    }
  }
}
</script>

<style>
section.emoji-mart {
  top: 51px;
  left: 0;
  position: absolute;
}
</style>
