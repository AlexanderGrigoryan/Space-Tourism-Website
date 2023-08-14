import Header from "../components/Header";
import Pagination from "../components/Pagination";
import MobileBackground from "../assets/crew/background-crew-mobile.jpg";
import data from "../data.json";
import styled, { css } from "styled-components";
import { useState } from "react";
import { linkListType } from "../types";

interface CrewProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  linkList: linkListType[];
  pathname: string;
}

function Crew(props: CrewProps) {
  const { menu, setMenu, linkList, pathname } = props;
  const [teamMember, setTeamMember] = useState<string>("Douglas Hurley");
  const [activeButton, setActiveButton] = useState<boolean>(true);

  const member = data.crew.find((element) => element.name === teamMember);

  return (
    <Container>
      <Header
        menu={menu}
        setMenu={setMenu}
        linkList={linkList}
        pathname={pathname}
      />
      <Content>
        <Title>
          <Number>02</Number>
          <Text>Meet your Crew</Text>
        </Title>
        <TabletFlex>
          {data.crew.map((item) =>
            teamMember === item.name ? (
              <MemberImage
                key={item.name}
                teamMember={teamMember}
                src={item.images.png}
              />
            ) : null
          )}
          <MobilePagination>
            <Pagination
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              teamMember={teamMember}
              setTeamMember={setTeamMember}
            />
          </MobilePagination>
          <TabletInfo>
            {data.crew.map((item) =>
              member?.name === item.name ? (
                <MemberInfo key={item.name}>
                  <MemberRole>{item.role}</MemberRole>
                  <MemberName>{item.name}</MemberName>
                  <MemberDescription>{item.bio}</MemberDescription>
                </MemberInfo>
              ) : null
            )}
            <TabletPagination>
              <Pagination
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                teamMember={teamMember}
                setTeamMember={setTeamMember}
              />
            </TabletPagination>
          </TabletInfo>
        </TabletFlex>
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

  @media screen and (min-width: 768px) {
    align-self: flex-start;
    margin: 16px 0 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 165px;
  }
`;

const Number = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2.7px;
  color: rgba(255, 255, 255, 0.25);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.375px;
  }
`;

const Text = styled(Number)`
  font-weight: 400;
  color: #ffffff;
  text-transform: uppercase;
`;

const TabletFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;

interface MemberImageProps {
  teamMember: string;
}

const MemberImage = styled.img(
  (props: MemberImageProps) => css`
    width: ${props.teamMember === "Douglas Hurley"
      ? "177.123px"
      : props.teamMember === "Mark Shuttleworth"
      ? "153.92px"
      : props.teamMember === "Victor Glover"
      ? "180.726px"
      : "226.147px"};
    height: 222px;

    @media screen and (min-width: 768px) {
      order: 2;
      width: ${props.teamMember === "Douglas Hurley"
        ? "456.372px"
        : props.teamMember === "Mark Shuttleworth"
        ? "416px"
        : props.teamMember === "Victor Glover"
        ? "433.09px"
        : "539.508px"};

      height: ${props.teamMember === "Douglas Hurley"
        ? "572px"
        : props.teamMember === "Mark Shuttleworth"
        ? "532px"
        : props.teamMember === "Victor Glover"
        ? "532px"
        : "532px"};
    }

    @media screen and (min-width: 1440px) {
      width: ${props.teamMember === "Douglas Hurley"
        ? "568.072px"
        : props.teamMember === "Mark Shuttleworth"
        ? "453.44px"
        : props.teamMember === "Victor Glover"
        ? "554.388px"
        : "615.567px"};

      height: ${props.teamMember === "Douglas Hurley"
        ? "712px"
        : props.teamMember === "Mark Shuttleworth"
        ? "654px"
        : props.teamMember === "Victor Glover"
        ? "681px"
        : "607px"};
    }
  `
);

const MobilePagination = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TabletInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    order: 1;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

const MemberRole = styled.p`
  font-family: "Bellefair", serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4951);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.4994);
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    color: rgba(255, 255, 255, 0.5042);
  }
`;

const MemberName = styled.p`
  font-family: "Bellefair", serif;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 8px 0 16px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 56px;
    margin: 15px 0 27px;
  }
`;

const MemberDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  width: 327px;
  text-align: center;
  color: #d0d6f9;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    width: 520px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 32px;
    width: 444px;
    text-align: left;
  }
`;

const TabletPagination = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
