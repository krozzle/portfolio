import Page from '../src/components/Page';

const LegalNotice = () => (
  <Page>
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
      <div className="bg-gray-300 w-full rounded-lg shadow-md bg-cover bg-center">
        <div className="flex my-8 pb-12 px-6 text-gray-800 leading-relaxed">
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
                className="hover:shadow-lg hover:bg-gray-200 underline"
                href="mailto: christopher.wattaul@gmail.com"
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
                className=" hover:shadow-lg hover:bg-gray-200 underline"
                href="https://ris.bka.gv.at/"
              >
                Gewerbeordnung
              </a>
            </div>
            <div>
              Member of{' '}
              <a
                className=" hover:shadow-lg hover:bg-gray-200 underline"
                href="https://wko.at/"
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
                className=" hover:shadow-lg hover:bg-gray-200 underline"
                href="http://ec.europa.eu/odr"
              >
                European Commission
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="w-56 md:w-64 bg-white shadow-lg -mt-12 shadow-lg rounded-lg overflow-hidden">
        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-700">
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
