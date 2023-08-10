import Header from "../components/Header";
import MobileBackground from "../assets/crew/background-crew-mobile.jpg";
import styled from "styled-components";
import CrewSlider from "../components/CrewSlider";
import { useState } from "react";
import data from "../data.json";

interface CrewProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Crew(props: CrewProps) {
  const { menu, setMenu } = props;

  const [teamMember, setTeamMember] = useState<string>("Douglas Hurley");

  const member = data.crew.find((element) => element.name === teamMember);

  return (
    <Container>
      <Header menu={menu} setMenu={setMenu} />
      <Content>
        <Title>
          <Number>02</Number>
          <Text>Meet your Crew</Text>
        </Title>
        <CrewSlider teamMember={teamMember} setTeamMember={setTeamMember} />
        {data.crew.map((item) =>
          member?.name === item.name ? (
            <MemberInfo key={item.name}>
              <MemberRole>{item.role}</MemberRole>
              <MemberName>{item.name}</MemberName>
              <MemberDescription>{item.bio}</MemberDescription>
            </MemberInfo>
          ) : null
        )}
      </Content>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  column-gap: 18px;
  margin-bottom: 32px;
`;

const Number = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2.7px;
  color: rgba(255, 255, 255, 0.25);
`;

const Text = styled(Number)`
  font-weight: 400;
  color: #ffffff;
  text-transform: uppercase;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberRole = styled.p`
  font-family: "Bellefair", serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4951);
`;

const MemberName = styled.p`
  font-family: "Bellefair", serif;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 8px 0 16px;
  color: #ffffff;
`;

const MemberDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  width: 327px;
  text-align: center;
  color: #d0d6f9;
`;
