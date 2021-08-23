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
  align-items: center;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const LikeButton = styled.button`
  background-color: #eee;
  border: none;
  width: 50%;
  border-radius: 50px;
  color: #eee;
  text-align: center;
  align-items: center;
  padding: 30px;
`;
