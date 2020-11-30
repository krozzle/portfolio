const FeaturedSection = () => (
  <div className="flex flex-col py-24 justify-center items-center lg:flex-row lg:items-center lg:justify-between bg-gray-100 text-gray-900 tracking-wide leading-relaxed relative">
    <div className="w-full lg:w-1/2 md:pl-32 flex flex-col justify-center items-center md:items-start">
      <img
        src="/circle.svg"
        alt="pink circle"
        className="hidden lg:inline absolute bottom-0 left-0 lg:w-52 2xl:w-64"
      />
      <h2 className="text-2xl text-indigo-700">featured project</h2>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-1">
        VirtualDojoVienna.com <br /> (Update)
      </h1>
      <div className="lg:w-2/3 py-4 text-xl text-gray-700">
        <p>
          Virtual Dojo Vienna is a non-profit organization dedicated to provide
          a home for fighting game enthusiasts in Vienna, Austria.
        </p>
        <p>
          To make life easier for the people running the club, this update will
          add the ability to manage legal documents, track inventory and give
          members a place to communicate and organize.
        </p>
      </div>
    </div>
    <div className="lg:w-1/2 px-8 py-8 md:-mb-48">
      <img
        src="/vdv-screenshot.png"
        alt="screenshot of hero of section of virtualdojovienna.com"
        className="rounded-2xl lg:min-w-full"
      />
    </div>
  </div>
);

export default FeaturedSection;
