import Header from "../components/Header";
import MobileBackground from "../assets/technology/background-technology-mobile.jpg";
import TechnoPagination from "../components/TechnoPagination";
import styled from "styled-components";
import data from "../data.json";
import { useState } from "react";
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
  const [activeButton, setActiveButton] = useState<boolean>(true);

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
        <DeskResp>
          {data.technology.map((item) =>
            category === item.name ? (
              <CategoryImage key={item.name} src={item.images.landscape} />
            ) : null
          )}
          {data.technology.map((item) =>
            category === item.name ? (
              <CategoryImageDesk key={item.name} src={item.images.portrait} />
            ) : null
          )}
          <Resp>
            <TechnoPagination
              category={category}
              setCategory={setCategory}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
            {data.technology.map((item) =>
              categories?.name === item.name ? (
                <Info key={item.name}>
                  <Role>THE TERMINOLOGY…</Role>
                  <Name>{item.name}</Name>
                  <Description>{item.description}</Description>
                </Info>
              ) : null
            )}
          </Resp>
        </DeskResp>
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
  padding-bottom: 50px;
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

const DeskResp = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

const CategoryImage = styled.img`
  width: 375px;
  height: 170px;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 310px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const CategoryImageDesk = styled.img`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    width: 515px;
    height: 527px;
    order: 2;
  }
`;

const Resp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 1;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

const Role = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.362px;
  color: #d0d6f9;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`;

const Name = styled.p`
  font-family: "Bellefair", serif;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 9px 0 16px;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin: 16px 0 16px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  width: 327px;
  color: #d0d6f9;

  @media screen and (min-width: 768px) {
    width: 458px;
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
    width: 444px;
  }
`;
