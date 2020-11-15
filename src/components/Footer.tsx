const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <div className="flex opacity-25 hover:opacity-100 hover:bg-opacity-50 transition duration-500 justify-around align-middle py-4 bg-gray-500 text-gray-900 bottom-0">
      <div className="flex">
        <a href="https://github.com/krozzle">
          <img className="pr-2" src="/github.svg" />
        </a>
        <a href="https://twitter.com/krozzler">
          <img className="px-2" src="/twitter.svg" />
        </a>
        <a href="https://linkedin.com/in/christopher-wattaul/">
          <img className="pl-2" src="/linkedin.svg" />
        </a>
      </div>
      <div className="flex text-md font-hairline">
        <div className="px-2">Ⓒ {fullYear}</div>
        <a href="/legalNotice">
          <span className="px-2">legal notice</span>
        </a>
      </div>
    </div>
  );
};
export default Footer;
