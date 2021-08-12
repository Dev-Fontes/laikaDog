import React from "react";
import { Banner } from "./components/banner";
import * as S from "./components/styled";
import { Presentation } from "./components/presentation";

export const Home = () => {
  return (
    <>
      <S.HomeCustom>
        <Banner />
        <Presentation/>
      </S.HomeCustom>
    </>
  );
};
