import React, { useState } from "react";
import { subMenu } from "./data";
import { Button } from "../../../../components";

const SubNavbar = () => {

    const [active, setActive] =useState('Главное')
    

  return (
    <section className="flex gap-x-8 my-8">
      {subMenu?.map((item) => (
        <Button
          handleClick={() => setActive(item.title)}
          key={item.id}
          text={item.title}
          icon={item.icon}
          styleBtn={`flex gap-x-3 items-center`}
        />
      ))}
    </section>
  );
};

export default SubNavbar;
