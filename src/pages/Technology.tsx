import Header from "../components/Header";
import MobileBackground from "../assets/technology/background-technology-mobile.jpg";
import styled from "styled-components";

interface TechnologyProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Technology(props: TechnologyProps) {
  const { menu, setMenu } = props;
  return (
    <Container>
      <Header menu={menu} setMenu={setMenu} />
      <Content></Content>
    </Container>
  );
}

export default Technology;

const Container = styled.div`
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div``;
