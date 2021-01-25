Notification
<template>
  <component
    :is="component"
    class="fm-notification"
    :class="classes"
  >
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: 'FmNotification',
    props: {
      alertType: {
        type: String,
        default: 'default'
      },
    },
    computed: {
      component () {
        return 'div'
      },
      classes () {
        return [
          this.alertType,
        ]
      },
    }
  }
</script>
