<template>
  <div>
    <q-item
      clickable
      tag="a"
      :to="subList == null ? direct : subList[0].path"
      class="text-white"
      active-class="bg-primary"
      :class="{ 'bg-primary': active }"
      @click="handle"
    >
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label style="font-size: 18px">{{ title }}</q-item-label>
      </q-item-section>

      <span v-show="active" class="arrow"></span>
    </q-item>
    <div v-show="active">
      <q-list>
        <div v-for="item in subList" :key="item.name">
          <q-item
            clickable
            class="subList flex items-center"
            active-class="subActive"
            :to="item.path"
          >
            {{ item.name }}
          </q-item>
        </div>
      </q-list>
    </div>
  </div>
</template>

<script>
import { defineComponent, handleError, ref } from "vue";
var pagePath = "/";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    direct: {
      type: String,
      default: "/",
    },

    icon: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
    subList: {
      type: Array,
      default: null,
    },
  },

  methods: {
    handle() {
      // console.log(pagePath.indexOf(this.direct));
      console.log(window.location.pathname);
      // console.log(this.direct);
    },
  },
});
</script>
<style scoped>
.arrow {
  position: absolute;
  left: 230px;
  top: 15px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid white;
}
.subList {
  color: white;
  padding-left: 74px;
  font-size: 17px;
}
.subActive {
  font-weight: 800;
}
</style>
