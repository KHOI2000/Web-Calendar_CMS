<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton label="Thêm bài viết" to="article/AddArticle"></AddButton>
      <SearchBox style="margin-right: 10%"></SearchBox>
    </q-toolbar>
  </q-header>
  <q-container class="column q-ma-xs q-pa-md">
    <div style="width: 100%">
      <q-list class="row flex flex-center q-ml-xs justify-between">
        <q-item class="q-pa-md">
          <q-btn-dropdown
            flat
            color="grey-8"
            no-caps
            @click="this.isActivate = !this.isActivate"
          >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <div class="text-center">
                  Tất cả bài viết ({{ List.length }})
                </div>
              </div>
            </template></q-btn-dropdown
          >
        </q-item>

        <div class="line"></div>

        <q-item clickable v-ripple to="article/manage">
          <q-btn class="q-mr-sm text-white bg-primary">Quản lý</q-btn>
        </q-item>
      </q-list>
    </div>

    <div class="column q-mt-sm" v-if="isActivate">
      <div
        class="row flex q-ma-sm"
        style="border: 1px solid #aaa; width: auto; height: 137px"
        v-for="article in List"
        :key="article"
      >
        <ArticleInfo v-bind="article" />
      </div>
    </div>
    <!-- pagination -->
    <div class="q-mt-md flex flex-center">
      <q-pagination v-model="pagination" :max="5" direction-links />
    </div>
  </q-container>
</template>
<script>
import { computed, ref } from "vue";
import { defineComponent } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import { useArticleStore } from "stores/article.store";
import ArticleInfo from "components/ArticleInfo.vue";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();

const store = useArticleStore();
store.update();

export default defineComponent({
  name: "ArticleListPage",

  components: {
    AddButton,
    SearchBox,
    ArticleInfo,
  },

  setup() {
    const List = computed(() => store.articleList);
    console.log(List);
    return {
      List,
      val: ref(false),
      isActivate: ref(true),
    };
  },
  created() {
    const Path = window.location.hash;
    for (var i of PageStore.pagesList) {
      if (Path.indexOf(i.direct) != -1) {
        i.active = true;
      } else i.active = false;
    }
  },

  methods: {
    onPageClick(event) {
      this.currentPage = event;
    },
  },
});
</script>

<style>
.line {
  height: 1px;
  width: 70%;
  background-color: rgb(223, 215, 215);
}
</style>
