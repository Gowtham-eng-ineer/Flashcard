import React, { useState } from 'react';
import './FAQ.css';

const FAQ = (props) => {
  const faqData = [
    {
      question: "What is Flashcard?",
      answer: "A flashcard is a card bearing information, Which is used as a study aid to learn."
    },
    {
      question: "Why do we use it?",
      answer: "Flashcards are commonly used as a learning and memorization tool. They are especially popular in educational settings and self-study environments."
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='faq'>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            {item.question}
            <div className="arrow-down"></div> 
          </div>
          {expandedIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;