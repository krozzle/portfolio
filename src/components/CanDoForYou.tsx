const CanDoForYou = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around min-h-screen bg-teal-600 py-12">
    <div className="lg:w-1/3 py-12">
      <p className="px-12 py-1 lg:py-20 uppercase border-b-2 lg:border-r-2  border-gray-500 text-gray-300 text-3xl text-center lg:text-4xl xl:text-5xl lg:text-right font-extrabold">
        what i can <br /> do for you
      </p>
    </div>
    <div className="lg:w-2/3 px-8 lg:px-24 leading-relaxed list-none text-center lg:text-left text-3xl text-gray-900">
      <p className="font-medium tracking-wider">
        I create software solutions <br />
        to make life
      </p>
      <p className="font-hairline text-4xl">just a bit easier.</p>
      <p className="font-medium tracking-wide">
        Offering a helping hand to <br className="lg:hidden" /> build{' '}
        <br className="hidden lg:inline" /> the piece of{' '}
        <br className="lg:hidden" /> web technology
        <br className="inline" /> that you have in mind.
      </p>
    </div>
  </div>
);

export default CanDoForYou;
