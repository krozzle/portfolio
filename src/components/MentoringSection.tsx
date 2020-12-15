import Fade from 'react-reveal/Fade';

const Mentoring = () => (
  <Fade>
    <div className="flex flex-col py-24 justify-center items-center lg:flex-row lg:items-center lg:justify-between bg-gray-100 text-gray-900 tracking-wide leading-relaxed relative text-left">
      <div className="hidden lg:w-1/2 lg:flex justify-center items-center lg:pl-32 2xl:pl-48">
        <a href="http://upleveled.io">
          <img
            src="/kriz-upleveled.jpg"
            alt="screenshot of hero of section of virtualdojovienna.com"
            className="w-96 rounded-2xl "
          />
        </a>
      </div>
      <div className="w-full lg:w-1/2 px-12 lg:pl-32 2xl:pl-48 flex flex-col justify-center items-start text-left">
        <h2>mentoring/tutoring</h2>
        <a href="https://www.upleveled.io" className="no-underline">
          <h1>UpLeveled</h1>
        </a>
        <div className="lg:px-0 lg:w-2/3 py-4 text-lg lg:text-xl text-gray-700">
          <p>
            <a
              href="https://upleveled.io"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              UpLeveled.io{' '}
            </a>
            offers an immersive and intense 12-week coding bootcamp for web
            development based in Vienna, Austria.
          </p>
          <p>
            I helped students understand core principles of{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/javascript"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              JavaScript
            </a>
            ,{' '}
            <a
              href="https://reactjs.org"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              React
            </a>
            ,{' '}
            <a
              href="https://www.w3.org/"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              HTML
            </a>{' '}
            and{' '}
            <a
              href="https://www.w3.org/TR/CSS/#css"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              CSS
            </a>{' '}
            by picking their brains while having an ear to listen and pushing in
            the right direction.
          </p>
        </div>
      </div>
    </div>
  </Fade>
);

export default Mentoring;
