import Bounce from 'react-reveal/Bounce';

const About = () => (
  <Bounce right>
    <div
      id="about"
      className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:px-32 py-24 bg-gray-300 text-gray-900 tracking-wide leading-relaxed text-2xl text-center lg:text-left"
    >
      <div className="py-24 lg:py-0 w-64 lg:w-1/3">
        <img
          src="/kriz-cv.jpg"
          alt="chris posing for a profile picture"
          className="rounded-full lg:w-96"
        />
      </div>
      <div className="flex-col justify-center lg:items-start px-12">
        <h1 className="pb-6 text-center lg:text-left text-4xl lg:text-5xl font-bold">
          About Me
        </h1>
        <p>
          Born and raised in Vienna, Austria,{' '}
          <br className="hidden lg:inline" />
          of mixed descent, there's no other place{' '}
          <br className="hidden lg:inline" /> I want to call home.
        </p>
        <p>
          Following up a decade worth of nursing,{' '}
          <br className="hidden lg:inline" />I kicked things off with a coding
          bootcamp <br className="hidden lg:inline" />
          <a
            href="upleveled.io"
            className="hover:text-vdvPink transition-colors duration-300"
          >
            @UpLeveled
          </a>{' '}
          with a strong focus on <br className="hidden lg:inline" />
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
          <br className="hidden lg:inline" />
        </p>
        <p>
          I enjoy sharing my effort, at the same time{' '}
          <br className="hidden lg:inline" /> spending time with family and
          friends. <br className="hidden lg:inline" />
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
  </Bounce>
);

export default About;
