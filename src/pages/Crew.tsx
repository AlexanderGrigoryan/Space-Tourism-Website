import Header from "../components/Header";
import MobileBackground from "../assets/crew/background-crew-mobile.jpg";
import styled from "styled-components";

interface CrewProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Crew(props: CrewProps) {
  const { menu, setMenu } = props;
  return (
    <Container>
      <Header menu={menu} setMenu={setMenu} />
      <Content></Content>
    </Container>
  );
}

export default Crew;

const Container = styled.div`
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  padding: 0 24px;
`;

const Content = styled.div``;
