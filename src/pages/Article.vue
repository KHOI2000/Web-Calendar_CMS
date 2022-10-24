/* eslint-disable */
<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton></AddButton>
      <SearchBox style="margin-right: 10%"></SearchBox>
    </q-toolbar>
  </q-header>
  <h3>This is Article Page</h3>
</template>
<script>
import { defineComponent } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";

export default defineComponent({
  name: "ArticlesPage",
  components: {
    AddButton,
    SearchBox,
  },
});
</script>
