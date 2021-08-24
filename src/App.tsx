import React from 'react';
import { AppWrapper, Heading, Image } from './App.style';
import { Courses } from './components/Courses';
import cse from './assets/cse.png';
import unsw from './assets/unsw.png'
const App = () => {
  return (
    <AppWrapper>
      <Heading>
        <Image src={cse} />
        CSE Course Ratings
        <Image src={unsw} />
      </Heading>
      <Courses /> 
   </AppWrapper>
  );
}

export default App;
