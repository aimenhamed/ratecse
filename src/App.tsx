import React from 'react';
import { AppWrapper, Heading, Image, Text } from './App.style';
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
      <Text> Aimen Hamed </Text> 
      <a href="https://github.com/aimenhamed/ratecse"><Text>Source</Text></a>
      <a href="https://github.com/aimenhamed/"><Text>Github</Text></a>
   </AppWrapper>
  );
}

export default App;
