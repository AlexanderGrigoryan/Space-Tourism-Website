import styled from "styled-components";
import LogoImg from "../assets/shared/logo.svg";
import BurgerImg from "../assets/shared/icon-hamburger.svg";
import { linkListType } from "../types";
import { Link } from "react-router-dom";

interface HeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  linkList: linkListType[];
  pathname: string;
}

function Header(props: HeaderProps) {
  const { menu, setMenu, linkList, pathname } = props;

  console.log(pathname);
  return (
    <Container>
      <LogoCircle>
        <Logo src={LogoImg} alt="logo" />
      </LogoCircle>
      <BurgerButton onClick={() => setMenu(!menu)}>
        <BurgerLogo src={BurgerImg} alt="burger logo" />
      </BurgerButton>
      <Nav>
        {linkList.map((item) => {
          return (
            <>
              <List>
                <ListItem>
                  <ItemNumber>{item.number}</ItemNumber>
                  <StyledLink to={item.path}>{item.name}</StyledLink>
                </ListItem>
                {pathname == item.path ? <ActiveLine></ActiveLine> : null}
              </List>
            </>
          );
        })}
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoCircle = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const Logo = styled.img``;

const BurgerButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 21px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const BurgerLogo = styled.img``;

const Nav = styled.nav`
  width: 450px;
  height: 96px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    width: 630px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 120px;
    width: 830px;
  }
`;

const List = styled.div`
  display: flex;
  position: relative;
`;

const StyledLink = styled(Link)`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }

  &:hover {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background: rgba(255, 255, 255, 0.5021);
      position: absolute;
      bottom: -35px;
      left: 0;
    }
  }
`;

const ActiveLine = styled.div`
  width: 100%;
  height: 3px;
  background: white;
  position: absolute;
  top: 52px;
`;

const ListItem = styled.div`
  display: flex;
  column-gap: 12px;
`;

const ItemNumber = styled.p`
  font-family: "Barlow Condensed";
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2.7px;
  color: #ffffff;
  display: none;

  @media screen and (min-width: 1024px) {
    display: inline-block;
  }
`;
