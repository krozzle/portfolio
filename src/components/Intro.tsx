const Intro = () => (
  <div
    id="intro"
    className="flex flex-col lg:flex-row items-center justify-around lg:justify-around py-12 bg-gray-100"
  >
    <div className="lg:w-1/2 px-12 flex flex-col justify-center items-center lg:items-end text-5xl text-gray-800 font-extrabold tracking-wide text-center lg:text-right">
      <h1>
        Let's turn <br /> your ideas <br className="lg:hidden" /> into{' '}
        <br className="hidden lg:inline" /> being
      </h1>
      <div className="mt-4 text-3xl font-medium">
        <p>Hi, my name is Chris</p>
        <p className="hidden lg:inline">I am a React Frontend Developer</p>
      </div>
      <div className="flex items-center justify-center font-normal text-center text-2xl text-gray-200">
        <a href="#about">
          <div className="mr-8 mt-4 py-1 px-4 w-40 rounded-2xl shadow-md hover:shadow-lg bg-gray-800 transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-800 cursor-pointer">
            my work
          </div>
        </a>
        <a href="#about">
          <div className="mt-4 py-1 px-4 w-40 rounded-2xl shadow-lg bg-gray-800 transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-800 cursor-pointer">
            about me
          </div>
        </a>
      </div>
    </div>
    <div className="py-12 lg:w-1/2">
      <img
        src="/kriz-cv.jpg"
        alt="picture of krozzle posing for a new profile picture"
        className="max-w-xs md:max-w-sm lg:max-w-md lg:mr-auto px-12 shadow-sm rounded-tl-full rounded-br-full"
      />
    </div>
  </div>
);
export default Intro;
