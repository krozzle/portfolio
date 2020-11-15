const Header = () => (
  <div className="flex justify-around items-center py-4 text-md text-gray-800 font-hairline opacity-100 bg-opacity-50 lg:opacity-25 lg:transition lg:duration-500 lg:hover:ease-in-out lg:hover:opacity-100 bg-gray-500 lg:hover:bg-opacity-50 top-0 sticky">
    <div className="flex justify-around">
      <div>
        <a href="/">chris wattaul</a>
      </div>
    </div>
    <div>
      <div className="lg:hidden flex justify-evenly items-center">
        <button type="button" className="fill-current gray-700-to-current">
          <img src="/menu.svg" alt="menu button" />
        </button>
      </div>
    </div>
    <div className="hidden lg:flex lg:justify-center">
      <div>
        <div className="">
          <a href="#canDoForYou" className="px-2">
            why me
          </a>
          <a href="#about" className="px-2">
            about
          </a>
          <a href="#myWork" className="px-2">
            follow me
          </a>
          <a href="/legalNotice" className="px-2">
            contact
          </a>
          <button className="rounded-lg lg:mx-2 px-2 py-1 transition duration-300 focus:ease-in-out bg-gray-200 focus:bg-gray-700 bg-opacity-25 focus:bg-opacity-25 focus:outline-none">
            darkMode
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
