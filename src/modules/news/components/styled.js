import styled from "styled-components";
import BG from "../../../assets/SideBarImages/bgUm.jpg";

export const NewsCustom = styled.div`
  background-image: url(${BG});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
