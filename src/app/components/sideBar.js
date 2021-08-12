import { SidebarFooter, SidebarContent, Menu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import * as S from "./styled";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import {
  Pets,
  Assignment,
  PhotoLibrary,
  Storefront,
  Announcement,
  MenuRounded,
} from "@material-ui/icons/";
import ImgUm from "../../assets/SideBarImages/bgUm.jpg";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [collapse, setCollapse] = useState(false);

  function HandleCollapse() {
    setCollapse(!collapse);
  }

  return (
    <>
      <S.ProSideBarCustom collapsed={collapse} image={ImgUm}>
        <S.SideBarHeaderCustom>laikaDog</S.SideBarHeaderCustom>
        <SidebarContent>
          <Menu iconShape="circle">
            <S.MenuItemCustom icon={<Pets />}>
              <Link to="/" />
              Inicio
            </S.MenuItemCustom>
            <S.SubMenuCustom icon={<MenuRounded />} title="Menu">
              <S.MenuItemCustom>Clínicas parceiras</S.MenuItemCustom>
              <S.MenuItemCustom>Seja Premium</S.MenuItemCustom>
            </S.SubMenuCustom>
            <S.MenuItemCustom icon={<Announcement />}>
              Notícias
            </S.MenuItemCustom>
            <S.MenuItemCustom icon={<Assignment />}>Adote</S.MenuItemCustom>
            <S.MenuItemCustom icon={<PhotoLibrary />}>
              <Link to="/gallery" /> Galeria
            </S.MenuItemCustom>
            <S.MenuItemCustom icon={<Storefront />}>Loja</S.MenuItemCustom>
          </Menu>
          <Switch color="primary" onChange={() => HandleCollapse()}></Switch>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
      </S.ProSideBarCustom>
    </>
  );
};
