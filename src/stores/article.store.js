import { defineStore } from "pinia";
import { fetchWrapper } from "src/helpers";

const baseUrl = `${fetchWrapper.apiUrl}/content/news/`;

export const useArticleStore = defineStore("article", {
  state: () => ({
    articleList: [],
  }),

  getters: {
    getList() {
      return this.articleList;
    },
    getChoosenList() {
      const List = this.articleList;
      return List.filter((List) => List.display == true);
    },
  },

  actions: {
    async update() {
      console.log("code go here");
      try {
        const res = await fetchWrapper.get(`${baseUrl}`);
        console.log(res.data);
        this.articleList = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async changeDisplay(index) {
      for (let article of this.articleList) {
        if (article.id == index) {
          article.display = !article.display;
          await fetchWrapper.put(`${baseUrl}` + index, article);
        }
      }
      this.update();
    },
    async remove(index) {
      console.log(abc);
      await fetchWrapper.delete(`${baseUrl}` + index);

      this.update();
    },
    async edit(item, index) {
      await fetchWrapper.put(`${baseUrl}` + index, item);
      this.update();
    },
  },
});
