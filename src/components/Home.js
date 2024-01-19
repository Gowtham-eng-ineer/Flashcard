import React from 'react';
import MyFlashcard from './Flashcard';
import MyFAQ from './FAQ';
import './Home.css';

const Home = () => {
  return (
    <div>
      <MyFlashcard />
      <div className="FAQ">
        <MyFAQ />
      </div>
    </div>
  );
};

export default Home;