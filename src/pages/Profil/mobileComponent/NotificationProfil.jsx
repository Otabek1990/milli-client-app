import React from "react";
import { Link } from "react-router-dom";
import { notificationPeople } from "./data";
import NotificationUi from "./NotificationUi";
import { milliyIcons } from "../../../Assets";
import { response } from "../../../components/Global/Response";
import { TopMobilMenu } from "../../../components";

const NotificationProfil = () => {
  return (
    <section className={`${response.positionAbsolute} font-raleway h-screen`}>
      <TopMobilMenu textStyle={'pl-[30%]'} path={"/profile"} textMenu={"Уведомление"} />
      <div className="mx-6 mt-8 pb-40">
        {notificationPeople.map((item) => (
          <NotificationUi key={item.id} notification={item} />
        ))}
      </div>
      <span className="bg-green-Default p-2.5 rounded-full cursor-pointer z-50 fixed bottom-20 right-6">
        {milliyIcons.foiz}
      </span>
    </section>
  );
};

export default NotificationProfil;
