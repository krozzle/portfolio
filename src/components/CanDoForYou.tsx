import Skills from './Skills';

const CanDoForYou = () => (
  <div className="min-h-screen py-12 bg-gray-300">
    <div
      id="canDoForYou"
      className="flex flex-col py-12 lg:p-24 items-center justify-center text-center text-gray-800 tracking-wide "
    >
      <div className="py-6">
        <h1 className="uppercase text-5xl font-extrabold">
          what i can <br className="lg:hidden" /> do for you
        </h1>
      </div>
      <div className="py-6 text-left font-medium text-3xl">
        <p>
          I create software <br className="lg:hidden" /> solutions to make life{' '}
          <br />
          <span className="text-gray-900">just a bit easier.</span>
        </p>
        <p>
          Offering a helping hand
          <br className="lg:hidden" /> to build the piece of <br className="" />{' '}
          web technology that <br className="lg:hidden" />
          you have in mind.
        </p>
      </div>
      <div className="py-6 border-b-2 border-gray-800 w-1/2" />
    </div>
    <Skills />
  </div>
);

export default CanDoForYou;
