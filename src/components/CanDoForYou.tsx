import Skills from './Skills';

const CanDoForYou = () => (
  <div className="">
    <div
      id="canDoForYou"
      className="flex flex-col py-12 lg:p-24 items-center lg:items-baseline justify-center text-center text-gray-800 tracking-wide bg-gray-300"
    >
      <div className="">
        <h1 className="p-12 uppercase text-5xl font-extrabold">
          what i can <br className="lg:hidden" /> do for you
        </h1>
      </div>
      <div className="px-12 lg:text-left font-medium text-3xl">
        <p>
          I create software solutions <br className="lg:hidden" /> to make life{' '}
          <br />
          <span className="text-gray-900">just a bit easier.</span>
        </p>
        <p>
          Offering a helping hand to
          <br className="lg:hidden" /> build the piece of <br className="" />{' '}
          web technology that <br className="lg:hidden" />
          you have in mind.
        </p>
      </div>
      <div className="my-12 border-b-2 border-gray-800 w-full" />
    </div>
    <Skills />
  </div>
);

export default CanDoForYou;
