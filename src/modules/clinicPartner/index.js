import React from "react";
import { DataTable } from "./components/tablePartners";
import * as S from "./components/styled";

export const ClinicPartners = () => {
  return (
    <>
      <S.ClinicPartnersCustom>
        <DataTable />
      </S.ClinicPartnersCustom>
    </>
  );
};
