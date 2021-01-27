<template>
  <label class="fm-checkbox" :class="classes" :data-type="dataType">
    <input
      type="checkbox"
      :class="classes"
      v-bind:model="model"
      v-on:change="update"
      v-bind="attrs"
      :indeterminate.prop="indeterminate"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script>
  import style from '@/mixins/style'
  import checkbox from '@/mixins/checkbox'

  export default {
    name: 'FmCheckbox',
    mixins: [style, checkbox],
    props: {
      id: {
        type: String,
        default () {
          return 'fm-checkbox-' + this._uid
        }
      },
      indeterminate: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style>
.fm-checkbox {
  --fm-checkbox-default: var(--fm-default);
  --fm-checkbox-default-light: var(--fm-default-light);
  --fm-checkbox-default-dark: var(--fm-default-dark);
  --fm-checkbox-default-text: var(--fm-default-text);

  z-index: 0;
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  /*width: 1.2em;*/
  /*height: 1.2em;*/


  input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    & + span {
      display: inline-block;
      cursor: pointer;
      color: rgb(var(--fm-checkbox-default-dark));

      &::before {
        content: "";
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        box-sizing: border-box;
        vertical-align: top;
        margin:0.1em 0.5em 0.1em 0;
        border: 2px solid rgba(var(--fm-checkbox-default-dark), var(--alpha-70));
        transition: border-color 0ms, background-color 0ms;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0.2em;
        width: 0.8em;
        height: 0.4em;
        border: solid 2px transparent;
        border-right: none;
        border-top: none;
        transform: translate(0.2em, 0.25em) rotate(-45deg);
      }
    }

    &:indeterminate + span::after {
      border-left: none;
      transform: translate(0.19em, 0.20em);
    }

    &:checked + span,
    &:indeterminate + span {
      &::before {
        border-color: rgb(var(--fm-checkbox-default));
      }
      &::after {
        border-color: rgb(var(--fm-checkbox-default));
      }
    }

    &:disabled + span {
      cursor: default;
      color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30));

      &::before {
        border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30));
      }
    }

    &:disabled:checked + span::after,
    &:disabled:indeterminate + span::after {
      border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30));
    }
  }

  &.raised input + span::before {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  &.active input + span::before,
  input:active + span::before {
    box-shadow: 0 0 1px 1px rgb(var(--fm-checkbox-default-light, 255, 255, 255)), 0 0 6px 2px rgb(var(--fm-checkbox-default, 0, 0, 0));
  }

  &.rounded input + span::before {
    border-radius: 0.25em !important;
    /*border-radius: 50% !important;*/
  }

  &.contained input {
    & + span::before {
      background-color: rgb(var(--fm-checkbox-default));
      border-color: rgb(var(--fm-checkbox-default));
    }

    &:checked + span::after,
    &:indeterminate + span::after {
      border-color: rgb(var(--fm-checkbox-default-text));
    }

    &:disabled + span::before {
      background-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-10));
      border-color: transparent;
    }

    &:disabled:not(:checked):not(:indeterminate) + span::after {
      border-color: transparent;
    }

    &:disabled:checked + span::after,
    &:disabled:indeterminate + span::after {
      border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-20)) !important;
    }
  }
}
</style>