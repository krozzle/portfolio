import Fade from 'react-reveal/Fade';

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <Fade>
      <div className="z-20 flex justify-around lg:justify-start lg:px-32 items-center py-4 bg-gray-300 text-md text-lg text-gray-900 bottom-0 lg:sticky">
        <div className="flex lg:hidden space-x-4">
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
        <div className="flex">
          <div>Ⓒ {fullYear} •</div>
          <a
            href="/legal-notice"
            className="hover:text-vdvPink transition-colors duration-300"
          >
            <span className="px-2">Legal Notice</span>
          </a>
        </div>
      </div>
    </Fade>
  );
};
export default Footer;
