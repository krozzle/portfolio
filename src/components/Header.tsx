const Header = () => (
  <div className="flex justify-around py-4 text-md text-gray-800 font-hairline opacity-25 transition duration-500 hover:ease-in-out hover:opacity-100 bg-gray-500 hover:bg-opacity-50 top-0 sticky">
    <div className="flex flex-1 justify-around">
      <div>chris wattaul</div>
    </div>
    <div className="flex flex-1 justify-center">
      <div className="">
        <a href="/" className="px-2">
          work
        </a>
        <a href="/about" className="px-2">
          about
        </a>
        <a href="/" className="px-2">
          contact
        </a>
      </div>
      <div className="flex justify-center px-4 w-1/3">
        <button className=" rounded-lg px-2 py-1 transition duration-300 focus:ease-in-out bg-gray-200 focus:bg-gray-700 bg-opacity-25 focus:bg-opacity-25 focus:outline-none">
          darkMode
        </button>
      </div>
    </div>
  </div>
);

export default Header;
