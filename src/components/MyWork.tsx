const MyWork = () => (
  <div
    id="myWork"
    className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around bg-gradient-to-b  from-blue-400 to-black"
  >
    <div className=" lg:inline lg:w-1/2">
      <img
        src="/typewriter.jpg"
        alt="picture of a typewriter with a few keys stroked"
      />
    </div>
    <div className="flex flex-col justify-center items-center lg:w-1/2">
      <a href="https://github.com/krozzle">
        <h1 className="px-12 py-8 text-gray-300 text-3xl text-right lg:text-left leading-tight lg:text-5xl font-semibold">
          constantly doing
        </h1>
        <p className="px-12 pb-8 text-xl font-light text-right lg:text-left leading-relaxed ">
          Follow me on <span className="underline text-gray-300 ">Github</span>{' '}
          and see me work.
        </p>
      </a>
    </div>
  </div>
);

export default MyWork;
