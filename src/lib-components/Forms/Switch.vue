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
    <span></span>
    <span>{{ label }}</span>
  </label>
</template>

<script>
  import style from '@/mixins/style'
  import checkbox from '@/mixins/checkbox'

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

  z-index: 0;
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  

  input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    & + span {
      cursor: pointer;
      position: relative;
      display: inline-block;
      background-color: rgba(var(--fm-switch-default-dark), var(--alpha-30));
      width: 3em;
      height: 1.4em;
      vertical-align: top;
      margin:0.1em 0.5em 0.1em 0;

/*      &::before {
        content: "";
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        box-sizing: border-box;
        vertical-align: top;
        margin:0.1em 0.5em 0.1em 0;
        border: 2px solid rgba(var(--fm-checkbox-default-dark), var(--alpha-70));
        transition: border-color 0ms, background-color 0ms;
      }*/

      &::after {
        content: "";
        position: absolute;
        display: block;
        margin: 0.15em;
        width: 1.1em;
        height: 1.1em;
        /*border: 2px solid inherit;*/
        background-color: rgb(var(--fm-switch-default-light));
      }

      & + span {
        cursor: pointer;
      }
    }

    &:checked + span {
      background-color: rgba(var(--fm-switch-default), var(--alpha-50));

      &::after {
        background-color: rgb(var(--fm-switch-default));
        left: calc(100% - 0.3em);
        transform: translateX(-100%);
      }
    }

    &:disabled + span {
      background-color: rgba(var(--fm-switch-default-dark), var(--alpha-10));
      cursor: default;

      &::after {
        /*background-color: rgba(var(--fm-switch-default-light), var(--alpha-50));*/
        background-color: rgba(var(--fm-switch-default-dark), var(--alpha-20)) !important;
      }

      & + span {
        cursor: default;
        color: rgba(var(--fm-switch-default-dark), var(--alpha-30)) !important;
      }
    }
  }

  &.raised input + span {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  &.rounded input + span {
    border-radius: 99999px;
    
    &::after {
      border-radius: 50%;
    }
  }

  &.active input + span::after,
  & input:active + span::after {
    box-shadow: 0 0 1px 1px rgb(var(--fm-switch-default-light, 255, 255, 255)), 0 0 6px 2px rgb(var(--fm-switch-default, 0, 0, 0));
  }
}
</style>