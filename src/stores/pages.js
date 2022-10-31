import { defineStore } from "pinia";

export const usePagesStore = defineStore("page", {
  state: () => ({
    pagesList: [
      {
        title: "Trang chủ",
        icon: "home",
        direct: "/user/home",
        active: false,
      },
      {
        title: "Bài viết",
        icon: "article",
        direct: "/user/article",
        active: false,
      },
      {
        title: "Sự kiện",
        icon: "bookmark",
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
        icon: "calendar_today",
        direct: "/user/day_event",
        active: false,
      },
      {
        title: "Lịch tháng",
        icon: "calendar_month",
        direct: "/user/month_calendar",
        active: false,
      },
      {
        title: "Sự kiện tết",
        icon: "public",
        direct: "/user/tet_holiday_event",
        active: false,
        subList: [
          {
            name: "Xông đất",
            path: "/user/tet_holiday_event/xong-dat",
          },
          {
            name: "Hướng nhà",
            path: "/user/tet_holiday_event/huong-nha",
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
        title: "Thành viên",
        icon: "groups",
        direct: "/user/membership",
        active: false,
      },
      {
        title: "Cài đặt",
        icon: "settings",
        direct: "/user/setting",
        active: false,
      },
    ],
  }),

  getters: {},

  actions: {},
});
