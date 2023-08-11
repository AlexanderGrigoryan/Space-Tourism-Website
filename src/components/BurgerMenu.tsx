import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import CloseImg from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";
import { linkListType } from "../types";

interface BurgerMenuProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  linkList: linkListType[];
}

function BurgerMenu(props: BurgerMenuProps) {
  const { menu, setMenu, pathname, linkList } = props;
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menu, setMenu]);

  return (
    <Container ref={menuRef}>
      <CloseButton onClick={() => setMenu(false)}>
        <CloseIcon src={CloseImg} alt="close icon" />
      </CloseButton>
      <Nav>
        {linkList.map((item, index) => {
          return (
            <List key={index}>
              <Link
                style={{
                  display: "flex",
                  columnGap: "12px",
                  textDecoration: "none",
                }}
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
  z-index: 100;
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
