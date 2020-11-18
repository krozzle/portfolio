import { useEffect, useState } from 'react';

const Intro = () => {
  const [word, setWord] = useState('you');

  const wordSelection = [
    'real',
    'stylish',
    'responsive',
    'ingenious',
    'quick',
    'yours',
  ];

  // console.log('randomWord: ', randomWord);

  // const intervalWord = window.setInterval(randomWord, 2000);

  const randomWord = setInterval(function () {
    setWord(wordSelection[Math.floor(Math.random() * wordSelection.length)]);
    clearInterval(randomWord);
  }, 2500);

  // clearInterval();

  // const wordFromArray = () => {
  //   setInterval(function () {
  //     const randomWord = () => {
  //       wordSelection[Math.floor(Math.random() * wordSelection.length)];
  //       return randomWord;
  //     };
  //     console.log('word: ', randomWord);
  //   }, 2000);
  // };

  // wordFromArray();

  useEffect(() => {
    console.log('word: ', word);
  }, [word]);

  // console.log(wordFromArray);
  return (
    <div
      id="intro"
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-around min-h-screen py-24 bg-gray-200"
    >
      <div className="lg:w-1/2 px-8 flex flex-col justify-center items-center lg:items-end text-5xl text-gray-800 font-extrabold text-center lg:text-right">
        <h1>
          Let's turn your <br /> ideas into something
        </h1>
        <p>{word}</p>
        <div className="mt-4 text-3xl font-medium text-gray-800">
          <p>Hi, my name is Chris.</p>
          <p>I am a React Frontend Developer.</p>
        </div>
        <div className="flex items-end">
          <div className="mt-4 mr-8 py-1 px-4 rounded-2xl shadow-lg font-normal text-2xl bg-gray-800 text-gray-200">
            my work
          </div>
          <div className="w-xs mt-4 py-1 px-4 rounded-2xl shadow-lg font-normal text-2xl bg-gray-800 text-gray-200">
            about me
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="/kriz-cv.jpg"
          alt="picture of krozzle posing for a new profile picture"
          className="max-w-sm md:max-w-md lg:mr-auto px-12 py-12 shadow-sm rounded-tl-full rounded-br-full"
        />
      </div>
    </div>
  );
};
export default Intro;
