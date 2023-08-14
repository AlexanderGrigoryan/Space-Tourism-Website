import React from "react";
import styled, { css } from "styled-components";
import data from "../data.json";

interface PaginationProps {
  teamMember: string;
  setTeamMember: React.Dispatch<React.SetStateAction<string>>;
  activeButton: boolean;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
}

function Pagination(props: PaginationProps) {
  const { teamMember, setTeamMember, activeButton, setActiveButton } = props;
  return (
    <PaginationContainer>
      {data.crew.map((pagbutton, index) => {
        return (
          <PaginationButton
            key={index}
            activeButton={teamMember === pagbutton.name && activeButton}
            onClick={() => {
              setTeamMember(pagbutton.name);
              setActiveButton(true);
            }}
          ></PaginationButton>
        );
      })}
    </PaginationContainer>
  );
}

export default Pagination;

const PaginationContainer = styled.div`
  width: 88px;
  height: 10px;
  display: flex;
  column-gap: 15px;
  margin: 32px 0;

  @media screen and (min-width: 768px) {
    margin: 40px 0;
  }

  @media screen and (min-width: 1440px) {
    margin: 88px 0;
    column-gap: 25 + px;
    width: 132px;
    height: 15px;
  }
`;

interface PaginationButtonProps {
  activeButton: boolean;
}

const PaginationButton = styled.button(
  (props: PaginationButtonProps) => css`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;
    background: ${props.activeButton
      ? "#FFFFFF"
      : "rgba(255, 255, 255, 0.174363)"};

    @media screen and (min-width: 1440px) {
      width: 15px;
      height: 15px;
    }

    &:hover {
      background: ${!props.activeButton
        ? "rgba(255, 255, 255, 0.500094)"
        : "#FFFFFF"};
    }
  `
);
