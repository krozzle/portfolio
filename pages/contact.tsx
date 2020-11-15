import Page from '../src/components/Page';

const contactPage = () => (
  <Page>
    <div className="flex flex-col justify-center items-center min-h-screen py-24 bg-yellow-500">
      <div className="bg-gray-300 bg-opacity-50 max-w-sm rounded-3xl shadow-lg">
        <div className="flex my-8 px-6 text-gray-800 leading-relaxed">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center text-gray-700 font-semibold uppercase rounded-md border-b-2 border-vdvPink">
              get in touch
            </h1>
            <p className="px-12 pt-8 pb-1 text-lg font-light tracking-wide text-gray-900 leading-relaxed">
              {' '}
              If you have an offer, opportunity, or introduction that might make
              my life more interesting, email me at{' '}
              <a
                href="mailto:christopher.wattaul@gmail.com"
                className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
              >
                christopher.wattaul@gmail.com
              </a>
              .
            </p>
            <p className="px-12 pb-8 pt-1 text-lg font-light tracking-wide text-gray-900 leading-relaxed">
              For the reasons stated above, i'll only respond to those proposals
              that are a good match for my schedule and interests.
            </p>
          </div>
        </div>
      </div>
      <a href="mailto:christopher.wattaul@gmail.com">
        <div className="w-56 md:w-64 bg-gray-100 bg-opacity-50 shadow-lg rounded-3xl border-b-2 border-vdvPink overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-900 shadow-xl">
            send me a message
          </div>
          {/* <div className="flex items-center justify-center py-2 px-3 bg-gray-300">
        <h1 className="text-gray-700 font-bold text-center">
        Thank You For Your Time
        </h1>
      </div> */}
        </div>
      </a>
    </div>
  </Page>
);

export default contactPage;
