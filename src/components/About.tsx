import AboutMobile from './utils/AboutMobile';

const About = () => (
  <div
    id="about"
    className="lg:px-48 py-24 bg-gray-100 text-gray-800 tracking-wide font-medium text-3xl"
  >
    <h1 className="text-6xl font-extrabold">About me</h1>
    <div className="hidden lg:flex flex-col max-w-3xl justify-center ">
      <p>
        Born and raised in Vienna, Austria, <br />
        of mixed descent, there's no other place <br /> I want to call home.
      </p>
      <p>
        Following up a decade worth of nursing,
        <br className="hidden lg:inline" />I kicked things off with a coding
        bootcamp <br />
        <a
          href="upleveled.io"
          className="underline rounded-2xl md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          @UpLeveled
        </a>{' '}
        with a strong focus on <br />
        <a
          href="https://reactjs.org"
          className="underline rounded-2xl md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          React
        </a>
        ,{' '}
        <a
          href="https://nextjs.org"
          className="underline rounded-2xl md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://graphql.org"
          className="underline rounded-2xl md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          GraphQL
        </a>
        .
        <br />
      </p>
      <p>
        I enjoy sharing my effort, at the same time{' '}
        <br className="hidden lg:inline" /> spending time with family and
        friends. <br className="hidden lg:inline" />
        You can also find me hanging out <br />
        <a
          href="virtualdojovienna.com"
          className="underline rounded-2xl md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          @Virtual Dojo Vienna
        </a>
        .
      </p>
    </div>
    <AboutMobile />
  </div>
);

export default About;
