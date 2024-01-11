import React, { useState, useEffect } from 'react';

const AutoTypeText = () => {
  const [wordsToType, setWordsToType] = useState([
    " Engineer",
    " Entrepreneurship",
    " Consultant",
    " Economic",
    " Managers",
  ]);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => prevText + wordsToType[wordIndex][index]);
      index = (index + 1) % wordsToType[wordIndex].length;

      if (index === 0 && wordIndex < wordsToType.length - 1) {
        setDisplayedText(""); // Clear the displayed text after completing a word
        setWordIndex((prevIndex) => prevIndex + 1); // Move to the next word
      } else if (index === 0) {
        setDisplayedText(""); // Clear the displayed text after completing the last word
        setWordIndex(0); // Reset to the first word
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [wordsToType, wordIndex]);

  return (
    <div className="auto-type-text" style={{ color: '#99D930' }}>
      {displayedText}
    </div>
  );
};

export default AutoTypeText;
