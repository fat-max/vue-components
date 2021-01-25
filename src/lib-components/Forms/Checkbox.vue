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
    <span class="ml-2">{{ label }}</span>
  </label>
</template>

<script>
  import style from '../../mixins/style'
  import checkbox from '../../mixins/checkbox'

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
  line-height: 1.4em;
  color: rgba(var(--fm-checkbox-default-dark), var(--alpha-90));
  font-weight: bold;

  & > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -0.3em;
    top: -0.55em;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0ms, transform 0ms;
    background-color: rgb(var(--fm-checkbox-default));

    & + span {
      display: inline-block;
      width: 100%;
      cursor: pointer;
      color: rgb(var(--fm-checkbox-default-dark));

      &::before {
        content: "";
        display: inline-block;
        width:1.15em;
        height:1.15em;
        box-sizing: border-box;
        vertical-align: top;
        margin:.1em 0.625em .1em -0.125em;
        border:2px solid rgba(var(--fm-checkbox-default-dark), var(--alpha-70));
        transition: border-color 0ms, background-color 0ms;

      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0.15em;
        left: 0.425em;
        width: 0.7em;
        height: 0.4em;
        border: solid 2px transparent;
        border-right: none;
        border-top: none;
        transform: translate(0.2em, 0.25em) rotate(-45deg);
      }
    }

    &:indeterminate + span::after {
      border-left: none;
      left: 0.47em;
      transform: translate(0.12em, 0.22em);
    }

    &:checked + span,
    &:indeterminate + span {
      &::before {
        /*background-color: transparent;*/
        border-color: rgb(var(--fm-checkbox-default));
      }
      &::after {
        border-color: rgb(var(--fm-checkbox-default));
      }
    }

    &:disabled + span {
      color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30));
      &::before {
        border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-10));
      }
      &::after {
        /*border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-10));*/
        border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30));
      }
    }
  }

  &.contained > input {
    &:checked + span,
    &:indeterminate + span {
      &::before {
        background-color: rgb(var(--fm-checkbox-default));
        border-color: rgb(var(--fm-checkbox-default));
      }
      &::after {
        border-color: rgb(var(--fm-checkbox-default-light));
      }
    }

    &:disabled {
      & + span::before {
        background-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30));
        border-color: transparent;
      }
      & + span::after {
        border-color: transparent;
      }

      &:indeterminate + span::after,
      &:checked + span::after {
        border-color: rgb(var(--fm-checkbox-default-light));
      }
    }
  }

  &:hover > input:not(:disabled) {
    opacity: 0.1;

    &:active {
      opacity: 0.3;
    }
  }

  &.active input {
    opacity: 0.3;
  }

  &:not(.contained) {
    filter: brightness(80%);
  }

  &.raised > span::before {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  &.rounded > span::before {
    border-radius: 0.25em !important;
  }
}



/*    &:disabled + span {
      cursor: default;
      color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30)) !important;
      &::before {
        background-color: transparent;
        border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-10)) !important;
      }
      &::after {
        border-color: transparent;
        border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30)) !important;
      }
    }*/

/*    &:checked,
    &:indeterminate {
      & + span::before {
        border-color: rgb(var(--fm-checkbox-default));
      }
      & + span::after {
        border-color: rgb(var(--fm-checkbox-default));
      }
      &:disabled + span::before {
        background-color: transparent;
      }
      &:disabled + span::after {
        border-color: rgba(var(--fm-checkbox-default-dark), var(--alpha-30)) !important;
      }
    }

    &:indeterminate + span::after {
      border-left: none;
      left: 0.47em;
      transform: translate(0.12em, 0.22em);
    }*/



/*


*/
/*}*/
</style>