import React from "react";
import { styled } from "styled-components";
import CloseImg from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

interface BurgerMenuProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

function BurgerMenu(props: BurgerMenuProps) {
  const { setMenu, pathname } = props;

  const linkList = [
    {
      number: "00",
      name: "home",
      path: "/",
    },
    {
      number: "01",
      name: "destination",
      path: "/destination",
    },
    {
      number: "02",
      name: "crew",
      path: "/crew",
    },
    {
      number: "03",
      name: "technology",
      path: "/technology",
    },
  ];
  return (
    <Container>
      <CloseButton onClick={() => setMenu(false)}>
        <CloseIcon src={CloseImg} alt="close icon" />
      </CloseButton>
      <Nav>
        {linkList.map((item, index) => {
          return (
            <List>
              <Link
                key={index}
                style={{ display: "flex", columnGap: "12px" }}
                to={item.path}
              >
                <Number>{item.number}</Number>
                <LinkName>{item.name}</LinkName>
              </Link>
              {pathname == item.path ? <ActiveLine></ActiveLine> : null}
            </List>
          );
        })}
      </Nav>
    </Container>
  );
}

export default BurgerMenu;

const Container = styled.div`
  width: 254px;
  min-height: 100vh;
  height: 667px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  position: absolute;
  top: 0;
  right: 0;
  padding: 34px 27px 0 32px;
  display: flex;
  flex-direction: column;
  row-gap: 65px;
`;

const CloseButton = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
  align-self: end;
`;

const CloseIcon = styled.img``;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Number = styled.span`
  color: #fff;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.7px;
  text-transform: uppercase;
`;

const LinkName = styled(Number)`
  font-weight: 400;
`;

const ActiveLine = styled.div`
  width: 4px;
  height: 31px;
  background: white;
  position: absolute;
  right: 0;
`;
