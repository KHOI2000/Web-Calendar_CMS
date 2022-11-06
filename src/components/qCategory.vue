<template>
  <q-list class="col q-gutter-sm">
    <q-item
      outlined
      class="row items-center bg-grey-4"
      style="border: 1px solid #aaa; height: 40px; width: auto"
    >
      <q-btn flat>
        {{ author }}
      </q-btn>
      <q-icon
        class="q-ml-xs"
        style="font-size: 20px"
        name="close"
        @click="_Remove()"
      />
    </q-item>
  </q-list>
</template>
<script>
import { useArticleStore } from "src/stores/article.store";
import { computed } from "vue";

const store = useArticleStore();
export default {
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
      default: "Anonynmous",
    },
    detailUrl: {
      type: String,
      default: "#",
    },
    imageUrl: {
      type: String,
    },
    display: {
      type: Boolean,
      required: false,
    },
    id: {
      type: Number,
    },
  },
  data() {
    return {
      List: computed(() => store.articleList),
    };
  },
  methods: {
    _Remove() {
      store.remove(this.id);
    },
  },

  mounted() {
    store.update();
  },
};
</script>
<style scoped>
.q-icon:hover {
  cursor: pointer;
  color: rgb(144, 52, 70);
}
</style>
