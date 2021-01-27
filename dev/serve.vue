<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
  data: () => ({
    checkbox: ['bar', 'foo'],
    isOpen: false,

    label: 'FatMax',
    contained: true,
    raised: false,
    rounded: false,
    disabled: false,
    active: false,
    color: '',
  }),
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    toggle () {
      this.contained = !this.contained
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
});
</script>

<template>
  <div id="app" class="flex">
    <div class="flex-1 flex-col">
      <nav
        class="flex px-6 h-16 bg-white text-gray-700 border-b border-gray-200 items-center justify-between fixed w-full z-10"
      >
        <div class="w-full flex justify-center items-center">
          <fm-button :active="contained" @click="contained = !contained">contained</fm-button>
          <fm-button :active="raised" @click="raised = !raised">raised</fm-button>
          <fm-button :active="rounded" @click="rounded = !rounded">rounded</fm-button>
          <fm-tooltip
            text="Applies to all form elements"
            position="bottom"
            :active="active"
            :contained="contained"
            :raised="raised"
            :rounded="rounded"
            :disabled="disabled"
          >
            <fm-button :active="disabled" @click="disabled = !disabled">disabled</fm-button>
          </fm-tooltip>
          <fm-button :active="active" @click="active = !active">active</fm-button>
          <select v-model="color" class="rounded">
            <option value="" selected>Select class..</option>
            <option>primary</option>
            <option>secondary</option>
            <option>tertiary</option>
          </select>
        </div>
      </nav>

      <div class="mx-auto p-4 w-auto md:w-1/2 mt-16">
        <div class="flex p-4 flex-col justify-center">
          <h1>Alert</h1>
          <div class="flex flex-col justify-around mt-2 mb-12 items-center">
            <fm-alert
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            >default</fm-alert>
            <fm-alert
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              icon="Exclamation"
            >default</fm-alert>
          </div>
          
          <h1>Button</h1>
          <div class="flex justify-around mt-2 mb-12 items-center">
            <fm-button
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            >{{ label }}</fm-button>
            <fm-button
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              icon="Database"
            >{{ label }}</fm-button>
            <fm-button
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              icon="UserAdd"
              solid
            ></fm-button>
            <fm-button
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              icon="UserAdd"
            ></fm-button>
          </div>

          <h1>Checkbox</h1>
          <div class="flex justify-around items-center mt-2 mb-12">
            <fm-checkbox
              :fm-type="color"
              :active="active"
              :label="label"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            />
            <fm-checkbox
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              indeterminate
            />
          </div>

          <!-- <h1>Notification</h1>
          <div class="flex justify-around mt-2 mb-12">
            <fm-notification
              :fm-type="color"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              position="top"
              icon="Database"
            />
          </div> -->

          <h1>Radio</h1>
          <div class="flex justify-around mt-2 mb-12">
            <fm-radio
              :fm-type="color"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              :active="active"
              :options="[{label: 'Foo', value: 1},{label: 'Bar', value: 2},{label: 'Baz', value: 3},]"
            />
          </div>

          <h1>Slider</h1>
          <div class="flex flex-col justify-around mt-2 mb-12">
            <fm-slider
              class="px-2"
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              :min="0"
              :max="10"
              :step="2"
              labelLeft="Left label"
              labelRight="Right label"
            />
            <fm-slider
              class="px-2"
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
              bubble
            />
          </div>

          <h1>Switch</h1>
          <div class="flex justify-around mt-2 mb-12">
            <fm-switch
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            />
            <fm-switch
              label="FatMax"
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            />
          </div>

          <h1>Tooltip</h1>
          <div class="flex justify-around mt-2 mb-12">
            <fm-tooltip
              text="Tooltip"
              position="left"
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            >
              <fm-button
                :fm-type="color"
                :active="active"
                :contained="contained"
                :raised="raised"
                :rounded="rounded"
                :disabled="disabled"
              >
                Left
              </fm-button>
            </fm-tooltip>
            <fm-tooltip
              text="Tooltip"
              position="bottom"
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            >
              <fm-button
                :fm-type="color"
                :active="active"
                :contained="contained"
                :raised="raised"
                :rounded="rounded"
                :disabled="disabled"
              >
                Bottom
              </fm-button>
            </fm-tooltip>
            <fm-tooltip
              text="Tooltip"
              position="top"
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            >
              <fm-button
                :fm-type="color"
                :active="active"
                :contained="contained"
                :raised="raised"
                :rounded="rounded"
                :disabled="disabled"
              >
                Top
              </fm-button>
            </fm-tooltip>
            <fm-tooltip
              text="Tooltip"
              position="right"
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
            >
              <fm-button
                :fm-type="color"
                :active="active"
                :contained="contained"
                :raised="raised"
                :rounded="rounded"
                :disabled="disabled"
              >
                Right
              </fm-button>
            </fm-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    checkbox: ['bar', 'foo'],
    isOpen: false,

    label: 'FatMax',
    contained: true,
    raised: false,
    rounded: false,
    disabled: false,
    active: false,
    color: '',
  }),
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    toggle () {
      this.contained = !this.contained
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
}
</script>

<style>
</style>

