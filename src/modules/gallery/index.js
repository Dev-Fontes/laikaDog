import React from "react";
import * as S from "./components/styled";
import Gallery from "react-photo-gallery";
import { Photos } from "../../assets/GalleryImages/index";

export const GalleryModule = () => {
  return (
    <>
      <S.ContainerGallery>
        <Gallery photos={Photos}></Gallery>
        <div>Teste</div>
      </S.ContainerGallery>
    </>
  );
};
