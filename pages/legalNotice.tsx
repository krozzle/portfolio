import Page from '../src/components/Page';

const LegalNotice = () => (
  <Page>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-300 mx-auto py-12">
      <div className="bg-yellow-200 max-w-sm rounded-lg shadow-xl bg-opacity-25">
        <div className="flex my-8 pb-12 px-6 text-gray-900 leading-relaxed">
          <div className="flex flex-col">
            <div className="w-full text-2xl">Krozzler e.U.</div>
            <div>Software Development</div>
            <br />
            <div>Christopher Wattaul</div>
            <div>Schickgasse 32/3/305</div>
            <div>1220 Vienna, Austria</div>
            <br />
            <div>
              Email:{' '}
              <a
                href="mailto: christopher.wattaul@gmail.com"
                className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
              >
                christopher.wattaul@gmail.com
              </a>
            </div>
            <br />
            <div>FN: 538479g</div>
            <div>UID: ATU75849628</div>
            <div>Handelsgericht Wien</div>
            <div>
              <a
                href="https://ris.bka.gv.at/"
                className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
              >
                Gewerbeordnung
              </a>
            </div>
            <div>
              Member of{' '}
              <a
                href="https://wko.at/"
                className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
              >
                WKO
              </a>
            </div>
            <br />
            <div>
              Complaints can be submitted to the email above or directly to the
              online dispute resolution platform of the
              <br />
              <a
                href="http://ec.europa.eu/odr"
                className="underline rounded-md md:hover:bg-vdvPink md:hover:bg-opacity-50"
              >
                European Commission
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="w-56 md:w-64 bg-gray-100 shadow-xl -mt-16 rounded-xl overflow-hidden">
        <div className="py-2 text-lg text-center font-bold uppercase tracking-wide text-gray-700">
          Legal Notice
        </div>
        {/* <div className="flex items-center justify-center py-2 px-3 bg-gray-300">
        <h1 className="text-gray-700 font-bold text-center">
          Thank You For Your Time
        </h1>
      </div> */}
      </div>
    </div>
  </Page>
);

export default LegalNotice;
