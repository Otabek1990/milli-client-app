import { milliyIcons } from "../../../../Assets";
import { RiHome5Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

export const subMenu = [
  { id: 1, link: "", title: "Главное", icon: <RiHome5Line /> },
  { id: 2, link: "/chosenProduct", title: "Избранное", icon: <FaRegHeart /> },
  { id: 3, link: "/purchases", title: "Покупки", icon: <SlHandbag /> },
  { id: 4, link: "/review", title: "Отзывы", icon: <SlLike /> },
  { id: 5, link: "/profilePage", title: "Профиль", icon: <CgProfile /> },
];

export const mobileMenu = [
  { id: 1, link: "/checks", title: "Чеки", icon: milliyIcons.bill },
  {
    id: 2,
    link: "",
    title: "Любимые бренды",
    icon: milliyIcons.rankingMobile,
    back: "linear-gradient(260deg, #DAE5FC 0%, #F8F3F5 43.39%, #F8BEBE 99.95%)",
  },
  { id: 3, link: "/purchases", title: "Покупки", icon: milliyIcons.bagMini },
  { id: 4, link: "", title: "Избранное", icon: milliyIcons.archiveTick },
  { id: 5, link: "/myCard", title: "Мои карты", icon: milliyIcons.creditCard },
  { id: 6, link: "/reviewForm", title: "Отзывы", icon: milliyIcons.miniLike },
];
