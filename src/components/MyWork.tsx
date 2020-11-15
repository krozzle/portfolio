const MyWork = () => (
  <div
    id="myWork"
    className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around bg-blue-400"
  >
    <div className="lg:w-1/2">
      <img
        src="/typewriter.jpg"
        alt="picture of a typewriter with a few keys stroked"
      />
    </div>
    <div className="flex flex-col justify-center items-center lg:w-1/2">
      <a href="https://github.com/krozzle">
        <h1 className="px-12 py-8 text-gray-300 text-3xl text-center leading-tight md:text-4xl lg:text-5xl font-semibold">
          constantly doing
        </h1>
        <p className="px-8 pb-8 text-xl font-light text-center leading-relaxed ">
          Follow me on Github and see me work.
        </p>
      </a>
    </div>
  </div>
);

export default MyWork;
