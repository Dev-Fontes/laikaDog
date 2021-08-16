import styled from "styled-components";
import BG from "../../../assets/SideBarImages/bgUm.jpg";
import { Table, TableCell, TableContainer } from "@material-ui/core";

export const ClinicPartnersCustom = styled.div`
  background-image: url(${BG});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const TableCellCustom = styled(TableCell)``;

export const TableCustom = styled(Table)`
  width: 100px;
  height: 100px;
`;

export const TableContainerCustom = styled(TableContainer)`
  width: 100px;
  height: 80%;
`;
