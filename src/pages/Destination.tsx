import Header from "../components/Header";
import MobileBackground from "../assets/destination/background-destination-mobile.jpg";
import styled from "styled-components";
import data from "../data.json";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { linkListType } from "../types";

interface DestinationProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  linkList: linkListType[];
  pathname: string;
}

function Destination(props: DestinationProps) {
  const { menu, setMenu, linkList, pathname } = props;
  const [activePlanet, setActivePlanet] = useState<string>("moon");

  const params = useParams();
  const planet = data.destinations.find(
    (element) => element.name.toLocaleLowerCase() === params.name
  );

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
          <Number>01</Number>
          <Text>Pick Your Destination</Text>
        </Title>
        <>
          <PlanetImage src={planet?.images.png} alt="planet image" />
          <PlanetNav>
            {data.destinations.map((item, index) => {
              return (
                <List key={index}>
                  <StyledLink
                    to={`/destination/${item.name.toLowerCase()}`}
                    onClick={() =>
                      setActivePlanet(`${item.name.toLowerCase()}`)
                    }
                  >
                    {item.name}
                  </StyledLink>
                  {activePlanet === item.name?.toLowerCase() ? (
                    <ActiveLine></ActiveLine>
                  ) : null}
                </List>
              );
            })}
          </PlanetNav>
          <PlanetContainer>
            <PlanetInfo>
              <PlanetName>{planet?.name}</PlanetName>
              <PlanetDescription>{planet?.description}</PlanetDescription>
            </PlanetInfo>
            <PlanetLine></PlanetLine>
            <PlanetStatistics>
              <Statistics>
                <StatisticsTitle>AVG. DISTANCE</StatisticsTitle>
                <StatisticsInfo>{planet?.distance}</StatisticsInfo>
              </Statistics>
              <Statistics>
                <StatisticsTitle>Est. travel time</StatisticsTitle>
                <StatisticsInfo>{planet?.travel}</StatisticsInfo>
              </Statistics>
            </PlanetStatistics>
          </PlanetContainer>
        </>
      </Content>
    </Container>
  );
}

export default Destination;

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

const PlanetImage = styled.img`
  width: 170px;
  height: 170px;
  margin: 32px 0 26px;
`;

const PlanetNav = styled.nav`
  display: flex;
  column-gap: 27px;
  margin-bottom: 20px;
`;

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  margin-bottom: 52px;
`;

const PlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const StyledLink = styled(Link)`
  border: none;
  background: inherit;
  cursor: pointer;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.362px;
  text-transform: uppercase;
  text-decoration: none;
  color: #d0d6f9;
`;

const ActiveLine = styled.div`
  width: 100%;
  height: 3px;
  background: #fff;
`;

const PlanetName = styled.h2`
  font-family: "Bellefair", serif;
  font-size: 56px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: #ffffff;
`;

const PlanetDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: #d0d6f9;
`;

const PlanetLine = styled.div`
  width: 327px;
  height: 1px;
  background: #383b4b;
`;

const PlanetStatistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 12px;
`;

const StatisticsTitle = styled.h3`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.362px;
  text-transform: uppercase;
  color: #d0d6f9;
`;

const StatisticsInfo = styled.p`
  font-family: "Bellefair", serif;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  color: #ffffff;
`;
