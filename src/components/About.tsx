import Fade from 'react-reveal/Fade';

const About = () => (
  <Fade>
    <div id="about" className="bg-gray-100 text-gray-900 ">
      <div className="lg:w-2/3 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:pl-32 2xl:pl-48 py-24 lg:pt-48 tracking-wide leading-relaxed text-2xl text-center lg:text-right">
        <div className="w-96 lg:w-1/2 py-24 lg:py-0">
          <img
            src="/kriz-cv.jpg"
            alt="chris posing for a profile picture"
            className="rounded-full lg:w-96"
          />
        </div>
        <div className="lg:w-1/2 flex-col justify-center items-center lg:items-start px-12 lg:px-0">
          <h1>About Me</h1>
          <p>
            Born and raised in Vienna, Austria, <br />
            of mixed descent, there's no other place{' '}
            <br className="hidden lg:inline" /> I want to call home.
          </p>
          <p>
            Following up a decade worth of nursing,{' '}
            <br className="hidden lg:inline" />I kicked things off with a coding
            bootcamp <br />
            <a
              href="upleveled.io"
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
            I enjoy sharing my effort, at the same time{' '}
            <br className="hidden lg:inline" /> spending time with family and
            friends. <br />
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
