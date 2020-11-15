const MyWork = () => (
  <div
    id="myWork"
    className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around bg-gradient-to-b  from-blue-400 to-black"
  >
    <div className="lg:inline lg:w-1/2">
      <img
        src="/typewriter.jpg"
        alt="picture of a typewriter with a few keys stroked"
        className="rounded-br-full"
      />
    </div>
    <div className="flex flex-col justify-center items-center lg:w-1/2">
      <h1 className="px-12 py-8 text-gray-300 text-3xl text-right lg:text-left leading-tight lg:text-5xl font-semibold">
        constantly doing
      </h1>
      <p className="px-12 pb-8 text-xl font-light text-right lg:text-left leading-relaxed">
        Follow me on{' '}
        <a
          href="https://nextjs.org"
          className="text-gray-300 underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          Github
        </a>{' '}
        and see me work.
      </p>
    </div>
  </div>
);

export default MyWork;
