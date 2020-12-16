import Page from '../src/components/Page';

const LegalNotice = () => (
  <Page>
    <div className="flex justify-start items-center bg-gray-100">
      <div className="min-h-screen px-12 lg:px-32 2xl:px-48 py-24 lg:py-48 2xl:py-64 w-full md:w-2/3 shadow-sm">
        <h1 className="w-full my-2">Krozzler e.U.</h1>
        <h2 className="mb-1 text-gray-600">Software Development</h2>
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
          Complaints can be submitted <br /> to the email above or directly{' '}
          <br />
          to the online dispute <br />
          resolution platform of the <br />
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
  </Page>
);

export default LegalNotice;
