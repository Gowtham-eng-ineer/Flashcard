import React, { useState } from 'react';
import './Flashcard.css';
const FlashcardApp = () => {
  const [isQuestionCardVisible, setIsQuestionCardVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [selectedFlashcardIndex, setSelectedFlashcardIndex] = useState(null);

  const showHideFlashcard = (index) => {
    setSelectedFlashcardIndex(index === selectedFlashcardIndex ? null : index);
  };

  const deleteFlashcard = (index) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards.splice(index, 1);
    setFlashcards(updatedFlashcards);
  };

  const editFlashcard = (index) => {
    const selectedFlashcard = flashcards[index];
    setQuestion(selectedFlashcard.question);
    setAnswer(selectedFlashcard.answer);
    setSelectedFlashcardIndex(index);
    setIsQuestionCardVisible(true);
  };

  const showQuestionCard = () => {
    setIsQuestionCardVisible(true);
    
    const randomQuestion = generateRandomQuestion();

    setQuestion(randomQuestion);
    setAnswer(generateAnswerForQuestion(randomQuestion)); 
    setErrorVisible(false);
  };

  const hideQuestionCard = () => {
    setIsQuestionCardVisible(false);
    setQuestion('');
    setAnswer('');
    setSelectedFlashcardIndex(null);
  };

  const saveFlashcard = () => {
    const trimmedQuestion = question.trim();
    const trimmedAnswer = answer.trim();

    if (!trimmedQuestion || !trimmedAnswer) {
      setErrorVisible(true);
    } else {
      setErrorVisible(false);

      if (selectedFlashcardIndex !== null) {
        const updatedFlashcards = [...flashcards];
        updatedFlashcards[selectedFlashcardIndex] = { question: trimmedQuestion, answer: trimmedAnswer };
        setFlashcards(updatedFlashcards);
        hideQuestionCard();
      } else {
        setFlashcards([...flashcards, { question: trimmedQuestion, answer: trimmedAnswer }]);
        hideQuestionCard();
      }
    }
  };

  const generateRandomQuestion = () => {
    const possibleQuestions = ['2+2', '12*5', '30/3', '15-7', '10+20'];
    const randomIndex = Math.floor(Math.random() * possibleQuestions.length);
    return possibleQuestions[randomIndex];
  };

  const generateAnswerForQuestion = (question) => {
    if (question === '2+2') {
      return '4';
    } else if (question === '12*5') {
      return '60';
    } else if (question === '30/3') {
      return '10';
    } else if (question === '15-7') {
      return '8';
    } else if (question === '10+20') {
      return '30';
    } else {
      return 'Answer not available';
    }
  };

  return (
    <div className="container">
      <div className="add-flashcard-con">
        <button id="add-flashcard" onClick={showQuestionCard}>
          Add Flashcard
        </button>
      </div>

      <div id="card-con">
        <div className="card-list-container">
          {flashcards.map((flashcard, index) => (
            <div key={index} className="flashcard">
              <p className="question-div">{flashcard.question}</p>
              <p className={`answer-div ${index === selectedFlashcardIndex ? '' : 'hide'}`}>
                {flashcard.answer}
              </p>
              <button className="show-hide-btn" onClick={() => showHideFlashcard(index)}>
                {index === selectedFlashcardIndex ? 'Hide' : 'Show'}
              </button>
              <button className="edit" onClick={() => editFlashcard(index)}>
                Edit
              </button>
              <button className="delete" onClick={() => deleteFlashcard(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {isQuestionCardVisible && (
        <div className="question-container" id="add-question-card">
          <h2>{selectedFlashcardIndex !== null ? 'Edit Flashcard' : 'Add Flashcard'}</h2>
          <div className="wrapper">
            <div className="error-con">
              <span className={errorVisible ? '' : 'hide'} id="error">
                Input fields cannot be empty!
              </span>
            </div>
            <div className="fa-xmark" id="close-btn" onClick={hideQuestionCard} role="button">
              ✖
            </div>
          </div>

          <label htmlFor="question">Question:</label>
          <textarea
            className="input"
            id="question"
            placeholder="Type the question here..."
            rows="2"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <label htmlFor="answer">Answer:</label>
          <textarea
            className="input"
            id="answer"
            rows="4"
            placeholder="Type the answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
          <button id="save-btn" onClick={saveFlashcard}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardApp;