const ThankYou = () => (
  <div
    id="thankYou"
    className="flex flex-col lg:flex-row items-center justify-center lg:justify-around bg-gradient-to-b from-black via-gray-800 to-vdvPink"
  >
    <div className="lg:w-2/3">
      <img
        src="/enjoyToday.jpg"
        alt="light blue neon lights that spell the words 'enjoy today' on two lines"
        className="lg:rounded-tr-full"
      />
    </div>
    <div className="flex flex-col justify-center items-center lg:w-1/3">
      <h1 className="px-12 py-8 text-gray-300 text-3xl text-right lg:text-left tracking-wide lg:text-5xl font-semibold">
        Thank You
      </h1>
      <p className="px-12 pb-8 text-xl font-light text-center tracking-wider text-gray-300 leading-relaxed">
        for stopping by
      </p>
    </div>
  </div>
);

export default ThankYou;
