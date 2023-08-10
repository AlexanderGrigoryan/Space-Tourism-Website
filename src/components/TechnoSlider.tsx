import React, { useState } from "react";
import data from "../data.json";
import styled, { css } from "styled-components";

interface TechnoSliderProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

function TechnoSlider(props: TechnoSliderProps) {
  const { category, setCategory } = props;
  const [activeButton, setActiveButton] = useState<boolean>(true);

  return (
    <>
      {data.technology.map((item) =>
        category === item.name ? (
          <CategoryImage key={item.name} src={item.images.landscape} />
        ) : null
      )}
      <Pagination>
        <PaginationButton
          activeButton={category === "Launch vehicle" && activeButton}
          onClick={() => {
            setCategory("Launch vehicle");
            setActiveButton(true);
          }}
        >
          1
        </PaginationButton>
        <PaginationButton
          activeButton={category === "Spaceport" && activeButton}
          onClick={() => {
            setCategory("Spaceport");
            setActiveButton(true);
          }}
        >
          2
        </PaginationButton>
        <PaginationButton
          activeButton={category === "Space capsule" && activeButton}
          onClick={() => {
            setCategory("Space capsule");
            setActiveButton(true);
          }}
        >
          3
        </PaginationButton>
      </Pagination>
    </>
  );
}

export default TechnoSlider;

const CategoryImage = styled.img`
  width: 375px;
  height: 170px;
`;
const Pagination = styled.div`
  width: 152px;
  height: 40px;
  display: flex;
  column-gap: 16px;
  margin: 26px 0;
`;

interface PaginationButtonProps {
  activeButton: boolean;
}

const PaginationButton = styled.button(
  (props: PaginationButtonProps) => css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
    font-family: "Bellefair", serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    color: ${props.activeButton ? "#0B0D17" : "#FFFFFF"};
    background: ${props.activeButton ? "#FFFFFF" : "inherit"};
  `
);
