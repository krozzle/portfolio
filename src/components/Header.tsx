const Header = () => (
  <div className="flex justify-around py-4 text-md text-gray-800 font-hairline opacity-25 transition duration-500 hover:ease-in-out hover:opacity-100 bg-gray-500 hover:bg-opacity-50 top-0 sticky">
    <div className="flex flex-1 justify-around">
      <div>
        <a href="/">chris wattaul</a>
      </div>
    </div>
    <div className="hidden lg:flex hd:flex-1 lg:justify-center">
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
    <div>
      <div className="lg:hidden flex justify-end items-center pr-12">
        <button type="button" className="fill-current gray-700-to-current">
          <img src="/menu.svg" alt="menu button" />
        </button>
      </div>
    </div>
  </div>
);

export default Header;
