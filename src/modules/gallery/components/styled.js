import styled from "styled-components";
import BG from "../../../assets/SideBarImages/bgUm.jpg";

export const GalleryCustom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${BG});
`;

export const CardGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 1000px;
  height: 50%;
  /* border: 1px solid; */
  border-radius: 20px;
  box-shadow: 20px 20px 10px black;
`;
