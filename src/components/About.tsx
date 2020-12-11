import Fade from 'react-reveal/Fade';

const About = () => (
  <Fade>
    <div id="about" className="bg-gray-100 text-gray-900 ">
      <div className="2xl:w-2/3 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-start px-12 lg:px-32 2xl:px-48 py-24 lg:pt-48 tracking-wide leading-relaxed text-left lg:text-right space-x-12">
        <div className="w-96 2xl:w-1/3 py-24 lg:py-0">
          <img
            src="/kriz-cv.jpg"
            alt="chris posing for a profile picture"
            className="rounded-full lg:w-96"
          />
        </div>
        <div className="2xl:w-2/3 flex-col justify-center items-start lg:px-0 2xl:pl-24">
          <h1>About Me</h1>
          <p className="pt-6">
            Born and raised in Vienna, Austria, <br />
            of mixed descent, there's no other place{' '}
            <br className="hidden xl:inline" /> I want to call home.
          </p>
          <p>
            Following up a decade worth of nursing, <br />I kicked things off
            with a coding bootcamp <br />
            <a
              href="https://upleveled.io"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              @UpLeveled
            </a>{' '}
            with a strong focus on <br />
            <a
              href="https://reactjs.org"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              React
            </a>
            ,{' '}
            <a
              href="https://nextjs.org"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              href="https://graphql.org"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              GraphQL
            </a>
            .
            <br />
          </p>
          <p>
            I enjoy sharing my effort, at the same time <br /> spending time
            with family and friends. <br />
            You can also find me hanging out <br />
            <a
              href="virtualdojovienna.com"
              className="hover:text-vdvPink transition-colors duration-300"
            >
              @Virtual Dojo Vienna
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </Fade>
);

export default About;
