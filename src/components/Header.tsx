import NavLinks from './utils/NavLinks';
import SocialLinks from './utils/SocialLinks';

const Header = () => (
  <div className="flex items-center text-gray-100 font-medium tracking-wide top-0 sticky z-10">
    <NavLinks />
    <SocialLinks />
  </div>
);

export default Header;
