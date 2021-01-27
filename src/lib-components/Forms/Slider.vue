<template>
  <div class="fm-slider flex w-full block relative my-5" :class="classesExtra" :data-type="dataType">
    <label
      v-if="labelLeft"
      :for="'range-' + _uid"
      class="w-48 pr-6 text-center"
      @click="initThumb = true; value = min"
    >{{ labelLeft }}</label>
    <div class="relative flex-1">
      <input
        type="range"
        v-model="value"
        :id="'id-' + _uid"
        :ref="'range-' + _uid"
        class="w-full"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        @click="initThumb = true"
      />
      <output
        v-if="bubble"
        :for="'id-' + _uid"
        :ref="'output-' + _uid"
        :style="style"
      >{{ value }}</output>
    </div>
    <label
      v-if="labelRight"
      :for="'range-' + _uid"
      class="w-48 pl-6 text-center"
      @click="initThumb = true; value = max"
    >{{ labelRight }}</label>
  </div>
</template>

<script>
  import style from '@/mixins/style'

  export default {
    name: 'FmSlider',
    mixins: [style],
    props: {
      min: {
        type: Number,
        default: 0
      },
      labelLeft: {
        type: String,
        default: null
      },
      max: {
        type: Number,
        default: 100
      },
      labelRight: {
        type: String,
        default: null
      },
      step: {
        type: Number,
        default: 1
      },
      bubble: {
        type: Boolean,
        default: false
      },
      initHidden: {
        type: Boolean,
        default: false
      },
    },
    data: () => ({
      value: null,
      bubbleX: null,
      initThumb: false,
    }),
    computed: {
      classesExtra () {
        return [
          ...this.classes,
          ...[
            this.initHidden && !this.initThumb ? 'hide-thumb' : '',
          ]
        ]
      },
      style () {
        if (this.value === null) return {display: 'none'}

        return {left: this.bubbleX}
        // return {left: this.bubbleX +'px', 'margin-left': this.offset + '%'}
      },
      width () {
        return parseInt(this.$refs['range-' + this._uid].clientWidth)
      }
    },
    watch: {
      value () {
        if (!this.bubble) return

        const min = parseInt(this.min)
        const max = parseInt(this.max)
        const newVal = Number(((this.value - min) * 100) / (max - min))

        this.bubbleX = `calc(${newVal}% + (${4 - newVal * 0.1}px))`
      },
    },
  }
</script>

<style>
.fm-slider {
  --fm-slider-default: var(--fm-default);
  --fm-slider-default-light: var(--fm-default-light);
  --fm-slider-default-dark: var(--fm-default-dark);
  --fm-slider-default-text: var(--fm-default-text);

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-style: none;
    border: none;
    cursor: pointer;
  
    /*&::-moz-range-track*/
    /*&::-ms-track*/
    &::-webkit-slider-runnable-track {
      border: 2px solid rgb(var(--fm-slider-default));
      height: 1em;
    }

    /*&::-ms-thumb*/
    /*&::-ms-range-thumb*/
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: rgb(var(--fm-slider-default));
      height: 1em;
      width: 1em;
      margin-top: -2px;
    }

    &:disabled {
      cursor: default;

      /*&::-moz-range-track*/
      /*&::-ms-track*/
      &::-webkit-slider-runnable-track {
        background-color: rgba(var(--fm-slider-default-dark), var(--alpha-10)) !important;
        border-color: transparent;
      }
    }

    &:disabled {
      /*&::-ms-thumb*/
      /*&::-ms-range-thumb*/
      &::-webkit-slider-thumb {
        background-color: rgba(var(--fm-slider-default-dark), var(--alpha-20)) !important;
        border-color: rgba(var(--fm-slider-default-light), var(--alpha-60)) !important;
      }
    }
  }

  &.rounded input {
    /*&::-moz-range-track*/
    /*&::-ms-track*/
    &::-webkit-slider-runnable-track {
      border-radius: 9999px;
    }

    /*&::-ms-thumb*/
    /*&::-ms-range-thumb*/
    &::-webkit-slider-thumb {
      border-radius: 50%;
    }

    & + output {
      border-radius: 0.25em
    }
  }

  /*&.hide-thumb input::-ms-thumb*/
  /*&.hide-thumb input::-moz-range-thumb*/
  &.hide-thumb input::-webkit-slider-thumb {
    display: none;
  }

  &.contained input {
    /*&::-ms-track*/
    /*&::-moz-range-track*/
    &::-webkit-slider-runnable-track {
      background-color: rgb(var(--fm-slider-default));
      border-left: none;
      border-right: none;
    }

    /*&::-ms-thumb*/
    /*&::-moz-range-thumb*/
    &::-webkit-slider-thumb {
      border: 2px solid rgb(var(--fm-slider-default));
      background-color: rgb(var(--fm-slider-default-text));
    }
  }

  output {
    position: absolute;
    background-color: rgb(var(--fm-slider-default));
    color: rgb(var(--fm-slider-default-text));
    bottom: 2em;
    text-align: center;
    bottom: 2em;
    font-weight: 600;
    display: inline-block;
    padding: 0 0.5em;
    left: 50%;
    transform: translateX(-50%);

    &:after { 
      content: "";
      border-top: 8px solid rgb(var(--fm-slider-default)) !important;
      border-left: 5px solid transparent !important;
      border-right: 5px solid transparent !important;
      margin-left: -5px;
      margin-top: -1px;
      position: absolute;
      top: 100%;
      left: 50%;
    }
  }

  input:disabled + output {
    background-color: rgba(var(--fm-slider-default-dark), var(--alpha-10)) !important;
    color: rgba(var(--fm-slider-default-dark), var(--alpha-30)) !important;

    &:after {
      border-top: 8px solid rgba(var(--fm-slider-default-dark), var(--alpha-10)) !important;
    }
  }

/*  &.raised input::-moz-slider-track,
  &.raised input::-ms-slider-track,*/
  &.raised input::-webkit-slider-runnable-track,
  &.raised input + output {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  &.active input::-webkit-slider-thumb,
  & input:active:not(:disabled)::-webkit-slider-thumb {
    border-color: transparent;
    box-shadow: 0 0 1px 1px rgb(var(--fm-slider-default-light, 255, 255, 255)), 0 0 6px 2px rgb(var(--fm-slider-default, 0, 0, 0));
  }
}
</style>