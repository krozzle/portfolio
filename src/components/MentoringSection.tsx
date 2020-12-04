import Fade from 'react-reveal/Fade';

const Mentoring = () => (
  <Fade>
    <div className="flex flex-col py-24 justify-center items-center lg:flex-row lg:items-center lg:justify-between bg-gray-100 text-gray-900 tracking-wide leading-relaxed relative text-center lg:text-left">
      <div className="lg:w-1/2 flex justify-center items-center lg:pl-32 2xl:pl-48">
        <a href="http://virtualdojovienna.com">
          <img
            src="/kriz-upleveled.jpg"
            alt="screenshot of hero of section of virtualdojovienna.com"
            className="hidden w-96 lg:inline rounded-2xl "
          />
        </a>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-32 2xl:pl-48 flex flex-col justify-center items-center lg:items-start">
        <a href="https://www.upleveled.io">
          <h2 className="text-2xl text-indigo-700">UpLeveled.io</h2>
        </a>
        <a
          href="https://www.upleveled.io"
          className="hover:text-vdvPink transition-colors duration-300"
        >
          <h1 className="text-4xl font-bold py-1">Mentoring/Tutoring</h1>
        </a>
        <div className="px-12 lg:px-0 lg:w-2/3 py-4 text-center lg:text-left text-lg lg:text-xl text-gray-700">
          <p>
            <a
              href="https://www.upleveled.io"
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
