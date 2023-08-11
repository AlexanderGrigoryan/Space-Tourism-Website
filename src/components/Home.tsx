import styled from "styled-components";
import MobileBackground from "../assets/home/background-home-mobile.jpg";
import TabletBackground from "../assets/home/background-home-tablet.jpg";
import DesktopBackground from "../assets/home/background-home-desktop.jpg";

import Header from "./Header";
import { Link } from "react-router-dom";
import { linkListType } from "../types";

interface HomeProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  linkList: linkListType[];
  pathname: string;
}

function Home(props: HomeProps) {
  const { menu, setMenu, linkList, pathname } = props;
  return (
    <Container>
      <Header
        menu={menu}
        setMenu={setMenu}
        linkList={linkList}
        pathname={pathname}
      />
      <Content>
        <Info>
          <Text>SO, YOU WANT TO TRAVEL TO</Text>
          <Title>SPACE</Title>
          <Subtext>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Subtext>
        </Info>
        <Button>
          <StyledLink to="/destination">Explore</StyledLink>
        </Button>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    background-image: url(${TabletBackground});
    padding: 0 24px 0 40px;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${DesktopBackground});
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 81px;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 84px;
    row-gap: 156px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 75px;
    margin-top: 251px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 140px;
    margin-top: 251px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    row-gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const Text = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
  color: #d0d6f9;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.375px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 28px;
    letter-spacing: 4.725px;
  }
`;

const Title = styled.h1`
  font-family: "Bellefair", serif;
  font-size: 80px;
  font-weight: 400;
  line-height: 100px;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 150px;
    line-height: 150px;
  }
`;

const Subtext = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  width: 327px;
  color: #d0d6f9;

  @media screen and (min-width: 768px) {
    width: 444px;
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  background: white;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 242px;
    height: 242px;
  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 274px;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Bellefair", serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #0b0d17;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 2px;
  }
`;
