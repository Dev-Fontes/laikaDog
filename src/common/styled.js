import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core/";

export const CardCustom = styled(Card)`
  max-width: 500px;
  min-width: 500px;
  margin:16px;
  
`;

export const CardContentCustom = styled(CardContent)`
  background-color: #adadad;
`;

export const TitleCustom = styled.div`
  font-family: Roboto;
  display: flex;
  justify-content: center;
  font-size: 48px;
`;

export const SubtitleCustom = styled.div`
  font-family: Roboto;
  display: flex;
  justify-content: center;
  font-size: 24px;
`;
