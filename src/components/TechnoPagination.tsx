import React from "react";
import styled, { css } from "styled-components";

interface TechnoPaginationProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  activeButton: boolean;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
}

function TechnoPagination(props: TechnoPaginationProps) {
  const { category, setCategory, activeButton, setActiveButton } = props;
  return (
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
  );
}

export default TechnoPagination;

const Pagination = styled.div`
  width: 152px;
  height: 40px;
  display: flex;
  column-gap: 16px;
  margin: 26px 0;

  @media screen and (min-width: 768px) {
    width: 210px;
    height: 60px;
    margin: 44px 0;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    width: 80px;
    height: 304px;
    row-gap: 32px;
    margin: 0;
  }
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

    @media screen and (min-width: 768px) {
      width: 60px;
      height: 60px;
      font-size: 24px;
      letter-spacing: 1.5px;
    }
  `
);
