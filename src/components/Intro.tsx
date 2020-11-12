const Intro = () => (
  <div className="flex flex-col lg:flex-row justify-around py-24 bg-gray-200">
    <div className="w-1/2">
      <img
        src="/kriz-cv.jpg"
        alt="picture of krozzle posing for a new profile picture"
        className="lg:w-2/3 ml-auto px-12 py-12 shadow-sm rounded-tl-full rounded-br-full"
      />
    </div>
    <div className="w-1/2 mr-auto px-12 flex flex-col justify-center items-start">
      <h1 className="text-4xl text-gray-800 font-bold tracking-wide">
        Chris Wattaul
      </h1>
      <h1 className="text-4xl text-indigo-500 font-extrabold tracking-wide">
        Frontend Developer
      </h1>
      <p className="text-3xl font-semibold leading-loose text-gray-800">
        Let's turn your
      </p>
      <p className="text-3xl font-semibold leading-loose text-gray-800">
        Ideas into
      </p>
      <p className="text-3xl leading-loose text-gray-500 font-serif font-bold">
        Reality
      </p>
    </div>
  </div>
);

export default Intro;
