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
  Home,
} from "@material-ui/icons/";
import ImgUm from "../../assets/SideBarImages/bgUm.jpg";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [title, setTitle] = useState("laikaDog");

  function HandleCollapse() {
    setCollapse(!collapse);
    if (title === "laikaDog") {
      setTitle(<Pets fontSize="large" />);
    } else {
      setTitle("laikaDog");
    }
  }

  return (
    <>
      <S.ProSideBarCustom collapsed={collapse} image={ImgUm}>
        <S.SideBarHeaderCustom>{title}</S.SideBarHeaderCustom>
        <SidebarContent>
          <Menu iconShape="round">
            <S.MenuItemCustom icon={<Home />}>
              <Link to="/" />
              Inicio
            </S.MenuItemCustom>
            <S.SubMenuCustom icon={<MenuRounded />} title="Menu">
              <S.MenuItemCustom>
                <Link to="/partners" /> Clínicas parceiras
              </S.MenuItemCustom>
              <S.MenuItemCustom ><Link to="/counter" />Contador</S.MenuItemCustom>
            </S.SubMenuCustom>
            <S.MenuItemCustom icon={<Announcement />}>
              <Link to="/news" />
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
