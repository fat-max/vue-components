export default {
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
    trueValue: { default: true },
    falseValue: { default: false },
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