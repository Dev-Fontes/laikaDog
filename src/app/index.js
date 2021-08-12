import React from "react";
import { SideBar } from "./components/sideBar";
import * as S from "./components/styled";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <S.AppCustom>
          <SideBar />
          <Routes />
        </S.AppCustom>
      </BrowserRouter>
    </>
  );
}

export default App;
