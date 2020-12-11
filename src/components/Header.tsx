import NavLinks from './utils/NavLinks';
import SocialLinks from './utils/SocialLinks';

const Header = () => (
  <div className="z-20 flex items-center text-gray-100 font-medium tracking-wide top-0 sticky">
    <NavLinks />
    <SocialLinks />
  </div>
);

export default Header;
