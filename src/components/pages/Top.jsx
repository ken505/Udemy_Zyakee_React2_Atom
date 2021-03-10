import React from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const onClickAdmin = () => alert("root");
  const onClickGeneral = () => alert("general");
  return (
    <SContainer>
      <h2>Top page</h2>
      <SecondaryButton onClick={onClickAdmin}>Root user</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>General user</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
