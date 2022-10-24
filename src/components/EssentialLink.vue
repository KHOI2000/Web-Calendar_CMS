<template>
  <div>
    <q-item
      clickable
      tag="a"
      :to="direct"
      class="text-white"
      active-class="bg-primary"
      :class="{ 'bg-primary': active }"
    >
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label style="font-size: 18px">{{ title }}</q-item-label>
      </q-item-section>

      <span v-if="active" class="arrow"></span>
    </q-item>
    <div v-if="active">
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
import { defineComponent, ref } from "vue";

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
