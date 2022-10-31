<template>
  <q-card flat class="col-12 flex justify-between container" v-if="!editMode">
    <div class="title-part row flex flex-center">
      <div class="text-h5 q-mx-sm">
        {{ eventTitle }}
      </div>
    </div>
    <div>
      <q-icon
        clickable
        size="35px"
        class="q-mx-sm event--actions"
        name="edit_note"
        @click="_Edit"
      />
      <q-icon
        clickable
        size="30px"
        class="q-mx-sm event--actions"
        name="delete_outline"
        @click="_Remove"
      />
    </div>
  </q-card>
  <!-- edit -->
  <q-card
    flat
    class="col-12 q-my-sm q-pa-sm flex justify-between container"
    v-if="editMode"
  >
    <div class="title-part row flex flex-center">
      <div class="text-h6 q-mx-sm">
        <q-input
          clearable
          dense="dense"
          :placeholder="placeholder"
          class="text-h6"
          v-model="fixedTitle"
        />
      </div>
    </div>

    <div>
      <q-btn
        color="primary"
        class="text-white q-mx-md"
        label="Lưu"
        @click="_Save"
      />
    </div>
  </q-card>
</template>
<script>
export default {
  name: "WarningItem",
  props: {
    title: {
      type: String,
      default: "",
      require: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    edit: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
    },
  },

  data() {
    return {
      fixedTitle: this.title,
      eventTitle: this.title,
      editMode: this.edit,
    };
  },
  methods: {
    _Save() {
      this.editMode = false;
    },
    _Edit() {
      this.editMode = true;
    },
    _Remove() {},
  },
};
</script>
<style scoped>
.container {
  border: 2px solid #e9eaec;
  margin: 8px 5% 8px 57px;
  padding: 15px;
}
.event--actions:hover {
  cursor: pointer;
}
.q-icon:hover {
  color: rgb(138, 131, 123);
}
</style>
