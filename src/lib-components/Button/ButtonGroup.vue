<template>
  <component
    :is="component"
    class="btn"
    :class="classes"
  >
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: 'FmButtonGroup',
    props: {
      tag: {
        type: String,
        default: 'button'
      },
      buttonType: {
        type: String,
        default: 'default'
      },
      raised: {
        type: Boolean,
        default: false
      },
      // size: {
      //   type: Integer,
      //   default: 'button'
      // },
    },
    computed: {
      component () {
        return this.tag
      },
      classes () {
        return [
          this.buttonType,
          this.raised ? 'raised' : ''
        ]
      },
    }
  }
</script>

<style></style>