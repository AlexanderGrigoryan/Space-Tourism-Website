import React from "react";
import data from "../data.json";
import styled, { css } from "styled-components";

interface CrewSliderProps {
  teamMember: string;
  setTeamMember: React.Dispatch<React.SetStateAction<string>>;
}

function CrewSlider(props: CrewSliderProps) {
  const { teamMember, setTeamMember } = props;
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
          onClick={() => setTeamMember("Douglas Hurley")}
        ></PaginationButton>
        <PaginationButton
          onClick={() => setTeamMember("Mark Shuttleworth")}
        ></PaginationButton>
        <PaginationButton
          onClick={() => setTeamMember("Victor Glover")}
        ></PaginationButton>
        <PaginationButton
          onClick={() => setTeamMember("Anousheh Ansari")}
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

const PaginationButton = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.174363);
  cursor: pointer;
`;

const MemberLine = styled.div`
  width: 327px;
  height: 1px;
  background: #383b4b;
`;


