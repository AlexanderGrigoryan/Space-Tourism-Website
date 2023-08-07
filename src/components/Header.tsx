import { styled } from "styled-components";
import LogoImg from "../assets/shared/logo.svg";
import BurgerImg from "../assets/shared/icon-hamburger.svg";

interface HeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header(props: HeaderProps) {
  const { menu, setMenu } = props;
  return (
    <Container>
      <LogoCircle>
        <Logo src={LogoImg} alt="logo" />
      </LogoCircle>
      <BurgerButton onClick={() => setMenu(!menu)}>
        <BurgerLogo src={BurgerImg} alt="burger logo" />
      </BurgerButton>
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
`;

const Logo = styled.img``;

const BurgerButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 21px;
`;

const BurgerLogo = styled.img``;
