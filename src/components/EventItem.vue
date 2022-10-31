<!-- eslint-disable vue/no-parsing-error -->
<template>
  <q-card
    flat
    class="container flex row items-center justify-between"
    v-show="!edit"
  >
    <div class="title flex">
      <q-avatar size="50px" class="q-mx-md">
        <q-img :src="url" alt="image" />
      </q-avatar>
      <div class="text q-mx-md">{{ title }}</div>
    </div>
    <div class="action flex">
      <q-icon
        class="action-icon"
        size="28px"
        name="edit"
        @click="edit = !edit"
      />
      <q-icon
        class="action-icon"
        size="28px"
        name="delete_outline"
        @click="deleteEvent"
      />
    </div>
  </q-card>
  <!-- ------------------------- -->
  <q-card class="container flex row justify-between" v-show="edit">
    <div class="title flex">
      <q-btn round :ripple="false" flat size="30px" class="q-mx-md">
        <q-img src="../assets/EventLogo/add.png" />
      </q-btn>
      <div class="text-h7 q-mx-md">
        Tiêu đề
        <q-input outlined class="input text-h4" v-model="fixedTitle"></q-input>
      </div>
    </div>
    <div class="q-mr-sm">
      <q-btn color="negative" label="Lưu" @click="saveChange" />
    </div>
  </q-card>
</template>
<script>
import { useEventStore } from "src/stores/event.store";
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
const store = useEventStore();
export default defineComponent({
  name: "EventItem",
  setup() {
    return {
      edit: ref(false),
    };
  },
  props: {
    title: {
      type: String,
      default: "Sinh nhật",
    },
    imageURL: {
      type: String,
      default: "../assets/EventLogo/add.png",
    },
    id: {
      type: Number,
    },
  },
  data() {
    return {
      eventTitle: this.title,
      url: "../assets/EventLogo/sinhnhat.svg",
      fixedTitle: this.title,
    };
  },
  methods: {
    saveChange() {
      const $q = useQuasar();
      if (this.fixedTitle == "") {
        this.$q.notify({
          color: "negative",
          textColor: "white",
          icon: "warning",
          message: "Không được để trống tên sự kiện",
          position: "top",
          timeout: "1000",
        });
      } else {
        const item = {
          title: this.fixedTitle,
          ImageURL: "",
          id: this.id,
        };
        store.edit(item, this.id);
      }
    },
    deleteEvent() {
      store.delete(this.id);
    },
  },
});
</script>
<style scoped>
.container {
  border: 2px solid #e9eaec;
  margin: 8px 5% 8px 57px;
  padding: 15px;
}
.action-icon {
  margin-right: 10px;
}
</style>
<style lang="scss" scoped>
.action-icon:hover {
  color: #888;
  cursor: pointer;
}
.text {
  font-size: 34px;
}
</style>
