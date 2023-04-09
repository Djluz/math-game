/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Option from '../components/Option'
import Score from '../components/Score'


const MAX = 10;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function getRandomOptions(num, answer) {
  const options = [
    {
      value: answer,
      selected: false,
      correct: true
    }
  ];
  while (options.length < num) {
    const value = getRandomInt(MAX);
    if (!options.find(o => o.value === value)) {
      options.push({
        value,
        selected: false,
        correct: false
      });
    }
  }

  return shuffle(options);
}

function MathQuiz1() {
  const [numCorrect, setNumCorrect] = useState(0);
  const [numWrong, setNumWrong] = useState(0);
  const [x, setX] = useState (getRandomInt(MAX));
  const [y, setY] = useState(x);
  const [message, setMessage] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [options, setOptions] = useState(getRandomOptions(3, x / y));

  function next() {
    const nextX = getRandomInt(MAX) * getRandomInt(MAX);
    const nextY = getRandomInt(MAX);
    setX(nextX);
    setY(nextY);
    setMessage(null);
    setShowNext(false);
    setOptions(getRandomOptions(3, nextX / nextY));
  }


  function checkAnswer(e) {
    const num = Number(e.target.innerHTML);
    const isCorrect = x / y === num;
    setOptions(
      options.map(o => (o.value === num ? { ...o, selected: true } : o))
    );
    const message = isCorrect ? "CORRECT" : "SORRY, TRY AGAIN";
    setMessage(message);
    if (isCorrect) {
      setNumCorrect(numCorrect + 1);
      setShowNext(true);
    } else {
      setNumWrong(numWrong + 1);
    }
  }

  const optionsList = options.map(opt => (
    <Option option={opt} onClick={checkAnswer} />
  ));

  const nextButton = showNext ? (
    <button className="next" onClick={next}>
      Next
    </button>
  ) : null;



  return (
    <div className='box1 bg-white mx-auto' id='MathQuiz1'>
      <Score score={Math.max(numCorrect - numWrong, 0)} />
      <p>
        {x} &divide; {y} =
      </p>
      <div className="options flex items-center justify-center">{optionsList}</div>
      <h3 className='my-10 font-bold text-3xl'>{message}</h3>
      <hr />
      {nextButton}

      
    </div>
  );
}

export default MathQuiz1;
