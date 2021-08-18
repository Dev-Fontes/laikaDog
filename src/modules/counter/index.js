import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./components/styled";

export const Counter = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setDados(res.data);
    });
  }, []);

  return (
    <S.CounterCustom>
      {dados.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </S.CounterCustom>
  );
};
