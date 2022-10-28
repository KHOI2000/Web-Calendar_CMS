import { defineStore } from "pinia";
import axios from "axios";

export const useEventStore = defineStore("event", {
  state: () => ({
    Event: null,
  }),

  getters: {},

  actions: {
    async update(state) {
      try {
        const res = await axios.get("http://localhost:3000/Event");
        this.Event = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async delete(index) {
      try {
        await axios.delete("http://localhost:3000/Event/" + index);
        const List = this.Event;
        const pos = List.indexOf(List.find((List) => List.id == index));
        console.log(this.Event);
        this.Event.splice(pos, 1);
      } catch (error) {
        console.log(error);
      }
    },
    async add(item) {
      try {
        await axios.post("http://localhost:3000/Event/", {
          title: item.title,
          imageURL: item.imageURL,
        });
        this.update();
      } catch (error) {
        console.log(error);
      }
    },
    async edit(item, index) {
      try {
        await axios.put("http://localhost:3000/Event/" + index, {
          title: item.title,
          imageURL: item.imageURL,
        });
        this.update();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
