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
    <aside
      class="transform min-w-64 w-64 bg-red-200 fixed h-full flex flex-col z-50"
      :class="{'translate-x-0': isOpen, '-translate-x-full': !isOpen}"
    >
      <!-- :class="isOpen ? 'translate-x-0' : '-translate-x-full'" -->
      <span
        @click="isOpen = false"
        class="flex font-semibold text-2xl items-center p-4 border-b h-16"
      >
        FatMax
      </span>

      <div class="fixed bottom-0 w-full">
        asd
      </div>
    </aside>


    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <div class="flex-1 flex-col">
        <!-- class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10" -->
      <nav
        class="flex px-6 h-16 bg-white text-gray-700 border-b border-gray-200 items-center justify-between fixed w-full z-10"
      >
        <button class="mr-2 focus:outline-none" aria-label="Open Menu" @click="drawer">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div class="w-full flex justify-center items-center">
          <fm-button :active="contained" @click="contained = !contained">contained</fm-button>
          <fm-button :active="raised" @click="raised = !raised">raised</fm-button>
          <fm-button :active="rounded" @click="rounded = !rounded">rounded</fm-button>
          <fm-button :active="disabled" @click="disabled = !disabled">disabled</fm-button>
          <fm-button :active="active" @click="active = !active">active</fm-button>
          <select v-model="color" class="rounded">
            <option>-</option>
            <option>primary</option>
            <option>secondary</option>
            <option>tertiary</option>
          </select>
        </div>
      </nav>

      <div class="mx-auto p-4 w-auto md:w-1/2">


<!--         {{ contained }}
        {{ raised }}
        {{ rounded }}
 -->

        <div class="flex p-4 flex-col justify-center">
          <h1>Alert</h1>
          <div class="flex justify-around mt-2 mb-12 items-center">
            <fm-alert
              :fm-type="color"
              :active="active"
              :contained="contained"
              :raised="raised"
              :rounded="rounded"
              :disabled="disabled"
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
          <div class="flex justify-around mt-2 mb-12">
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
              :min="0"
              :max="10"
              :step="2"
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
                Top
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

