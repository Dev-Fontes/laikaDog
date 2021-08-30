import React, { useState, useEffect } from "react";
import axios from "axios";
import { TableBody, TableHead, TableRow, Paper } from "@material-ui/core";
import * as S from "./styled";

export const DataTable = () => {
  const [list, setList] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setList(response.data);
      });
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setOther(res.data);
    });
  }, []);

  return (
    <div>
      <S.TableContainerCustom component={Paper}>
        <S.TableCustom aria-label="customized table">
          <TableHead>
            <TableRow>
              <S.TableCellCustom>ID</S.TableCellCustom>
              <S.TableCellCustom>Nome</S.TableCellCustom>
              <S.TableCellCustom>E-mail</S.TableCellCustom>
              <S.TableCellCustom>Comentário</S.TableCellCustom>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow key={item.id}>
                <S.TableCellCustom component="th" scope="row">
                  {item.id}
                </S.TableCellCustom>
                <S.TableCellCustom>{item.name}</S.TableCellCustom>
                <S.TableCellCustom>{item.email}</S.TableCellCustom>
                <S.TableCellCustom>{item.body}</S.TableCellCustom>
              </TableRow>
            ))}
          </TableBody>
        </S.TableCustom>
      </S.TableContainerCustom>
    </div>
  );
};
