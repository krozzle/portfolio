const Intro = () => (
  <div className="flex justify-around py-24">
    <div className="w-1/2">
      <img
        src="/kriz-cv.jpg"
        alt="picture of krozzle posing for a new profile picture"
        className="w-2/3 ml-auto px-12 shadow-sm rounded-tl-full rounded-br-full"
      />
    </div>
    <div className="w-1/2 mr-auto px-12 flex flex-col justify-center align-middle">
      <div className="text-4xl py-2 text-gray-900 font-extrabold tracking-normal">
        Coovfefe, I'm Chris
      </div>
      <div className="text-2xl text-gray-800">Let's turn your</div>
      <div className="text-2xl text-gray-800">Ideas into</div>
      <div className="text-3xl text-gray-500 font-serif font-bold">Reality</div>
    </div>
  </div>
);

export default Intro;
