import Fade from 'react-reveal/Fade';
import CanDoForYou from './CanDoForYou';

const GetInTouch = () => (
  <Fade>
    <div
      id="getInTouch"
      className="flex items-center justify-center py-32 lg:px-32 2xl:px-48 tracking-wide leading-relaxed text-center lg:text-left text-2xl text-gray-50 bg-gray-900"
    >
      <CanDoForYou />
      <div className="flex-col justify-start items-center ">
        <h1 className="text-gray-100">Get In Touch</h1>
        <p className="py-6 px-12 lg:px-0 text-gray-200">
          If you have an offer, opportunity or introduction <br /> that might
          make both your life <br /> and mine more interesting and exciting,{' '}
          <br />
          don’t hesitate and reach out.
        </p>
        <a href="mailto:christopher.wattaul@gmail.com" className="outline-none">
          <button className="focus:outline-none focus:ring-2 focus:ring-vdvPink px-8 py-4 my-12 rounded-full border-2 bg-vdvPink hover:bg-gray-200 hover:border-vdvPink hover:text-vdvPink duration-300 hover:shadow-xl border-gray-200 text-2xl lg:text-3xl">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  </Fade>
);

export default GetInTouch;
