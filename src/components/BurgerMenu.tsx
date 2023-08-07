import React from "react";
import { styled } from "styled-components";
import CloseImg from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

interface BurgerMenuProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerMenu(props: BurgerMenuProps) {
  const { setMenu } = props;
  return (
    <Container>
      <CloseButton onClick={() => setMenu(false)}>
        <CloseIcon src={CloseImg} alt="close icon" />
      </CloseButton>
      <Nav>
        <Link style={{ display: "flex", columnGap: "12px" }} to="/">
          <Number>00</Number>
          <LinkName>Home</LinkName>
        </Link>
        <Link style={{ display: "flex", columnGap: "12px" }} to="/destination">
          <Number>01</Number>
          <LinkName>Destination</LinkName>
        </Link>
        <Link style={{ display: "flex", columnGap: "12px" }} to="/crew">
          <Number>02</Number>
          <LinkName>Crew</LinkName>
        </Link>
        <Link style={{ display: "flex", columnGap: "12px" }} to="/technology">
          <Number>03</Number>
          <LinkName>Technology</LinkName>
        </Link>
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
