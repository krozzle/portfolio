const Intro = () => (
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
      <p className="text-3xl font-semibold leading-loose text-gray-800">
        let's turn {''}
        <span className="italic text-4xl font-">YOUR</span>
      </p>
      <p className="text-3xl font-semibold leading-loose text-gray-800">
        ideas into
      </p>
      <p className="px-4 text-4xl max-w-sm leading-loose rounded bg-teal-300 text-vdvPink shadow-xl font-serif font-bold tracking-wider lowercase">
        Reality
      </p>
    </div>
  </div>
);

export default Intro;
