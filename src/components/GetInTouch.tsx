const GetInTouch = () => (
  <div
    id="getInTouch"
    className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-around bg-gradient-to-b from-black via-gray-800 to-vdvPink"
  >
    <div className="lg:w-1/2">
      <img
        src="/enjoyToday.jpg"
        alt="light blue neon lights that spell the words 'enjoy today' on two lines"
        className="lg:rounded-tl-full"
      />
    </div>
    <div className="flex px-12 py-16 lg:w-1/2 justify-center items-center rounded-3xl">
      <a href="/contact" className="rounded-3xl">
        <div className="px-6 py-1 bg-gray-800 bg-opacity-25 rounded-3xl text-3xl font-hairline text-vdvPink hover:text-opacity-75 border-b border-vdvPink tracking-wider uppercase shadow-lg hover:shadow-2xl">
          get in touch
        </div>
      </a>
    </div>
  </div>
);

export default GetInTouch;