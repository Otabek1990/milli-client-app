import Bag from "../../Assets/Icons/bag-2.svg";
import Car from "../../Assets/Icons/car.svg";
import MoneyChange from "../../Assets/Icons/money-change.svg";
import Product1 from "../../Assets/Images/Rectangle 623 (1).png";
import Product2 from "../../Assets/Images/Rectangle 623 (2).png";
import Product3 from "../../Assets/Images/Rectangle 623 (3).png";
import Product4 from "../../Assets/Images/Rectangle 623 (4).png";
import Product5 from "../../Assets/Images/laptopProg.png";
import { LaptopD } from "../../Assets";

export const productDeteilMap = {
  productHaqida: {
    sozOn: [
      "Бренд",
      "Модель",
      "Операционной системы",
      "Цвет",
      "Диагональ",
      "Процессор",
      "Оперативная память",
      "Hard (SSD)",
    ],
    sozChap: [
      "Apple",
      "Macbook Air 13 2020",
      "Mac OS",
      "Silver",
      "13.3”",
      "M1",
      "8 GB",
      "256 GB",
    ],
  },
  usluga: {
    uslugaOn: [
      { text: "Магазин", img: Bag,data:"-"},
      { text: "Доставка", img: Car ,data:"-"},
      { text: "Способы оплаты", img: MoneyChange,data:"Payme,Click,UzCard"},
    ],
  
  },
  noutbook: [Product1, Product2, Product3, Product4, Product5],
};

export const buttonFilter = [
  // { button: "Все характеристики товара", link: 'charactic'},
  { button: "Описание", link: 'description' },
  { button: "Отзывы покупателей", link: 'review' },
  { button: "Вопросы (2)", link: 'question' },
];

export const dataProduct = [
  {
    title: "Устройство хранения данных",
    keys: "Конфигурация накопители",
    values: "SSD",
  },
  { keys: "Общий объем накопителей", values: "256 GB" },
  { keys: "Общий объем накопителей SSD", values: "256 GB" },
  { keys: "Оптический привет", values: "Нет" },
];
export const dataProtseccor = [
  { title: "Процессор", keys: "Процессор", values: "Apple M1 3200MHz" },
  { keys: "Количество ядер в процессоре", values: "8" },
  { keys: "Объем кэша", values: "L2 - 2MB; L3 - 16MB;" },
  { keys: "Чипсет", values: "Apple SoC" },
];

export const descriptionFilter = [
  {
    img: LaptopD,
    title: "Двигатель. Производитель. Нарушитель границ.",
    desc: "MacBook Pro с наддувом от M2Pro или M2 Max повышает свою мощность и эффективность еще больше, чем когда-либо. Он обеспечивает исключительную производительность независимо от того, подключен он к сети или нет, и теперь имеет еще более длительное время автономной работы. В сочетании с потрясающим дисплеем Liquid Retina XDR и всеми необходимыми портами — это профессиональный ноутбук, которому нет равных.",
  },
];
