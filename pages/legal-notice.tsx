import Page from '../src/components/Page';

const LegalNotice = () => (
  <Page>
    <div className="flex flex-col justify-center items-start min-h-screen bg-gray-100 mx-auto py-12">
      <div className="bg-gray-300 px-12 lg:px-32 2xl:px-48 w-full md:w-2/3 rounded-lg shadow-xl bg-opacity-25">
        <div className="flex my-8 pb-12 text-gray-900 leading-relaxed">
          <div className="flex flex-col justify-center items-start">
            <h1 className="w-full text-2xl">Krozzler e.U.</h1>
            <h2 className="text-gray-900">Software Development</h2>
            <br />
            <p>Christopher Wattaul</p>
            <p>Schickgasse 32/3/305</p>
            <p>1220 Vienna, Austria</p>
            <br />
            <p>
              Email:{' '}
              <a
                href="mailto: christopher.wattaul@gmail.com"
                className="hover:text-vdvPink transition-colors duration-300"
              >
                christopher.wattaul@gmail.com
              </a>
            </p>
            <br />
            <p>FN: 538479g</p>
            <p>UID: ATU75849628</p>
            <p>Handelsgericht Wien</p>
            <p>
              <a
                href="https://ris.bka.gv.at/"
                className="hover:text-vdvPink transition-colors duration-300"
              >
                Gewerbeordnung
              </a>
            </p>
            <p>
              Member of{' '}
              <a
                href="https://wko.at/"
                className="hover:text-vdvPink transition-colors duration-300"
              >
                WKO
              </a>
            </p>
            <br />
            <p>
              Complaints can be submitted to the email{' '}
              <br className="hidden sm:inline" /> above or directly to the
              online dispute <br /> resolution platform of the {''}
              <br className="xl:hidden" />
              <a
                href="http://ec.europa.eu/odr"
                className="hover:text-vdvPink transition-colors duration-300"
              >
                European Commission
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </Page>
);

export default LegalNotice;
