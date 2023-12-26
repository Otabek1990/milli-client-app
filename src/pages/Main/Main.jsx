import React from "react";
import {
  TopCategories,
  Labtop,
  LabtopProgramming,
  Quality,
  NewProduct,
  Recomend,
  Supplier,
  Header,
} from "../../components";

const Main = () => {
  return (
    <main className="py-12">
      <Header />
      <TopCategories />
      <Labtop />
      <Quality />
      <NewProduct />
      <LabtopProgramming />
      <Recomend />
      <Supplier />
    </main>
  );
};

export default Main;
