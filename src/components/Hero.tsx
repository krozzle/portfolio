const Hero = () => (
  <div className="flex justify-around items-center min-h-screen tracking-wide text-gray-50">
    <div className="w-full md:w-2/3">
      <div className="flex flex-col md:px-32 py-20 justify-around items-center md:items-start min-h-screen bg-indigo-700 md:rounded-br-2xl">
        <h1 className="text-5xl font-extrabold tracking-wide leading-relaxed">
          Web Experiences <br /> Built In <br /> Delightful Ways
        </h1>
        <div className="flex text-gray-200">
          <img
            src="/chevrons-down.svg"
            alt="chevrons pointing down"
            className="animate-pulse"
          />
          <p className="text-xl">Get To Know Chris Wattaul</p>
        </div>
      </div>
    </div>
    <div className="hidden md:flex flex-col justify-center items-center min-h-screen w-1/3 bg-gray-100">
      <div>
        <img
          src="/hero-pattern.svg"
          alt="abstract pattern consisting of squares with rounded edges and one circle"
          className="-ml-1/2"
        />
      </div>
    </div>
  </div>
);

export default Hero;
