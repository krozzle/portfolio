import Fade from 'react-reveal/Fade';
import NavLinks from './utils/NavLinks';
import SocialLinks from './utils/SocialLinks';

const Header = () => (
  <Fade>
    <div className="flex items-center text-gray-100 font-medium tracking-wide top-0 sticky z-10">
      <NavLinks />
      <SocialLinks />
    </div>
  </Fade>
);

export default Header;
