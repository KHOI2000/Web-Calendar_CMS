const routes = [
  {
    path: "/user/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/IndexPage.vue") },
      { path: "article", component: () => import("pages/Article/Article.vue") },
      { path: "day_event", component: () => import("pages/DayEvent.vue") },
      {
        path: "event",
        component: () => import("pages/Event/EventCategory.vue"),
      },
      {
        path: "article/manage",
        component: () => import("src/pages/Article/ManageArticle.vue"),
      },
      {
        path: "article/AddArticle",
        component: () => import("src/pages/Article/AddArticle.vue"),
      },
      {
        path: "month_calendar",
        component: () => import("pages/MonthCalendar/MonthCalendar.vue"),
      },
      {
        path: "month_calendar/add_month_calendar",
        component: () => import("pages/MonthCalendar/MonthCalendarAdd.vue"),
      },
      { path: "setting", component: () => import("pages/Setting.vue") },
      {
        path: "tet_holiday_event",
        component: () => import("pages/TetHoliday/TetHolidayEvent.vue"),
      },
      { path: "membership", component: () => import("pages/Membership.vue") },
      {
        path: "event/event-category",
        component: () => import("pages/Event/EventCategory.vue"),
      },
      {
        path: "event/event-list",
        component: () => import("pages/Event/EventList.vue"),
      },
      {
        path: "event/event-list/add",
        component: () => import("pages/Event/EventListAdd.vue"),
      },
      {
        path: "event/warning-list",
        component: () => import("pages/Event/WarningList.vue"),
      },
      {
        path: "tet_holiday_event/huong-nha",
        component: () => import("pages/TetHoliday/HuongNha.vue"),
      },
      {
        path: "tet_holiday_event/xong-dat",
        component: () => import("pages/TetHoliday/XongDat.vue"),
      },
      {
        path: "tet_holiday_event/xuat-hanh",
        component: () => import("pages/TetHoliday/XuatHanh.vue"),
      },
      {
        path: "tet_holiday_event/tu-vi-van-han",
        component: () => import("pages/TetHoliday/TuViVanHan.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/",
    component: () => import("pages/Login.vue"),
  },
  // {
  //   path: "/article",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Article.vue") }],
  // },
  // {
  //   path: "/day_event",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/DayEvent.vue") }],
  // },
  // {
  //   path: "/event",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Event.vue") }],
  // },
  // {
  //   path: "/month_calendar",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/MonthCalendar.vue") },
  //   ],
  // },
  // {
  //   path: "/setting",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Setting.vue") }],
  // },
  // {
  //   path: "/tet_holiday_event",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/TetHolidayEvent.vue") },
  //   ],
  // },
  // {
  //   path: "/membership",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Membership.vue") }],
  // },
];

export default routes;
