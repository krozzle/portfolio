import { useEffect, useState } from 'react';

const Intro = () => {
  const [word, setWord] = useState('being');

  const wordSelection = [
    'reality',
    'something beautiful',
    'something fast',
    'something you want',
    'something yours',
  ];

  // console.log('randomWord: ', randomWord);

  // const intervalWord = window.setInterval(randomWord, 2000);

  const randomWord = setInterval(function () {
    setWord(wordSelection[Math.floor(Math.random() * wordSelection.length)]);
    clearInterval(randomWord);
  }, 1500);
  console.log('word: ', word);

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
    console.log('render');
  }, [setWord]);

  // console.log(wordFromArray);
  return (
    <div
      id="intro"
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:justify-around py-24 bg-gray-200"
    >
      <div className="lg:w-1/2">
        <img
          src="/kriz-cv.jpg"
          alt="picture of krozzle posing for a new profile picture"
          className="max-w-sm md:max-w-md ml-auto px-12 py-12 shadow-sm rounded-tl-full rounded-br-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:w-1/2 lg:items-baseline p-8">
        <h1 className="text-4xl text-gray-800 font-bold tracking-wide">
          chris wattaul
        </h1>
        <h1 className="text-4xl text-indigo-500 font-extrabold tracking-wide">
          Frontend Developer
        </h1>
        <p className="text-3xl font-semibold leading-relaxed text-gray-800">
          let's turn {''}
          <span className="italic text-4xl font-bold">YOUR</span>
        </p>
        <p className="text-3xl font-semibold text-gray-800">ideas into</p>
        <p className="px-2 italic leading-relaxed text-4xl font-bold text-gray-900 bg-vdvPink">
          {word}
        </p>
      </div>
    </div>
  );
};
export default Intro;
