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
  transition: 0.25s;
  background-color: #eee;
  border: none;
  width: 50%;
  border-radius: 50px;
  color: #eee;
  text-align: center;
  align-items: center;
  padding: 30px;

  &:hover {
    background-color: #ffd6d6;
    padding-bottom: 2rem;
    padding-top: 2rem;
    box-shadow: 5px 10px #ffc2c2;
  }
  &:active {
    box-shadow: 0 5px #ffc2c2;
    transform: translateY(4px);
  }
`;
