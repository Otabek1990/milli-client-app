import { milliyIcons } from "../../Assets";

export const footerData = [
  {
    title_ru: "Покупателям",
    title_ln: "Xaridorlar uchun",
    menu: [
      {
        id: 1,
        title_ru: "Как сделать заказ",
        title_ln: "Buyurtmani qanday qilish kerak",
        path: "/order",
      },
      {
        id: 2,
        title_ru: "Способы оплаты",
        title_ln: "To'lov usullari",
        path: "/pay",
      },
      {
        id: 3,
        title_ru: "Доставка",
        title_ln: "Yetkazib berish",
        path: "/delivery",
      },
      {
        id: 4,
        title_ru: "Возврат товара",
        title_ln: "Tovarni qaytarish",
        path: "/returnspurchs",
      },
      {
        id: 5,
        title_ru: "Возврат денежных средств",
        title_ln: "To'lovni qaytarish",
        path: "/returnsmoney",
      },
    ],
  },
  {
    title_ru: "Партнёрам",
    title_ln: "Hamkorlar uchun",
    menu: [
      {
        id: 1,
        title_ru: "Продать на маркетплейсе",
        title_ln: "Marketda soting",
        path: "/sellmarketplace",
      },
      {
        id: 2,
        title_ru: "Наши магазины",
        title_ln: "Bizning do'konlar",
        path: "/ourstories",
      },
      {
        id: 3,
        title_ru: "Перевозчикам",
        title_ln: "Tashuvchilar uchun",
        path: "/carrier",
      },
      {
        id: 4,
        title_ru: "Партнерский пункт выдачи",
        title_ln: "Hamkorni qabul qilish punkti",
        path: "/pickuppoint",
      },
    ],
  },
  {
    title_ru: "Компания",
    title_ln: "Kompaniya",
    menu: [
      { id: 1, title_ru: "О нас", title_ln: "Biz haqimizda", path: "/aboutus" },
      {
        id: 2,
        title_ru: "Реквизиты",
        title_ln: "Rekvizitlar",
        path: "/requisites",
      },
      {
        id: 3,
        title_ru: "Пресс-центр",
        title_ln: "Matbuot markazi",
        path: "/presscenter",
      },
    ],
  },
  {
    title_ru: "Контакты",
    title_ln: "Kontaktlar",
    menu: [
      {
        id: 1,
        title_ru: "Г. Ташкент, Юнусабадский р. ул.Юнус Раджаби дом а16",
        title_ln:
          "Toshkent shahri, Yunusobod tumani Yunus Rajabiy ko‘chasi a16-bino",
        path: "/address",
      },
      {
        id: 2,
        title_ru: "+998 99 123 45 67",
        title_ln: "+998 99 123 45 67",
        path: "/number",
      },
      {
        id: 3,
        title_ru: "help@mail.uz",
        title_ln: "help@mail.uz",
        path: "/email",
      },
    ],
  },
  {
    title_ru: "Социальные сети",
    title_ln: "Ijtimoiy tarmoqlar",
    // menu: [milliyIcons.telegram, milliyIcons.instagram, milliyIcons.facebook],
    menu: [
      { icons: milliyIcons.telegram },
      { icons: milliyIcons.instagram },
      { icons: milliyIcons.facebook },
    ],
  },
];
