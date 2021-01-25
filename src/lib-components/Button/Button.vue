<template>
  <component
    :is="component"
    class="fm-button"
    :class="classesExtra"
    :data-type="dataType"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <component v-if="icon" :is="iconComponent" :class="{'mr-2 -ml-1': $slots.default}" />
    <slot></slot>
  </component>
</template>

<script>
  import * as outlineIcons from '@vue-hero-icons/outline'
  import * as solidIcons from '@vue-hero-icons/solid'
  import style from './../../mixins/style'

  const allIcons = {
    outline: outlineIcons,
    solid: solidIcons,
  }

  export default {
    name: 'FmButton',
    mixins: [style],
    props: {
      tag: {
        type: String,
        default: 'button'
      },
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
      component () {
        return this.tag
      },
      classesExtra () {
        return [
          ...this.classes,
          ...[
            this.icon && !this.$slots.default ? 'p-1' : '',
            this.icon && !this.$slots.default && this.rounded ? 'rounded-full' : '',
          ]
        ]
      },
    }
  }
</script>

<style>

.fm-button {
  --fm-button-default: var(--fm-default);
  --fm-button-default-light: var(--fm-default-light);
  --fm-button-default-dark: var(--fm-default-dark);
  --fm-button-default-text: var(--fm-default-text);

  cursor: pointer;
  display: flex;
  font-weight: 600;
  padding: 0.25em 1em;
  color: rgb(var(--fm-button-default));

  &:not(.contained) {
    filter: brightness(80%);
  }

  &.active,
  &:active {
    background-color: rgba(var(--fm-button-default), var(--alpha-20));
  }

  &.contained {
    background-color: rgb(var(--fm-button-default));
    color: rgb(var(--fm-default-text));

    &:hover {
      background-color: rgba(var(--fm-button-default), var(--alpha-80));
    }

    &.active,
    &:active {
      background-color: rgba(var(--fm-button-default), var(--alpha-60));
    }
  }

  &.raised {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  &:disabled,
  &[disabled] {
    color: rgba(var(--fm-button-default-dark), var(--alpha-30)) !important;
    cursor: default;

    &:hover:not(.contained) {
      background-color: transparent;
    }

    &.contained {
        background-color: rgba(var(--fm-button-default-dark), var(--alpha-10)) !important;
    }
  }
}
</style>