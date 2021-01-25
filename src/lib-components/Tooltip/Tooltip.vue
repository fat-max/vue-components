<template>
  <div class="fm-tooltip" :class="classes" :data-type="dataType">
    <slot />
    <div class="tooltip" :class="position">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
  import style from './../../mixins/style'

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
        return this.position
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
    /*@apply absolute text-white opacity-100 transition-opacity ease-linear duration-300 left-1/2 z-10 text-center px-2 py-1 bg-default-dark bg-opacity-75 cursor-default;*/
    /*@apply absolute hidden text-white opacity-0 transition-opacity ease-linear duration-300 left-1/2 z-10 text-center px-2 py-1 bg-default-dark bg-opacity-75 cursor-default;*/
    
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

/*    span::after {
      @apply bottom-full left-1/2 -mt-2;
      border-color: transparent transparent rgba(var(--fm-tooltip-default), var(--alpha-100)) transparent;
    }*/

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

  .tooltip-right {
    @apply left-full top-0 ml-2;

    span::after {
      @apply right-full -ml-0 top-4;
      border-color: transparent rgba(var(--fm-tooltip-default), var(--alpha-100)) transparent transparent;
    }
  }

  &:hover .tooltip {
    opacity: 1;
  }
}

/*.fm-tooltip-primary {
  [class^="tooltip"] {
    @apply bg-primary-light bg-opacity-25;
    span::after {
      @apply border-opacity-5;
    }
  }
  .tooltip-bottom span::after {border-color: transparent transparent color(theme('colors.primary.dark') a(75%)) transparent;}
  .tooltip-top span::after {border-color: theme('colors.primary.dark') transparent transparent transparent;}
  .tooltip-left span::after {border-color: transparent transparent transparent color(theme('colors.primary.dark') a(75%));}
  .tooltip-right span::after {border-color: transparent color(theme('colors.primary.dark') a(75%)) transparent transparent;}
}

.fm-tooltip-secondary {
  & [class^="tooltip"] {
    @apply bg-secondary-dark bg-opacity-75;
  }

  .tooltip-bottom span::after {border-color: transparent transparent color(theme('colors.secondary.dark') a(75%)) transparent;}
  .tooltip-top span::after {border-color: theme('colors.secondary.dark') transparent transparent transparent;}
  .tooltip-left span::after {border-color: transparent transparent transparent color(theme('colors.secondary.dark') a(75%));}
  .tooltip-right span::after {border-color: transparent color(theme('colors.secondary.dark') a(75%)) transparent transparent;}
}

.fm-tooltip-tertiary {
  & [class^="tooltip"] {
    @apply bg-tertiary-dark bg-opacity-75;
  }

  .tooltip-bottom span::after {border-color: transparent transparent color(theme('colors.tertiary.dark') a(75%)) transparent;}
  .tooltip-top span::after {border-color: color(theme('colors.tertiary.dark') a(75%)) transparent transparent transparent;}
  .tooltip-left span::after {border-color: transparent transparent transparent color(theme('colors.tertiary.dark') a(75%));}
  .tooltip-right span::after {border-color: transparent color(theme('colors.tertiary.dark') a(75%)) transparent transparent;}
}

.fm-tooltip-quaternary {
  & [class^="tooltip"] {
    @apply bg-quaternary-dark bg-opacity-75;
  }

  .tooltip-bottom span::after {border-color: transparent transparent color(theme('colors.quaternary.dark') a(75%)) transparent;}
  .tooltip-top span::after {border-color: color(theme('colors.quaternary.dark') a(75%)) transparent transparent transparent;}
  .tooltip-left span::after {border-color: transparent transparent transparent color(theme('colors.quaternary.dark') a(75%));}
  .tooltip-right span::after {border-color: transparent color(theme('colors.quaternary.dark') a(75%)) transparent transparent;}
}*/

</style>