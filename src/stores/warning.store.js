import axios from "axios";
import { defineStore } from "pinia";

export const useWarningStore = defineStore("warning", {
  state: () => ({
    warningList: null,
  }),

  getters: {
    getLength(state) {
      return state.warningList.length;
    },
    getLastObject(state) {
      return state.warningList[state.getLength - 1];
    },
  },

  actions: {
    async update(state) {
      try {
        const res = await axios.get("http://localhost:3000/warningList");
        this.warningList = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async delete(index) {
      try {
        await axios.delete("http://localhost:3000/warningList/" + index);
        const List = this.warningList;
        const pos = List.indexOf(List.find((List) => List.id == index));
        console.log(this.warningList);
        this.warningList.splice(pos, 1);
      } catch (error) {
        console.log(error);
      }
    },
    async add(item) {
      try {
        await axios.post("http://localhost:3000/warningList/", {
          title: item.title,
          url: item.url,
          type: "warning",
          allDay: item.allDay,
        });
        this.update();
      } catch (error) {
        console.log(error);
      }
    },
    async edit(item, index) {
      try {
        for (let warning of warningList) {
          if (warning.id == index) {
            await axios.put("http://localhost:3000/warningList/" + index, {
              title: item.title,
              url: item.url,
              type: "warning",
              allDay: warning.allDay,
            });
            break;
          }
        }
        this.update();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
