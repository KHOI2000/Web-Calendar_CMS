<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton></AddButton>
      <SearchBox style="margin-right: 10%"></SearchBox>
    </q-toolbar>
  </q-header>

  <q-container>
    <q-splitter
      v-model="splitterModel"
      reverse
      unit="px"
      style="overflow-y: scroll"
    >
      <template v-slot:before>
        <q-item class="row flex items-center q-pa-md justify-between q-ml-sm">
          <q-title class="">Tất cả bài viết</q-title>
          <q-btn flat class="text-white bg-red-8" @click="_Save">Lưu</q-btn>
        </q-item>
        <q-separator inset />

        <div
          class="row flex flex-center q-ml-md q-mt-md"
          style="border: 1px solid #aaa; width: 95%; height: 400px"
        >
          <q-item-section avatar class="q-mr-md">
            <q-img
              :src="imageUrl"
              style="height: 110px; width: 180px"
              class="q-ml-lg"
            >
              <q-icon
                style="font-size: 20px"
                name="camera_enhance"
                v-on:click="handleClickInputFile"
              ></q-icon>
            </q-img>
            <q-input
              ref="fileInputAvatar"
              type="file"
              style="display: none"
            ></q-input>
          </q-item-section>

          <q-list class="col">
            <q-item class="row flex items-center q-pa-sx justify-between">
              <span>Tiêu đề:</span>
              <q-input
                style="width: 426px"
                outlined
                v-model="inputTitle"
                placeholder="Nhập tiêu đề.."
              />
            </q-item>

            <q-item class="row flex items-center q-pa-sx justify-between">
              <span>Tác giả:</span>
              <q-input
                style="width: 426px"
                outlined
                v-model="inputAuthor"
                placeholder="Tác giả.."
              />
            </q-item>

            <q-item class="row flex items-center q-pa-sx justify-between">
              <span>Link import:</span>
              <q-input
                style="width: 426px"
                outlined
                v-model="inputLink"
                placeholder="http://"
              />
            </q-item>

            <q-item class="row flex items-center q-pa-sx justify-between">
              <span>Danh mục:</span>
              <q-card
                flat
                style="border: 1px solid #aaa; height: 140px; width: 426px"
              ></q-card>
            </q-item>
          </q-list>
        </div>
      </template>

      <template v-slot:after>
        <q-item class="row flex items-center q-pa-md justify-between">
          <q-title>Danh mục bài viết</q-title>
          <div>
            <q-btn
              flat
              clikable
              class="text-white bg-blue-8"
              icon="add"
              padding="xs"
              @click="dialog = true"
            />
            <q-dialog v-model="dialog" persistent>
              <q-card class="col" style="max-width: 400px; height: 180px">
                <q-input
                  class="q-mt-sm q-mx-md"
                  clickable
                  placeholder="Thêm danh mục bài viết ..."
                  v-model="cancelEnabled"
                ></q-input>

                <q-card-actions align="right" class="q-mt-xl">
                  <q-btn
                    flat
                    label="Hủy"
                    color="primary"
                    v-close-popup="cancelEnabled"
                    :disable="!cancelEnabled"
                  />
                  <q-btn flat label="Áp dụng" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-item>
        <q-separator inset class="q-mt-xs" />
        <div v-for="article in List" :key="article">
          <qCategory class="q-ma-md" v-bind="article" />
        </div>
      </template>
    </q-splitter>
  </q-container>
</template>
<script>
import { computed, ref } from "vue";
import { defineComponent } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import qCategory from "src/components/qCategory.vue";

import { useArticleStore } from "stores/article.store";

const store = useArticleStore();
store.update();

export default defineComponent({
  name: "AddArticle",
  components: {
    AddButton,
    SearchBox,
    qCategory,
  },
  data() {
    return {
      splitterModel: ref(400),
      List: computed(() => store.articleList),
      dialog: ref(false),
      cancelEnabled: ref(""),
      inputTitle: this.title,
      inputAuthor: this.author,
      inputLink: this.Link,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    detailUrl: {
      type: String,
      default: "#",
    },
    imageUrl: {
      type: String,
      default: "https://kenh14cdn.com/2019/1/9/4-15470500556681296679573.jpg",
    },
    display: {
      type: Boolean,
      required: false,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    _Save() {},
    _Remove() {
      store.remove(this.id);
    },
  },
  handleClickInputFile(e) {
    this.$refs.fileInputAvatar.click(e);
  },
});
</script>
<style scoped></style>
