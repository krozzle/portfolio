import NavLinks from './utils/NavLinks';
import SocialLinks from './utils/SocialLinks';

const Header = () => (
  <div className="flex items-center text-gray-100 font-medium top-0 sticky">
    <NavLinks />
    <SocialLinks />
  </div>
);

export default Header;
