import Fade from 'react-reveal/Fade';

const FeaturedSection = () => (
  <Fade>
    <div
      id="work"
      className="w-full flex flex-col py-24 px-12 lg:px-32 2xl:px-48 justify-center  lg:flex-row lg:justify-between bg-gray-100 text-gray-900 tracking-wide leading-relaxed text-left overflow-hidden space-y-12 lg:space-y-0"
    >
      <div className="w-full lg:w-2/3 flex flex-col items-start justify-center">
        <h2>featured project</h2>
        <a
          href="https://virtualdojovienna.com"
          className="hover:text-vdvPink transition-colors duration-300 no-underline"
        >
          <h1>VirtualDojoVienna</h1>
        </a>
        <div className="lg:px-0 sm:w-2/3 text-gray-700">
          <p>
            <a href="https://virtualdojovienna.com">Virtual Dojo Vienna</a> is a
            non-profit organization dedicated to providing a home for fighting
            game enthusiasts in Vienna, Austria.
          </p>
          <p>
            This update will add the ability to manage legal documents, track
            inventory and give members a place to communicate and organize.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center sm:w-2/3 lg:w-1/3">
        <a href="http://virtualdojovienna.com">
          <img
            src="/vdv-screenshot.png"
            alt="screenshot of hero section of virtualdojovienna.com"
            className="bg-contain bg-center rounded-2xl "
          />
        </a>
      </div>
    </div>
  </Fade>
);

export default FeaturedSection;
