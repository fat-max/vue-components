import * as outlineIcons from '@vue-hero-icons/outline'
import * as solidIcons from '@vue-hero-icons/solid'

const allIcons = {
  outline: outlineIcons,
  solid: solidIcons,
}

export default {
  props: {
    solid: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
  },
  computed: {
    iconComponent () {
      if (!this.icon) return

      return allIcons[this.solid ? 'solid' : 'outline'][this.icon + 'Icon']
    },
  },
}