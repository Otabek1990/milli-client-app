import React from "react";
import { purchaseProduct } from "./data";
import MapPurchases from "./MapPurchases";
import { useOrdersHistoryQuery } from "../../../../services/basketApi";
import { response } from "../../../../components/Global/Response";
import { TopMobilMenu } from "../../../../components";
import { milliyIcons } from "../../../../Assets";
import MapPurchaseMobile from "./MapPurchaseMobile";
import Skeleton from "./Skeleton";

const Purchases = () => {
  const { data: ordersHistory, isSuccess, isLoading } = useOrdersHistoryQuery();
  if (isLoading) {
    return <Skeleton />;
  }
  
  return (
    <>
      <div className={`${response.containerBoxPadding} w-full sm:block hidden`}>
        <table className="w-full overflow-x-scroll ">
          <thead>
            <tr>
              <th>№</th>
              <th>Rasm</th>
              <th>Nomi</th>
              <th>Narxi</th>
              <th>Soni</th>
              <th>Vaqti</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              ordersHistory?.results?.map((item, ind) => (
                <MapPurchases key={ind} index={ind} product={item} />
              ))}
          </tbody>
        </table>

        {/* {purchaseProduct?.map((item, ind) => (
                <MapPurchases key={ind} product={item} />
            ))} */}
      </div>
      <div className={`${response.positionAbsolute} h-screen sm:h-auto sm:hidden block`}>
        <div className="mb-10">
          <TopMobilMenu
            textStyle={"pl-[30%]"}
            path={"/profile"}
            textMenu={"Покупки"}
          />
        </div>
        <div className={`${response.containerBoxPadding} grid grid-cols-2 gap-4 pb-24 `}>
          {isSuccess &&
            ordersHistory?.results?.map((item, ind) => (
              <MapPurchaseMobile key={ind} index={ind} product={item} />
            ))}
        </div>
        <span className="bg-green-Default p-2.5 rounded-full cursor-pointer z-50 fixed bottom-20 right-6">
          {milliyIcons.foiz}
        </span>
      </div>
    </>
  );
};

export default Purchases;
