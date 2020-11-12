const Intro = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around py-24 bg-gray-200">
    <div className="lg:w-1/2">
      <img
        src="/kriz-cv.jpg"
        alt="picture of krozzle posing for a new profile picture"
        className="max-w-sm md:max-w-md ml-auto px-12 py-12 shadow-sm rounded-tl-full rounded-br-full"
      />
    </div>
    <div className="flex flex-col justify-center items-center lg:w-1/2 lg:mr-auto p-12">
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
