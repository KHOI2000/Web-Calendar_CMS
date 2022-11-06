<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton></AddButton>
      <SearchBox style="margin-right: 10%"></SearchBox>
    </q-toolbar>
  </q-header>

  <q-container class="column q-ma-xs q-pa-md">
    <div class="col" style="width: 100%">
      <q-list class="row flex flex-center q-ml-xs justify-between">
        <q-item class="row flex justify-between">
          <q-item-section class="row flex items-center">
            <q-checkbox color="grey-7">
              {{ 2 + "/" + List.length }}
            </q-checkbox>
          </q-item-section>

          <q-btn class="bg-grey-3 q-ml-md q-py-xs" flat>
            <q-icon
              clickable
              size="30px"
              class="q-mx-sm btn-option"
              name="delete_outline"
              @click="_Remove()"
            />
            <p class="row q-ma-xs q-mt-sm">Xóa</p>
          </q-btn>
        </q-item>
        <div class="line"></div>

        <q-item clickable v-ripple to="/user/article">
          <q-btn class="q-mr-sm text-white bg-primary">Hủy</q-btn>
        </q-item>
      </q-list>
      <q-item
        class="q-ml-md text-red"
        style="font-style: italic; font-size: medium"
        >Bạn chỉ có thể chọn tối đa 3 bài viết</q-item
      >
    </div>

    <div class="column q-mt-sm">
      <div
        class="row flex q-ma-sm"
        style="border: 1px solid #aaa; width: auto; height: 137px"
        v-for="article in List"
        :key="article"
      >
        <q-checkbox
          v-model="article.display"
          @click="chooseHandler(article.id)"
        ></q-checkbox>

        <ArticleInfo v-bind="article" />
      </div>
    </div>
    <!-- pagination -->
  </q-container>
</template>

<script>
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import { useArticleStore } from "stores/article.store";
import ArticleInfo from "../../components/ArticleInfo.vue";
import { computed } from "vue";

const store = useArticleStore();
store.update();
export default {
  name: "ArticleListPage",
  props: {
    display: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    ArticleInfo,
    AddButton,
    SearchBox,
  },
  data() {
    return {
      List: computed(() => store.articleList),
      val: false,
    };
  },
  methods: {
    chooseHandler(index) {
      store.changeDisplay(index);
    },
    activateArticle() {
      this.isActivate = !this.isActivate;
    },
  },
};
</script>

<style scoped>
.line {
  height: 1px;
  width: 65%;
  background-color: rgb(223, 215, 215);
}
</style>
