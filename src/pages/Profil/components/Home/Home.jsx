import React, { useContext } from "react";
import { homeBoxData, miniCart } from "./data";
import MapHome from "./MapHome";
import MapCart from "./MapCart";
import { Button } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../App";
import { response } from "../../../../components/Global/Response";

const Home = () => {
  const navigate = useNavigate()

  const { setAccess, setRefresh, dispatch } = useContext(Context)
  const handleLogout = () => {
    setAccess(null)
    setRefresh(null)
    dispatch({ type: "EMPTY_CART" })
    navigate("/")

  }
  return (
    <div className={`${response.containerBoxPadding}`}>
      <div className="grid grid-cols-3 md:gap-x-[30px] gap-x-4">
        {homeBoxData?.map((item, ind) => (
          <MapHome key={ind} data={item} />
        ))}
      
      </div>
      <div className="grid grid-cols-4 md:gap-x-[50px] gap-x-5 my-8">
        {miniCart?.map((item, ind) => (
          <MapCart key={ind} data={item} />
        ))}
      </div>
      <div className="sm:flex hidden justify-between mb-8">
        <Button
        handleClick={handleLogout}
          styleBtn={`md:text-2xl sm:text-lg text-base font-semibold md:py-5 py-3 md:px-7 px-5 rounded-[10px] border border-gray-lightlyGray bg-white-whites`}
          text={"Выйти из системы"}
        />
        <Button
          styleBtn={`md:text-2xl sm:text-lg text-base font-semibold md:py-5 py-3 md:px-7 px-5 rounded-[10px] border border-gray-lightlyGray bg-green-Default text-white-whites`}
          text={"Сохранить изменение"}
        />
      </div>
    </div>
  );
};

export default Home;
