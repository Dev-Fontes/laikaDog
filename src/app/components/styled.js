import styled from "styled-components";
import {
  ProSidebar,
  SidebarHeader,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

export const AppCustom = styled.div`
  display: flex;
  overflow: hidden;
`;

export const ProSideBarCustom = styled(ProSidebar)`
  height: 100vh;
`;

export const SideBarHeaderCustom = styled(SidebarHeader)`
  padding: 16px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const MenuItemCustom = styled(MenuItem)`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const SubMenuCustom = styled(SubMenu)`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
