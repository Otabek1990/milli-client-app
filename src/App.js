import { Route, Routes } from "react-router-dom";
import {
  Login,
  Main,
  MyDetail,
  NotificationProfil,
  Profil,
  QuestionForm,
  ReviewForm,
  ProductDetail,
  CategoryDetail,
  Basket,
  Order,
  ChangeName,
} from "./pages";
import { Footer, MainNavbar, UpperNavbar } from "./components";
import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer, initialState } from "./services/basketService";
import Register from "./pages/register";
import ProtectedRoutes from "./ProtectedRoute/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import MenuBar from "./components/MenuBar/MenuBar";
import Modal from "./components/Modal/Modal";
import Aksiya from "./pages/Aksiya/Aksiya";
import Choosen from "./pages/Profil/components/Choosen/Choosen";
import Reviews from "./pages/Profil/components/Reviews/Reviews";
import Purchases from "./pages/Profil/components/Purchases/Purchases";
import Home from "./pages/Profil/components/Home/Home";
import ProfileUser from "./pages/Profil/components/ProfileUser/ProfileUser";
import Alert from "./components/Global/Alert";
import MyCard from "./pages/Profil/MyCard/MyCard";
import Checks from "./pages/Profil/Checks/Checks";
export const Context = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState(
    localStorage.getItem("productPrice") || ""
  );
  const [openAlert, setOpenAlert] = useState(false);

  const [lang, setLang] = useState(localStorage.getItem("lang") || "ln");

  const [access, setAccess] = useState(
    JSON.parse(localStorage.getItem("access-token")) || null
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  );
  const [refresh, setRefresh] = useState(
    JSON.parse(localStorage.getItem("refresh-token")) || null
  );
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("lang", lang);
  }, [state.cart, lang]);
  useEffect(() => {
    localStorage.setItem("access-token", JSON.stringify(access));
    localStorage.setItem("refresh-token", JSON.stringify(refresh));
    localStorage.setItem("userName", userName);
  }, [access, refresh,userName]);
  useEffect(() => {
    localStorage.setItem("productPrice", productPrice);
  }, [productPrice]);

  const [activeWidth, setActiveWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setActiveWidth(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Context.Provider
      value={{
        dispatch,
        access,
        state,
        setAccess,
        setRefresh,
        showModal,
        productId,
        setShowModal,
        setProductId,
        setLang,
        lang,
        productPrice,
        setProductPrice,
        activeWidth,
        openAlert,
        setOpenAlert,
        showCatalog,
        setShowCatalog,
        setUserName,
        userName
      }}
    >
      <div className=" h-screen md:h-auto overflow-y-scroll md:overflow-hidden ">
        {productId && <Modal />}
        <UpperNavbar />
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="category/:id" element={<CategoryDetail />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="basket" element={<Basket />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset_pass" element={<ResetPassword />} />
          <Route path="step_one" element={<ResetPassword />} />
          <Route path="step_two" element={<ResetPassword />} />
          <Route path="aksiya" element={<Aksiya />} />
          <Route path="chosen" element={<Aksiya />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="order" element={<Order />} />
            <Route path="mydetail" element={<MyDetail />} />
            <Route path="notification" element={<NotificationProfil />} />
            <Route path="changename" element={<ChangeName />} />
          </Route>

          <Route path="profile" element={<Profil />}>
            <Route index element={<Home />} />
            <Route path="chosenProduct" element={<Choosen />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="review" element={<Reviews />} />
            <Route path="profilePage" element={<ProfileUser />} />
          </Route>

          <Route path="checks" element={<Checks />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="myCard" element={<MyCard />} />
          <Route path="reviewform" element={<ReviewForm />} />
          <Route path="questionform" element={<QuestionForm />} />
        </Routes>
        <Footer />
        <MenuBar />
        <Alert />
      </div>
    </Context.Provider>
  );
}

export default App;
