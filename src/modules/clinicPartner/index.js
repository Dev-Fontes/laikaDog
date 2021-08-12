import React from "react";
import { ListClinicas } from "../../data/listClinicas";

export const ClinicPartners = () => {
  const lc = ListClinicas.map(clinica =>{
    return <li key={clinica.id}>
      {clinica.id} - {clinica.nome} - {clinica.especializacao} - {clinica.endereco} - {clinica.cidade}
    </li>
  });
  
  return (
    <>
      <div>
        <ul>
          {lc}
        </ul>
      </div>
    </>
  );
};
