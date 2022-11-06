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
          style="height: 110px; width: 200px"
        />
      </q-item-section>

      <q-item-section class="col">
        <div>
          <q-item-label class="text-h6">{{ articleTitle }}</q-item-label>
        </div>
        <div class="row flex q-mt-md">
          <q-avatar class="q-mr-xs" size="15px">
            <img src="../assets/Vector.png" />
          </q-avatar>
          <q-item-label class=""> {{ category }} </q-item-label>
        </div>
        <div class="row flex items-center q-mt-md">
          <q-item-label class="row flex q-mb-md">
            <q-avatar class="q-mr-xs" style="height: 18px; width: 16px">
              <img src="../assets/Calendar.png" alt="" />
            </q-avatar>
            <p>{{ date }}</p>
          </q-item-label>

          <q-item-label class="row flex q-ml-xl">
            <q-avatar class="q-mr-xs" style="height: 18px; width: 16px">
              <img src="../assets/user.png" />
            </q-avatar>
            <p>{{ articleAuthor }}</p>
          </q-item-label>
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
          @click="_chooseHandler()"
        />

        <q-icon
          clickable
          size="35px"
          class="q-mx-sm btn-option"
          name="edit_note"
          @click="_EditArticle()"
        />

        <q-icon
          clickable
          size="35px"
          class="q-mx-sm btn-option"
          name="delete_outline"
          @click="_Remove()"
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
          style="height: 110px; width: 200px"
        />
      </q-item-section>

      <q-item-section>
        <div class="col">
          <div class="row flex items-center q-pa-sx justify-between">
            <span>Tiêu đề:</span>
            <q-input
              dense="dense"
              v-model="fixedTitle"
              class="text-h67"
              placeholder="Nhập tiêu đề: ..."
            ></q-input>
          </div>

          <div class="row flex items-center q-pa-sx justify-between">
            <span>Tác giả:</span>
            <q-input
              dense="dense"
              v-model="fixedAuthor"
              class="text-h67"
              placeholder="Tác giả:..."
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
      <q-btn @click="_Save" color="negative"> Lưu </q-btn>
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
      checked: ref(false),
      edit: true,
      fixedTitle: this.title,
      articleTitle: this.title,
      articleAuthor: this.author,
      fixedAuthor: this.author,
      articleLink: this.detailUrl,
      fixedLink: this.detailUrl,
    };
  },
  methods: {
    _EditArticle() {
      this.edit = false;
    },
    _Save() {
      this.edit = true;
      const newItem = {
        date,
        category,
        title: this.fixedTitle,
        author: this.fixedAuthor,
        detailUrl: this.fixedLink,
        display: this.display,
      };
      store.edit(newItem, this.id);
    },
    _Remove() {
      console.log(this.id);
      store.remove(this.id);
    },
    _chooseHandler(index) {
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
