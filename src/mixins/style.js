export default {
  props: {
    fmType: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    contained: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    classes () {
      return [
        // this.fmType ? `${this.componentClassPrefix}-${this.fmType}` : this.componentClassPrefix,
        
        this.rounded ? 'rounded' : '',
        this.contained ? 'contained' : '',
        this.raised ? 'raised' : '',
        this.active ? 'active' : '',
      ]
    },
    dataType () {
      return this.fmType
    },
    componentClassPrefix () {
      return this.$options.name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    }
  },
}