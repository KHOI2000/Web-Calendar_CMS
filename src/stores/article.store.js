import { defineStore } from "pinia";
import { fetchWrapper } from "src/helpers";

const baseUrl = `${fetchWrapper.apiUrl}/content/news/`;

export const useArticleStore = defineStore("article", {
  id: "article",
  state: () => ({
    articleList: JSON.parse(localStorage.getItem("articleList")),
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
    async getArticle() {
      console.log("code go here");
      try {
        const res = await fetchWrapper.get(`${baseUrl}`);
        this.articleList = res.data;
        localStorage.setItem("articleList", JSON.stringify(this.articleList));
      } catch (error) {
        console.log(error);
      }
    },



    async delete(index) {
      try {
        await fetchWrapper.delete(`${baseUrl}` + index);
        const List = this.articleList;
        const pos = List.indexOf(List.find((List) => List.id == index));
        this.articleList.splice(pos, 1);
        this.getArticle()
      } catch (error) {
        console.log(error)
      }
    },
    async edit(article, index) {
      console.log(index)
      try {
        await fetchWrapper.put(`${baseUrl}` + index, {
          title:article.title,
          link:article.detailUrl,
          author: article.author,
          imageURL: article.imageURL,
          category: article.category
        });
        this.articleList()

      } catch (error) {
        console.log(error);
      }
    },

    async add(item) {
      try {
        await fetchWrapper.post(`${baseUrl}`, {
          title: item.title,
          imageURL: item.imageURL,
        });
        this.getArticle();
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
      this.getArticle();
    },
  },
});
