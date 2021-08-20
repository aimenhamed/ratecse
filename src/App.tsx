import React from 'react';
import { AppWrapper, Heading, Text } from './App.style';
import { Courses } from './components/Courses';
const App = () => {
  return (
    <AppWrapper>
      <Heading>CSE Course Ratings</Heading>
      <Courses /> 
   </AppWrapper>
  );
}

export default App;
