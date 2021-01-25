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
        class="absolute px-2 rounded-lg inline-block text-center font-semibold text-white"
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
  import style from './../../mixins/style'

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
      offset: null,
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

        return {left: this.bubbleX +'px', 'margin-left': this.offset + '%'}
      },
      width () {
        return parseInt(this.$refs['range-' + this._uid].clientWidth)
      }
    },
    watch: {
      value () {
        if (!this.bubble) return

        let min = parseInt(this.min)
        let percent = (parseInt(this.value) - min)/(parseInt(this.max) - min)
        this.offset = -1

        if (percent < 0) {
          this.bubbleX = 0
        } else if (percent > 1) {
          this.bubbleX = this.width
        } else {
          this.bubbleX = this.width * percent + this.offset
          this.offset -= percent
        }
      },
    },
  }
</script>

<style scoped>
.fm-slider {
  --fm-slider-default: var(--fm-default);
  --fm-slider-default-light: var(--fm-default-light);
  --fm-slider-default-dark: var(--fm-default-dark);
  --fm-slider-default-text: var(--fm-default-text);

  input[type=range] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-style: none;
    border: none;
    cursor: pointer;
  
    /*&::-moz-range-track*/
    /*&::-ms-track*/
    &::-webkit-slider-runnable-track {
      background-color: rgba(var(--fm-slider-default), var(--alpha-50));
      height: 0.25rem;
    }

    /*&::-ms-thumb*/
    /*&::-ms-range-thumb*/
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: rgb(var(--fm-slider-default-light));
      border:2px solid rgb(var(--fm-slider-default));
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
      margin-top: -0.4rem;


      /*background-color: rgb(var(--fm-slider-default));*/

    }


    &:disabled,
    &[disabled] {
      cursor: default;

      /*&::-moz-range-track*/
      /*&::-ms-track*/
      &::-webkit-slider-runnable-track {
        background-color: rgba(var(--fm-slider-default-dark), var(--alpha-10)) !important;
      }

      /*&::-moz-range-thumb*/
      /*&::-ms-thumb*/
      &::-webkit-slider-thumb {
        background-color: rgba(var(--fm-slider-default-dark), var(--alpha-30)) !important;
        border: .6rem solid rgb(var(--fm-slider-default-light));
        height: 1.8rem;
        width: 1.8rem;
        margin-top: -0.75rem;
      }


/*      &:hover:not(.contained) {
        background-color: transparent;
      }
      &.contained {
          background-color: rgba(var(--fm-default-dark), var(--alpha-10)) !important;
      }*/
    }
  }

  /*&.hide-thumb input[type=range]::-ms-thumb*/
  /*&.hide-thumb input[type=range]::-moz-range-thumb*/
  &.hide-thumb input[type=range]::-webkit-slider-thumb {
    display: none;
  }

  /*&.contained input[type=range]::-ms-thumb*/
  /*&.contained input[type=range]::-moz-range-thumb*/
  &.contained input[type=range]::-webkit-slider-thumb {
    background-color: rgb(var(--fm-slider-default));
  }

  input:active::-webkit-slider-thumb {
    border:0.5em solid rgba(var(--fm-slider-default), var(--alpha-30));
    width: 2em;
    height: 2em;
    margin-top:-0.9em;
  }

  &.contained input:active::-webkit-slider-thumb {
    border:0.5em solid rgba(var(--fm-slider-default-light), var(--alpha-60));
  }

  /*&.raised input[type=range]::-ms-thumb*/
  /*&.raised input[type=range]::-moz-range-thumb*/
  &.raised input[type=range]::-webkit-slider-thumb {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  output {
    background-color: rgb(var(--fm-slider-default));
    color: rgb(var(--fm-slider-default-text));
    bottom: 1.5em;

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

/*    &.default {
      background-color: rgb(var(--fm-slider-default));

      &:after {
        border-color: rgb(var(--fm-slider-default));
      }
    }*/
  }
}



/*    &::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #ac51b5;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  &::-ms-fill-upper {
    background: #ac51b5;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  &::-ms-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #65001c;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #ac51b5;
  }
  &:focus::-ms-fill-upper {
    background: #ac51b5;
  }
}
*/
</style>