import styled from "styled-components";

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4f4;
`;

export const CourseList = styled.ul`
  display: grid;
  gap: 40px;
  margin: 3rem 0;
`;

export const CourseItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-right: auto;
`;

export const LikeButton = styled.div`
  background-color: #eee;
  border: none;
  width: 100%;
  border-radius: 50px;
  color: #eee;
  display: flex;
  text-align: center;
  align-items: center;
`;
