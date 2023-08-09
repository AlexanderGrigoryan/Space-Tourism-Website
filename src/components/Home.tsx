import styled from "styled-components";
import MobileBackground from "../assets/home/background-home-mobile.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";

interface HomeProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home(props: HomeProps) {
  const { menu, setMenu } = props;
  return (
    <Container>
      <Header menu={menu} setMenu={setMenu} />
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
`;

const Content = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 81px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  text-align: center;
`;

const Text = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
  color: #d0d6f9;
`;

const Title = styled.h1`
  font-family: "Bellefair", serif;
  font-size: 80px;
  font-weight: 400;
  line-height: 100px;
  color: white;
`;

const Subtext = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #d0d6f9;
`;

const Button = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  background: white;
  cursor: pointer;
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
`;
