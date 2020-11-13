const About = () => (
  <div className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen text-gray-500 bg-gray-700">
    <div className="hidden lg:flex lg:flex-col w-full lg:w-2/3 xl:py-32 px-8 xl:px-16 xl:mx-auto xl:max-w-6xl text-3xl text-center lg:text-right tracking-wider lg:tracking-normal leading-18">
      <p>
        Born and raised in Vienna, Austria, <br />
        of mixed descent, there's no other place <br /> I want to call home.
      </p>
      <p>
        Following a 10+ year career as a nurse
        <br className="hidden lg:inline" />
        (cardiology & critical care), I kicked{' '}
        <br className="hidden lg:inline" /> things off with a coding bootcamp{' '}
        <a
          href="upleveled.io"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          @UpLeveled.
        </a>{' '}
      </p>
      <p>
        I enjoy sharing my effort, at the same time{' '}
        <br className="hidden lg:inline" /> I enjoy spending time with family
        and friends. <br className="hidden lg:inline" />
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
    <div className="lg:hidden flex flex-col justify-center items-center py-4 text-4xl font-hairline leading-relaxed tracking-wide">
      <p>Vienna 🇦🇹 🇵🇭</p>
      <p>10+ years 👩‍⚕️</p>
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
          href="https://virtualdojovienna.com"
          className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
        >
          Virtual Dojo Vienna
        </a>{' '}
        🕹
      </p>
    </div>
    <div className="flex justify-center items-center p-1 lg:items-end lg:w-1/3 text-6xl font-semibold border-b-2 border-vdvPink tracking-wide">
      <p>About me</p>
    </div>
  </div>
);

export default About;
