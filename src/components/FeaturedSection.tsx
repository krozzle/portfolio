import Fade from 'react-reveal/Fade';

const FeaturedSection = () => (
  <Fade>
    <div
      id="work"
      className="flex flex-col pt-24 px-12 lg:pl-32 2xl:pl-48  justify-center items-center lg:flex-row lg:items-center lg:justify-between bg-gray-100 text-gray-900 tracking-wide leading-relaxed relative text-left"
    >
      <div className="w-full lg:w-1/2flex flex-col justify-center items-start">
        <h2>featured project</h2>
        <a
          href="http://virtualdojovienna.com"
          className="hover:text-vdvPink transition-colors duration-300"
        >
          <h1>VirtualDojoVienna.com</h1>
        </a>
        <div className="lg:px-0 lg:w-2/3 py-6 text-gray-700">
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
      <div className="lg:w-1/2 flex justify-center items-center py-12 lg:pr-32 2xl:pr-48">
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
