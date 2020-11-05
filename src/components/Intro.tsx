const Intro = () => (
  <div className="flex justify-around">
    <div className="w-1/2">
      <img
        src="/kriz-cv.jpg"
        alt="picture of krozzle posing"
        className="w-2/3 ml-auto px-12 shadow-sm rounded-tr-3xl rounded-bl-3xl rounded-tl-full rounded-br-full"
      />
    </div>
    <div className="w-1/2 mr-auto px-12 flex flex-col justify-center align-middle">
      <div className="text-4xl py-2 text-gray-900 font-extrabold tracking-normal">
        Coovfefe, I'm Kriz
      </div>
      <div className="text-2xl text-gray-800">Let's build something</div>
      <div className="text-3xl text-gray-500 font-serif font-bold">
        wonderful
      </div>
    </div>
  </div>
);

export default Intro;
