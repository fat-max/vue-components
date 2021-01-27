<template>
  <div class="fm-tooltip" :class="classes" :data-type="dataType">
    <slot />
    <div class="tooltip" :class="tooltipClass">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
  import style from '@/mixins/style'

  export default {
    name: 'FmTooltip',
    mixins: [style],
    props: {
      text: {
        type: String,
        required: true
      },
      position: {
        type: String,
        default: 'bottom'
      },
    },
    computed: {
      tooltipClass () {
        return [
          ...this.classes,
          [
            this.position,
          ],
        ]
      }
    }
  }
</script>

<style scoped>
.fm-tooltip {
  --fm-tooltip-default: var(--fm-default);
  --fm-tooltip-default-light: var(--fm-default-light);
  --fm-tooltip-default-dark: var(--fm-default-dark);
  --fm-tooltip-default-text: var(--fm-default-text);

  position: relative;
  display: inline-block;

  .tooltip {
    
    position: absolute;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-timing-function: linear;
    transition-duration: 300ms;
    left: 50%;
    top: 100%;
    width: 120px;
    margin: 0.5em 0 0 -60px;
    padding: 0.25em 0.5em;
    background-color: rgba(var(--fm-tooltip-default), var(--alpha-100));
    color: rgb(var(--fm-tooltip-default-text));
    opacity: 0;

    span {
      &::after {
        content: " ";
        position: absolute;
        z-index: 10;
        margin: 0.5em 0 0 -6px;
        border-width: 6px;
        border-style: solid;
        bottom: 100%;
        left: 50%;
        border-color: transparent transparent rgba(var(--fm-tooltip-default), var(--alpha-100)) transparent;
      }
    }

    &.top {
      bottom: 100%;
      top: auto;
      margin: 0 0 0.5em -60px;

      span::after {
        top: 100%;
        margin: 0 0 0.5em -6px;

        border-color: rgba(var(--fm-tooltip-default), var(--alpha-100)) transparent transparent transparent;
      }
    }

    &.left {
      right: 100%;
      top: 0;
      margin: 0 0.5em 0 auto;

      span::after {
        left: 100%;
        top: auto;
        bottom: auto;
        margin: 0.5em -6px 0.5em 0;
        border-color: transparent transparent transparent rgba(var(--fm-tooltip-default), var(--alpha-100));
      }
    }

    &.right {
      left: 100%;
      top: 0;
      margin: 0 auto 0 0.5em;

      span::after {
        right: 100%;
        left: auto;
        top: auto;
        bottom: auto;
        margin: 0.5em 0 0.5em -6px;
        border-color: transparent rgba(var(--fm-tooltip-default), var(--alpha-100)) transparent transparent;
      }
    }
  }

  &:hover .tooltip,
  .tooltip.active {
    opacity: 1;
  }
}
</style>