const GetInTouch = () => (
  <div
    id="getInTouch"
    className="flex flex-col items-center lg:items-start justify-center lg:pl-32 py-32 tracking-wide leading-relaxed text-center lg:text-left text-2xl text-gray-50 bg-gray-900"
  >
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold">Get In Touch</h1>
      <p className="py-6 px-12 lg:px-0 lg:w-1/3 text-gray-200">
        If you have an offer, opportunity or introduction that might make my
        life more interesting and exciting, don’t hesitate and reach out.
      </p>
    </div>
    <a href="mailto:christopher.wattaul@gmail.com">
      <div className="px-12 py-4 rounded-full border-2 bg-vdvPink hover:bg-gray-200 hover:border-vdvPink hover:text-vdvPink duration-300 hover:shadow-xl border-gray-200 text-3xl">
        Contact Me
      </div>
    </a>
  </div>
);

export default GetInTouch;
