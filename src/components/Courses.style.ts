import styled from "styled-components";

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CourseList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 40px;
  margin: 3rem 0;
`;

export const CourseItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
`;
