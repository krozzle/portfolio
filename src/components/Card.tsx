const Card = () => (
  <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
    <div className="bg-gray-300 w-full rounded-lg shadow-md bg-cover bg-center"></div>
    <div className="w-56 md:w-64 bg-white shadow-lg -mt-12 shadow-lg rounded-lg overflow-hidden">
      <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-700">
        Legal Notice
      </div>
      {/* <div className="flex items-center justify-center py-2 px-3 bg-gray-300">
        <h1 className="text-gray-700 font-bold text-center">
          Thank You For Your Time
        </h1>
      </div> */}
    </div>
  </div>
);

export default Card;
