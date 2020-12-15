import Fade from 'react-reveal/Fade';
import CanDoForYou from './CanDoForYou';

const GetInTouch = () => (
  <Fade>
    <div id="getInTouch" className="text-gray-100 bg-gray-900">
      <div className="2xl:w-2/3 flex flex-col lg:flex-row items-start justify-center lg:justify-between py-32 px-12 lg:px-32 2xl:px-48 text-left text-2xl xl:space-x-4 space-y-12 lg:space-y-0">
        <CanDoForYou />
        <div className="h-full flex-col justify-center lg:justify-start items-start lg:text-right">
          <h1 className="text-gray-50">Get In Touch</h1>
          <p className="py-6 lg:px-0 text-gray-200">
            If you have an <br className="xl:hidden" /> opportunity or
            introduction <br />
            that you are passionate about <br />
            or require assistance in any way, <br />
            don’t hesitate and reach out.
          </p>
          <a
            href="mailto:christopher.wattaul@gmail.com"
            className="outline-none"
          >
            <button className="focus:outline-none focus:ring-2 focus:ring-vdvPink px-8 py-4 my-8 rounded-full border-2 bg-vdvPink hover:bg-gray-200 hover:border-vdvPink hover:text-vdvPink duration-300 hover:shadow-xl border-gray-200 tracking-wide text-xl lg:text-2xl font-nunito">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  </Fade>
);

export default GetInTouch;
