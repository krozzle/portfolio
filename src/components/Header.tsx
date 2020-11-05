const Header = () => (
  <div className="flex justify-around py-4 bg-gray-100 ">
    <div className="flex flex-1 justify-around text-gray-800">
      <div>chris wattaul</div>
    </div>
    <div className="flex flex-1 justify-center">
      <div className="">
        <a href="/" className="px-2">
          work
        </a>
        <a href="/" className="px-2">
          about
        </a>
        <a href="/" className="px-2">
          contact
        </a>
      </div>
      <div className="flex justify-center w-1/3">
        <button>darkMode</button>
      </div>
    </div>
  </div>
);

export default Header;
