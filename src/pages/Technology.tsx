import Header from "../components/Header";
import MobileBackground from "../assets/technology/background-technology-mobile.jpg";
import styled from "styled-components";
import TechnoSlider from "../components/TechnoSlider";
import { useState } from "react";
import data from "../data.json";
import { linkListType } from "../types";

interface TechnologyProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  linkList: linkListType[];
  pathname: string;
}

function Technology(props: TechnologyProps) {
  const { menu, setMenu, linkList, pathname } = props;
  const [category, setCategory] = useState<string>("Launch vehicle");

  const categories = data.technology.find(
    (element) => element.name === category
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
          <Number>03</Number>
          <Text>Space Launch 101</Text>
        </Title>
        <TechnoSlider category={category} setCategory={setCategory} />
        {data.technology.map((item) =>
          categories?.name === item.name ? (
            <Info key={item.name}>
              <Role>THE TERMINOLOGY…</Role>
              <Name>{item.name}</Name>
              <Description>{item.description}</Description>
            </Info>
          ) : null
        )}
      </Content>
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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Role = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.362px;
  color: #d0d6f9;
`;

const Name = styled.p`
  font-family: "Bellefair", serif;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 9px 0 16px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #d0d6f9;
  text-align: center;
`;
