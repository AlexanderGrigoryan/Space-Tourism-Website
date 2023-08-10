import React, { useState } from "react";
import data from "../data.json";
import styled, { css } from "styled-components";

interface CrewSliderProps {
  teamMember: string;
  setTeamMember: React.Dispatch<React.SetStateAction<string>>;
}

function CrewSlider(props: CrewSliderProps) {
  const { teamMember, setTeamMember } = props;
  const [activeButton, setActiveButton] = useState<boolean>(true);

  return (
    <>
      {data.crew.map((item) =>
        teamMember === item.name ? (
          <MemberImage
            key={item.name}
            teamMember={teamMember}
            src={item.images.png}
          />
        ) : null
      )}
      <MemberLine></MemberLine>
      <Pagination>
        <PaginationButton
          activeButton={teamMember === "Douglas Hurley" && activeButton}
          onClick={() => {
            setTeamMember("Douglas Hurley");
            setActiveButton(true);
          }}
        ></PaginationButton>
        <PaginationButton
          activeButton={teamMember === "Mark Shuttleworth" && activeButton}
          onClick={() => {
            setTeamMember("Mark Shuttleworth");
            setActiveButton(true);
          }}
        ></PaginationButton>
        <PaginationButton
          activeButton={teamMember === "Victor Glover" && activeButton}
          onClick={() => {
            setTeamMember("Victor Glover");
            setActiveButton(true);
          }}
        ></PaginationButton>
        <PaginationButton
          activeButton={teamMember === "Anousheh Ansari" && activeButton}
          onClick={() => {
            setTeamMember("Anousheh Ansari");
            setActiveButton(true);
          }}
        ></PaginationButton>
      </Pagination>
    </>
  );
}

export default CrewSlider;

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
  `
);

const Pagination = styled.div`
  width: 88px;
  height: 10px;
  display: flex;
  column-gap: 15px;
  margin: 32px 0;
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
    background: ${props.activeButton
      ? "#FFFFFF"
      : "rgba(255, 255, 255, 0.174363)"};
  `
);
const MemberLine = styled.div`
  width: 327px;
  height: 1px;
  background: #383b4b;
`;
