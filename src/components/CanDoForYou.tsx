const CanDoForYou = () => (
  <div className="flex sm:flex-col lg:flex-row flex-wrap min-h-screen items-center justify-around snap-mandatory bg-teal-600 py-24">
    <p className="lg:w-1/3 px-12 py-12 lg:py-20 border-b-2 lg:border-r-2  border-gray-500 text-gray-300 text-4xl lg:text-right uppercase font-extrabold">
      what i can do <br className="lg:hidden xl:inline" /> for you
    </p>
    <div className="lg:w-2/3 px-24 leading-loose list-none text-3xl">
      <ul>
        <li>Create </li>
        <li>Create </li>
        <li>Create </li>
        <li>Create </li>
      </ul>
    </div>
  </div>
);

export default CanDoForYou;
