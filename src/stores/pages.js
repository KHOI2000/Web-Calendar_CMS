import { defineStore } from "pinia";

export const usePagesStore = defineStore("page", {
  state: () => ({
    pagesList: [
      {
        title: "Trang chủ",
        iconClass: "fa-solid fa-house",
        direct: "/user/home",
        active: false,
      },
      {
        title: "Bài viết",
        iconClass: "fa-solid fa-newspaper",
        direct: "/user/article",
        active: false,
      },
      {
        title: "Sự kiện",
        iconClass: "fa-regular fa-bookmark",
        direct: "/user/event",
        active: false,
        subList: [
          {
            name: "Danh mục sự kiện",
            path: "/user/event/event-category",
          },
          {
            name: "Danh sách cảnh báo",
            path: "/user/event/warning-list",
          },
          {
            name: "Danh sách sự kiện",
            path: "/user/event/event-list",
          },
        ],
      },
      {
        title: "Lich ngày",
        iconClass: "fa-regular fa-calendar",
        direct: "/user/day_event",
        active: false,
      },

      {
        title: "Sự kiện tết",
        iconClass: "fa-solid fa-torii-gate",
        direct: "/user/tet_holiday_event",
        active: false,
        subList: [
          {
            name: "Xông đất",
            path: "/user/tet_holiday_event/xong-dat",
          },
          {
            name: "Phong thuỷ",
            path: "/user/tet_holiday_event/phong_thuy",
          },
          {
            name: "Xuất hành",
            path: "/user/tet_holiday_event/xuat-hanh",
          },
          {
            name: "Tử vi vận hạn",
            path: "/user/tet_holiday_event/tu-vi-van-han",
          },
        ],
      },
      {
        title: "Hướng nhà",
        iconClass: "fa-solid fa-warehouse",
        direct: "/user/house_direction",
        active: false,
      },
      {
        title: "Thành viên",
        iconClass: "fa-solid fa-user-group",
        direct: "/user/membership",
        active: false,
      },
      {
        title: "Cài đặt",
        iconClass: "fa-solid fa-gear",
        direct: "/user/setting",
        active: false,
      },
    ],
  }),

  getters: {},

  actions: {},
});
