<template>
  <div class="fm-radio" :class="classes" :data-type="dataType">
    <label v-for="(option, key) in options" :key="key">
      <input
        type="radio"
        :class="classes"
        v-bind:model="model"
        v-on:change="update"
        v-bind="attrs"
        :value="option.value"
      />
      <span v-if="option.label">{{ option.label }}</span>
    </label>
  </div>
</template>

<script>
  import style from '@/mixins/style'

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
      options: {
        type: Array,
      },
      required: Boolean,
      checked: Boolean,
      trueValue: { default: true },
      falseValue: { default: false },
      id: {
        type: String,
        default () {
          return 'fm-radio-' + this._uid
        }
      },
      name: {
        type: String,
        default () {
          return 'fm-radio-' + this._uid
        }
      },
    },
    computed: {
      attrs () {
        const attrs = {
          id: this.id,
          name: this.name,
          disabled: this.disabled,
          required: this.required,
          checked: this.isSelected,
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
.fm-radio {
  --fm-radio-default: var(--fm-default);
  --fm-radio-default-light: var(--fm-default-light);
  --fm-radio-default-dark: var(--fm-default-dark);
  --fm-radio-default-text: var(--fm-default-text);

  display: flex;
  flex-direction: column;

  > label {
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
        display: inline-block;
        cursor: pointer;
        color: rgb(var(--fm-radio-default-dark));

        &::before {
          content: "";
          display: inline-block;
          width: 1.2em;
          height: 1.2em;
          box-sizing: border-box;
          vertical-align: top;
          margin: 0.1em 0.5em 0.1em 0;
          border: 2px solid rgba(var(--fm-radio-default-dark), var(--alpha-70));
          border-radius: 50%;
          transition: border-color 0ms, background-color 0ms;
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 2px;
          left: 2px;
          margin: 0.22em 0.13em;
          width: 0.7em;
          height: 0.7em;
          background-color: transparent;
          border-radius: 50%;
        }
      }

      &:checked + span {
        &::before {
          border-color: rgb(var(--fm-radio-default));
        }
        &::after {
          background-color: rgb(var(--fm-radio-default));
        }
      }

      &:disabled + span {
        cursor: default;
        color: rgba(var(--fm-radio-default-dark), var(--alpha-30));

        &::before {
          border-color: rgba(var(--fm-radio-default-dark), var(--alpha-30));
        }
      }

      &:disabled:checked + span::after {
        background-color: rgba(var(--fm-radio-default-dark), var(--alpha-30));
      }
    }
  }

  &.raised input + span::before {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  &.active input + span::before,
  input:active + span::before {
    box-shadow: 0 0 1px 1px rgb(var(--fm-radio-default-light, 255, 255, 255)), 0 0 6px 2px rgb(var(--fm-radio-default, 0, 0, 0));
  }

  &.contained input {
    & + span::before {
      background-color: rgb(var(--fm-radio-default));
      border-color: rgb(var(--fm-radio-default));
    }

    &:checked + span::after {
      background-color: rgb(var(--fm-radio-default-text)) !important;
    }

    &:disabled + span::before {
      background-color: rgba(var(--fm-radio-default-dark), var(--alpha-10));
      border-color: transparent;
    }

    &:disabled:not(:checked) + span::after {
      background-color: transparent;
    }

    &:disabled:checked + span::after {
      background-color: rgba(var(--fm-radio-default-dark), var(--alpha-20)) !important;
    }
  }
}
</style>