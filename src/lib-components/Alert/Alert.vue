<template>
  <component
    :is="component"
    class="fm-alert"
    :class="classes"
    :data-type="dataType"
  >
    <span>
      <slot></slot>
    </span>
  </component>
</template>

<script>
  import style from './../../mixins/style'

  export default {
    name: 'FmAlert',
    mixins: [style],
    computed: {
      component () {
        return 'div'
      },
    }
  }
</script>

<style scoped>
.fm-alert {
  --fm-alert-default: var(--fm-default);
  --fm-alert-default-light: var(--fm-default-light);
  --fm-alert-default-dark: var(--fm-default-dark);
  --fm-alert-default-text: var(--fm-default-text);

  display: block;
  width: 100%;
  padding: 0.5em 1em;
  margin: 0.25em;
  border-left: 6px solid rgb(var(--fm-alert-default));
  font-weight: 500;

  &.contained {
    color: rgb(var(--fm-alert-default-text));
    border: 1px solid rgb(var(--fm-alert-default));
    border-left: 6px solid rgb(var(--fm-alert-default));
    background-color: rgba(var(--fm-alert-default), var(--alpha-20));
  }

  &.rounded {
    border-radius: 0.25em !important;
  }

  > span {
    /*filter: brightness(80%);*/
  }
}
</style>