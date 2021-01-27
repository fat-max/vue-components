<template>
  <div class="fm-notification" :class="classesExtra" :data-type="dataType">
    <component v-if="icon" :is="iconComponent" class="inline-block mr-2" />
    <span>foobar</span>
  </div>
</template>

<script>
  import style from '@/mixins/style'
  import icon from '@/mixins/icon'

  export default {
    name: 'FmNotification',
    mixins: [style, icon],
    props: {
      alertType: {
        type: String,
        default: 'default'
      },
      large: {
        type: Boolean,
        default: false,
      },
      position: {
        type: String,
        default: 'bottom',
      },
      time: {
        type: Number,
        default: 3000,
      },
    },
    computed: {
      classesExtra () {
        return [
          ...this.classes,
          ...[
            this.large ? 'w-4/5' : '',
            this.position,
          ]
        ]
      },
    }
  }
</script>

<style scoped>
.fm-notification {
  --fm-notification-default: var(--fm-default);
  --fm-notification-default-light: var(--fm-default-light);
  --fm-notification-default-dark: var(--fm-default-dark);
  --fm-notification-default-text: var(--fm-default-text);

  position: fixed;
  display: flex;
  align-items: center;
  z-index: 50;
  background-color: rgb(var(--fm-notification-default-light));
  border: 1px solid rgb(var(--fm-notification-default));
  color: rgb(var(--fm-notification-default));
  padding: 0.5em 1em;
  margin: 0 auto;

  &.bottom {
    bottom: 2em;
  }

  &.top {
    top: 5em;
  }

  &:not(.contained) * {
    filter: brightness(80%);
  }

  &.contained {
    background-color: rgb(var(--fm-notification-default));
    color: rgb(var(--fm-notification-default-text));
  }

  &.raised {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
}

</style>