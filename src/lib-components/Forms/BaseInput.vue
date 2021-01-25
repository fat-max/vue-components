<template>
  <input
    :type="type"
    class="fm-input"
    :class="classes"
  >
</template>

<script>
  export default {
    name: 'FmBaseInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
    },
    computed: {
      classes () {
        return []
      },
    },
  }
</script>

<style></style>