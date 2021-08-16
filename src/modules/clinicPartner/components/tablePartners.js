import React from "react";
import { TableBody, TableHead, TableRow, Paper } from "@material-ui/core";
import { ListClinicas } from "../../../data/listClinicas";
import * as S from "./styled";

export const DataTable = () => {
  return (
    <div>
      <S.TableContainerCustom component={Paper}>
        <S.TableCustom aria-label="customized table">
          <TableHead>
            <TableRow>
              <S.TableCellCustom>ID</S.TableCellCustom>
              <S.TableCellCustom>Nome</S.TableCellCustom>
              <S.TableCellCustom>Especialização</S.TableCellCustom>
              <S.TableCellCustom>Endereço</S.TableCellCustom>
              <S.TableCellCustom>Cidade</S.TableCellCustom>
            </TableRow>
          </TableHead>
          <TableBody>
            {ListClinicas.map((clinica) => (
              <TableRow key={clinica.id}>
                <S.TableCellCustom component="th" scope="row">
                  {clinica.id}
                </S.TableCellCustom>
                <S.TableCellCustom>{clinica.nome}</S.TableCellCustom>
                <S.TableCellCustom>{clinica.especializacao}</S.TableCellCustom>
                <S.TableCellCustom>{clinica.endereco}</S.TableCellCustom>
                <S.TableCellCustom>{clinica.cidade}</S.TableCellCustom>
              </TableRow>
            ))}
          </TableBody>
        </S.TableCustom>
      </S.TableContainerCustom>
    </div>
  );
};
