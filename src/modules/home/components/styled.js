import styled from "styled-components";
import BG from "../../../assets/SideBarImages/bgUm.jpg";

export const HomeCustom = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${BG});
`;

export const ContainerPresentation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TitlePresentation = styled.div`
  font-size: 48px;
  margin-inline: auto;
  margin-top: 16px;
`;

export const SubtitlePresentation = styled.div`
  font-size: 32px;
  margin-inline: auto;
  margin-top: 16px;
`;

export const TextPresentation = styled.div`
  font-size: 20px;
  margin-inline: auto;
  margin-top: 16px;
  padding-inline: 16px;
  letter-spacing: 2px;
  line-height: 1.3;
`;

export const CarouselCustom = styled.div`
  display: flex;
  justify-content: center;
`;
