import React, { useContext } from "react";
import { response } from "../../components/Global/Response";
// import { Button } from "../../components";
import { subMenu } from "./components/SubNavbar/data";
// import Home from './components/Home/Home';
// import Choosen from './components/Choosen/Choosen';
// import ProfileUser from './components/ProfileUser/ProfileUser';
// import Purchases from './components/Purchases/Purchases';
// import Reviews from './components/Reviews/Reviews';
// import { milliyIcons } from "../../Assets";
import { Context } from "../../App";
import MobileProfile from "./MobileProfile";
import { NavLink, Outlet } from "react-router-dom";

const Profil = () => {
  const { activeWidth } = useContext(Context);

  if (activeWidth) {
    return <MobileProfile />;
  }

  return (
    <section className=''>
      <div className={`${response.containerBoxPadding} flex gap-x-8 my-8`}>
        {subMenu?.map((item, index) => (
          <NavLink
            key={index}
            className={`profile-link flex items-center gap-3 `}
            to={`/profile${item.link}`}
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </section>
  );
};

export default Profil;
