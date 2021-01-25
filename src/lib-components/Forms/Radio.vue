<template>
  <label class="fm-radio" :class="classes" :data-type="dataType">
    <input
      type="radip"
      :class="classes"
      v-bind:model="model"
      v-on:change="update"
      v-bind="attrs"
      :indeterminate.prop="indeterminate"
    />
    <span class="ml-2" v-if="label">{{ label }}</span>
  </label>
</template>

<script>
  import style from './../../mixins/style'

  export default {
    name: 'FmRadio',
    mixins: [style],
    model: {
      prop: 'model',
      event: 'change'
    },
    props: {
      model: [String, Boolean, Object, Number, Array],
      label: String,
      value: {
        type: [String, Boolean, Object, Number],
      },
      name: [String, Number],
      required: Boolean,
      disabled: Boolean,
      checked: Boolean,
      indeterminate: Boolean,
      trueValue: { default: true },
      falseValue: { default: false },
      id: {
        type: String,
        default () {
          return 'fm-checkbox-' + this._uid
        }
      }
    },
    computed: {
      attrs () {
        const attrs = {
          id: this.id,
          name: this.name,
          disabled: this.disabled,
          required: this.required,
          checked: this.isSelected,
          'true-value': this.trueValue,
          'false-value': this.falseValue
        }

        if (this.hasValue) {
          if (this.value === null || typeof this.value !== 'object') {
            attrs.value = (this.value === null || this.value === undefined) ? '' : String(this.value)
          }
        }

        return attrs
      },
      isSelected () {
        if (this.model instanceof Array) {
          return this.model.includes(this.value)
        }

        if (this.hasValue) {
          return this.model === this.value
        }

        return this.model === this.trueValue
      },
      hasValue () {
        return Object.prototype.hasOwnProperty.call(this.$options.propsData, 'value')
      },
    },
    methods: {
      update() {
        if (this.disabled) return

        if (this.model instanceof Array) {
          let newModel = [...this.model]

          if (!this.isSelected) {
            newModel.push(this.value)
          } else {
            newModel.splice(newModel.indexOf(this.value), 1)
          }
          this.$emit('change', newModel)
        } else if(this.hasValue) {
          this.$emit('change', this.isSelected ? null : this.value)
        } else {
          this.$emit('change', this.isSelected ? this.falseValue : this.trueValue)
        }
      }
    }
  }
</script>

<style>
.fm-checkbox {
  z-index: 0;
  position: relative;
  display: inline-block;
  /*line-height: 1.5;*/
  color: rgba(var(--fm-default-dark), var(--alpha-90));
  font-weight: bold;

  &.fm-checkbox-primary {
  }

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
    transition: opacity 0.3s, transform 0.2s;
    z-index: -1;
    background-color: rgb(var(--fm-default-dark));
    /*background-color: rgba(var(--fm-default-dark), var(--alpha-90));*/

    &:disabled {
      opacity: 0;

      & + span {
        cursor: default;
        opacity: 0.4;

        &::before {
          border-color: currentColor;
        }
      }
    }

    &:checked,
    &:indeterminate {
      /*background-color: rgb(33, 150, 243);*/
      background-color: rgb(var(--fm-default));

      & + span::before,
      & + span::before {
        /*border-color: rgb(33, 150, 243);*/
        border-color: rgb(var(--fm-default));
        /*background-color: rgb(33, 150, 243);*/
        background-color: rgb(var(--fm-default));
      }

      & + span::after,
      & + span::after {
        border-color: rgb(255, 255, 255);
      }

      &:disabled + span::before,
      &:disabled + span::before {
        border-color: transparent;
        background-color: currentColor;
      }
    }

    &:indeterminate + span::after {
      border-left: none;
      transform: translate(0.17em, 0.14em);
    }

  }

  &:hover > input:not(:disabled) {
    opacity: 0.1;

    &:active {
      opacity: 0.3;
    }
  }

  & > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    /*vertical-align: middle;*/

    &::before {
      content: "";
      display: inline-block;
      width:1.15em;
      height:1.15em;
      box-sizing: border-box;
      vertical-align: top;
      margin:.1em 0.625em .1em -0.125em;
      border:2px solid rgba(var(--fm-default-dark), var(--alpha-60));
      transition: border-color 0.1s, background-color 0.1s;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0.1em;
      left: 0.4em;
      width: 0.7em;
      height: 0.4em;
      border: solid 2px transparent;
      border-right: none;
      border-top: none;
      transform: translate(0.2em, 0.25em) rotate(-45deg);
    }
  }
}
</style>