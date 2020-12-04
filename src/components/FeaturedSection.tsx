import Fade from 'react-reveal/Fade';

const FeaturedSection = () => (
  <Fade>
    <div
      id="work"
      className="flex flex-col pt-24 justify-center items-center lg:flex-row lg:items-center lg:justify-between bg-gray-100 text-gray-900 tracking-wide leading-relaxed relative text-center lg:text-left"
    >
      <div className="w-full lg:w-1/2 lg:pl-32 2xl:pl-48 flex flex-col justify-center items-center lg:items-start">
        <h2 className="text-2xl text-indigo-700">featured project</h2>
        <a
          href="http://virtualdojovienna.com"
          className="hover:text-vdvPink transition-colors duration-300"
        >
          <h1 className="text-4xl font-bold py-1">VirtualDojoVienna.com</h1>
        </a>
        <div className="px-12 lg:px-0 lg:w-2/3 py-4 text-center lg:text-left text-lg lg:text-xl text-gray-700">
          <p>
            Virtual Dojo Vienna is a non-profit organization dedicated to
            providing a home for fighting game enthusiasts in Vienna, Austria.
          </p>
          <p>
            This update will add the ability to manage legal documents, track
            inventory and give members a place to communicate and organize.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center px-12 pb-12 lg:pr-32 2xl:pr-48">
        <a href="http://virtualdojovienna.com">
          <img
            src="/vdv-screenshot.png"
            alt="screenshot of hero of section of virtualdojovienna.com"
            className="rounded-2xl "
          />
        </a>
      </div>
    </div>
  </Fade>
);

export default FeaturedSection;
