<template>
  <q-list
    class="row flex flex-center justify-between"
    v-if="edit"
    style="width: 95%"
  >
    <q-item tag="a" target="_blank" :href="articleLink" style="flex: 3">
      <q-item-section v-if="imageUrl" avatar>
        <q-img
          src="https://kenh14cdn.com/2019/1/9/4-15470500556681296679573.jpg"
          style="height: 110px; width: 200px; border-radius: 4px"
        />
      </q-item-section>

      <q-item-section class="col q-mb-xl">
        <div>
          <q-item-label
            class="text-h6"
            style="font-wight: 400; font-style: 'normal'; font-family: 'Roboto'"
          >
            {{ articleTitle }}
          </q-item-label>
        </div>
        <div class="row flex q-mt-md">
          <q-avatar class="q-mr-xs" size="15px">
            <img src="../assets/Vector.png" />
          </q-avatar>
          <q-item-label class=""> {{ author }} </q-item-label>
        </div>
      </q-item-section>
    </q-item>
    <q-option class="row flex q-ma-md justify-around">
      <div>
        <q-checkbox
          size="xl"
          v-model="checked"
          checked-icon="star"
          unchecked-icon="star_border"
          @click="chooseHandler()"
        />

        <q-icon
          clickable
          size="35px"
          class="q-mx-sm btn-option"
          name="edit_note"
          @click="EditArticle()"
        />

        <q-icon
          clickable
          size="35px"
          class="q-mx-sm btn-option"
          name="delete_outline"
          @click="deleteArticle()"
        />
      </div>
    </q-option>
  </q-list>
  <!-- ------------------------------------ -->
  <q-list class="row flex flex-center justify-between" v-if="!edit">
    <q-item style="flex: 3">
      <q-item-section v-if="imageUrl" avatar class="q-mr-lg">
        <q-img
          src="https://kenh14cdn.com/2019/1/9/4-15470500556681296679573.jpg"
          style="height: 110px; width: 200px; border-radius: 4px"
        />
      </q-item-section>

      <q-item-section>
        <div class="col">
          <div class="row flex items-center q-pa-sx justify-between">
            <span>Ti??u ?????:</span>
            <q-input
              dense="dense"
              v-model="fixedTitle"
              class="text-h67"
              placeholder="Nh???p ti??u ?????: ..."
            ></q-input>
          </div>

          <div class="row flex items-center q-pa-sx justify-between">
            <span>Link import:</span>
            <q-input
              dense="dense"
              v-model="fixedLink"
              class="text-h67"
              style="margin-left: 20px"
              placeholder="http:/..."
            ></q-input>
          </div>
        </div>
      </q-item-section>
    </q-item>

    <q-option class="q-ml-xl">
      <q-btn @click="_Save" color="negative"> L??u </q-btn>
    </q-option>
  </q-list>
</template>
<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { useArticleStore } from "stores/article.store";
const store = useArticleStore();
export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
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
      required: true
    },
    display: {
      type: Boolean,
      required: true,
    },
    _id: {
      type: String,
    },
  },
  data() {
    return {
      checked: ref(false),
      edit: true,
      fixedTitle: this.title,
      articleTitle: this.title,
      articleLink: this.detailUrl,
      fixedLink: this.detailUrl,
      fixedImage: this.imageUrl,
    };
  },
  methods: {
    EditArticle() {
      this.edit = false;
    },
    _Save() {
      this.edit = true;
      const newItem = {
        title: this.fixedTitle,
        detailUrl: this.fixedLink,
        display: this.display,
        author: this.author,
        category: this.category,

      };
      store.edit(newItem, this._id);
    },
    deleteArticle() {
      store.delete(this._id);
    },
    chooseHandler(index) {
      store.changeDisplay(index);
    },
  },
});
</script>
<style scoped>
.btn-option:hover {
  cursor: pointer;
  color: rgb(138, 131, 123);
}
span {
  font-weight: bold;
}

.q-input {
  width: 700px;
}
</style>
