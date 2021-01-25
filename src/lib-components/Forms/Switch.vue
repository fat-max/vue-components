<template>
  <label class="fm-switch" :class="classes" :data-type="dataType">
    <input
      type="checkbox"
      tabindex="0"
      v-bind:model="model"
      v-on:change="update"
      :disabled="disabled"
      v-bind="attrs"
    >
    <span class="ml-0" :class="{'': label}">{{ label }}</span>
  </label>
</template>

<script>
  import style from './../../mixins/style'
  import checkbox from './../../mixins/checkbox'

  export default {
    name: 'FmSwitch',
    mixins: [style, checkbox],
    props: {
      id: {
        type: String,
        default () {
          return 'fm-switch-' + this._uid
        }
      },
    },
  }
</script>

<style scoped>
.fm-switch {
  --fm-switch-default: var(--fm-default);
  --fm-switch-default-light: var(--fm-default-light);
  --fm-switch-default-dark: var(--fm-default-dark);
  --fm-switch-default-text: var(--fm-default-text);

  @apply relative w-12 select-none my-3;

  input {
    opacity: 0;
    pointer-events: none;
    position: absolute;

    & + span {
      display: inline-block;
      width: 100%;
      cursor: pointer;
      color: rgb(var(--fm-checkbox-default-dark));

      &::before {
        content: "";
        border-radius: 9999px;
        /*border-width: 0px;*/
        display: inline-block;
        height: 1em;
        width: 2em;
        line-height: 1em;
        overflow: hidden;
        padding: 0px;
        background-color: rgba(var(--fm-switch-default-dark), var(--alpha-30));
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 1.3em;
        height: 1.3em;
        background-color: rgb(var(--fm-switch-default-light));
        /*background-color: rgba(var(--fm-switch-default-light), var(--alpha-30));*/
        margin-right: 0.4em;
        top: 0;
        bottom:0;
        right: 1.8em;
        border-radius:50%;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      }
    }



    &:checked + span {
      &::before {
        background-color: rgba(var(--fm-switch-default), var(--alpha-50));
      }
      &::after {
        right:0;
        background-color: rgb(var(--fm-switch-default));
      }
    }

    &:disabled {
      & + span::before {
        background-color: rgb(var(--fm-switch-default-dark), var(--alpha-10));
      }
      & + span::after {
        background-color: rgb(var(--fm-switch-default-light));
      }

      &:checked + span::before {
        background-color: rgba(var(--fm-switch-default), var(--alpha-20));
      }
      &:checked + span::after {
        background-color: rgba(var(--fm-switch-default), var(--alpha-50));
      }
    }
  }
}
</style>