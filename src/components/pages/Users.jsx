import React from "react";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useRecoilState, useSetRecoilState } from "recoil";

import { SerchInput } from "../molecules/SerchInput";
import { UserCard } from "../organisms/user/UserCard";
import { userState } from "../../store/UserState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Ken${val}`,
    image: "https://source.unsplash.com/3uWMsK7EN08",
    email: "3456@abc.com",
    phone: "345-6789-1234",
    company: {
      name: "DEF"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>Users</h2>
      <SerchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Change</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
