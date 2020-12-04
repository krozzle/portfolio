import Fade from 'react-reveal/Fade';
import NavLinks from './utils/NavLinks';
import SocialLinks from './utils/SocialLinks';

const Header = () => (
  <Fade>
    <div className="z-20 flex items-center text-gray-100 font-medium tracking-wide top-0 sticky">
      <NavLinks />
      <SocialLinks />
    </div>
  </Fade>
);

export default Header;
