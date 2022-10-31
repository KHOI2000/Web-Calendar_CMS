<template>
  <q-card flat class="container flex row justify-between">
    <div class="title flex">
      <q-img src="../assets/EventLogo/add.png" width="100px" height="100px" />

      <div class="fileInput">
        <q-file
          v-model="image"
          borderless
          rounded
          dense
          style="max-width: 300px"
          @update:model-value="handleUpload()"
        ></q-file>
      </div>
      <div class="text q-mx-md">
        Tiêu đề

        <q-input outlined class="input" v-model="title"></q-input>
      </div>
    </div>
    <div class="q-mr-sm">
      <q-btn color="negative" label="Lưu" @click="saveEvent" />
    </div>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useEventStore } from "stores/event.store";
import { useQuasar } from "quasar";

const store = useEventStore();
export default defineComponent({
  name: "EventItem_Add",

  setup() {
    const image = ref(null);
    const imageUrl = ref("");
    const handleUpload = () => {
      if (image.value) {
        imageUrl.value = URL.createObjectURL(image.value);
      }
    };
    return {
      title: ref(""),
      image,
      imageUrl,
      handleUpload,
    };
  },
  methods: {
    saveEvent() {
      const $q = useQuasar();
      if (this.title == "") {
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
          title: this.title,
          imageURL: "",
        };

        store.add(item);
        this.title = "";
      }
    },
  },
});
</script>
<style scoped>
.container {
  border: 2px solid #e9eaec;
  margin: 0 5% 0 57px;
  padding: 15px;
}
.fileInput {
  position: absolute;
  width: 40px;
  top: 80px;
  left: 80px;
}
</style>
<style lang="scss" scoped>
.text {
  font-size: 17px;
}
.input {
  font-size: 30px;
}
</style>
