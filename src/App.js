import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Flashcard from './components/Flashcard';
import Contact from './components/Contact';
import MyFAQ from './components/FAQ';
import Login from './components/Login';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Breadcrumbs />
        <div style={{ marginTop: '2em' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcard" element={<FlashcardPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<MyFAQ/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function FlashcardPage() {
  const flashcards = [
    { category: "Mathematics", title: "Relations and Functions", question: "What is a function?", answer: "A function is a relation between a set of inputs and a set of possible outputs where each input is related to exactly one output" },
  ];

  return (
    <div>
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} {...flashcard} />
      ))}
    </div>
  );
}

export default App;