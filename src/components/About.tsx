const About = () => (
  <div
    id="about"
    className="snap snap-start flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen  bg-gray-700"
  >
    <div className="hidden lg:flex lg:flex-col w-full lg:w-2/3 xl:py-32 px-8 xl:px-16 xl:mx-auto xl:max-w-6xl text-3xl text-center text-gray-500 lg:text-right tracking-wider lg:tracking-normal leading-18">
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
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          @UpLeveled
        </a>{' '}
        with a strong focus on <br />
        <a
          href="https://reactjs.org"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          React
        </a>
        ,{' '}
        <a
          href="https://nextjs.org"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://graphql.org"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
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
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          @Virtual Dojo Vienna
        </a>
        .
      </p>
    </div>
    <div className="lg:hidden flex flex-col justify-center items-center py-4 text-4xl text-gray-500 font-hairline leading-relaxed tracking-wide">
      <p>Vienna 🇦🇹 🇵🇭</p>
      <p>12+ years 👩‍⚕️</p>
      <p>
        <a
          href="https://upleveled.io"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          UpLeveled
        </a>{' '}
        💻
      </p>
      <p>
        <a
          href="https://github.com/krozzle"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          Sharing is caring
        </a>{' '}
        😻
      </p>
      <p>
        <a
          href="https://nextjs.org"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://graphql.org"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          GraphQL
        </a>{' '}
        ⚛
      </p>
      <p>
        <a
          href="https://virtualdojovienna.com"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          Virtual Dojo Vienna
        </a>{' '}
        🕹
      </p>
    </div>
    <div className="flex justify-center items-center p-1 lg:items-end lg:w-1/3 text-6xl font-semibold text-gray-300 border-b-2 border-vdvPink tracking-wide">
      <p>About me</p>
    </div>
  </div>
);

export default About;
