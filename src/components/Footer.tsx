import Fade from 'react-reveal/Fade';

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <Fade>
      <div className="z-20 flex justify-between md:justify-start items-center px-12 py-4 lg:px-32 2xl:px-48 bg-gray-200 text-gray-900 bottom-0 font-poppins">
        <div className="flex md:hidden space-x-4">
          <a href="https://github.com/krozzle">
            <img src="/github.svg" />
          </a>
          <a href="https://twitter.com/krozzler">
            <img src="/twitter.svg" />
          </a>
          <a href="https://linkedin.com/in/christopher-wattaul/">
            <img src="/linkedin.svg" />
          </a>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <p className="text-lg">Ⓒ {fullYear} •</p>
          <a href="/legal-notice" className="no-underline">
            <p className="text-lg">Legal Notice</p>
          </a>
        </div>
      </div>
    </Fade>
  );
};
export default Footer;
