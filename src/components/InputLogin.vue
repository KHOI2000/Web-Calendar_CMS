<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <div class="input-container">
    <q-input
      v-bind:placeholder="placeholder"
      borderless
      lazy-rules
      class="input"
      v-bind:type="isPwd ? 'password' : 'text'"
      :model-value="modelValue"
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    >
      <div class="label">{{ label }}</div>
      <template v-slot:append v-if="showPassword">
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "InputLogin",
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    inputType: {
      type: String,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  // setup() {
  //   return {
  //     inputModel: ref(""),
  //   };
  // },

  data() {
    return {
      isPwd: this.showPassword,
    };
  },
});
</script>
<style scoped>
.input-container {
  height: 55px;
  border: 1px solid #a7adb2;
  border-radius: 8px;
  padding: 0 15px 0 15px;
}
.label {
  z-index: 999;
  position: absolute;
  top: -1rem;
  left: 0.8rem;
  background-color: white;
  padding-right: 8px;
  padding-left: 8px;
  color: #22313f;
  font-size: 16px;
}
.container {
  margin: 30px;
}
.input {
  font-size: 18px;
}
</style>
