const Hero = () => (
  <div className="flex justify-around items-center min-h-screen tracking-wide text-gray-100">
    <div className="w-full md:w-2/3">
      <div className="flex flex-col px-12 lg:px-32 2xl:pl-48 py-20 justify-around items-start md:items-start min-h-screen bg-indigo-700 md:rounded-br-2xl">
        <div className="text-6xl font-extrabold tracking-tight leading-tight font-overpass">
          Web <br className="hidden md:inline xl:hidden" /> Experiences <br />{' '}
          Built In <br /> Delightful{' '}
          <br className="hidden md:inline xl:hidden" /> Ways
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('work');
            console.log(element.offsetTop - 96);

            if (typeof window !== 'undefined') {
              window.scrollTo({
                top: element.offsetTop - 96,
                left: 0,
                behavior: 'smooth',
              });
              window.history.pushState(null, '', '#work');
            }
          }}
          href="#work"
        >
          <div className="flex text-gray-200">
            <img
              src="/chevrons-down.svg"
              alt="chevrons pointing down"
              className="animate-pulse"
            />
            <p className="text-xl">Get To Know Chris Wattaul</p>
          </div>
        </a>
      </div>
    </div>
    <div className="hidden md:flex flex-col justify-center items-center min-h-screen w-1/3 bg-gray-100">
      <div>
        <img
          src="/hero-pattern.svg"
          alt="abstract pattern consisting of squares with rounded edges and one circle"
          className="-ml-1/2"
        />
      </div>
    </div>
  </div>
);

export default Hero;
