import React, { memo } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");

  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={115} width={160} alt={name} src={image}></SImg>
      <SName>{name}</SName>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: gray;
`;

const SEdit = styled.span`
  text-decoration: under-line;
  color: #aaa;
  cursor: pointer;
`;
