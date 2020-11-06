import Card from '../src/components/Card';
import Page from '../src/components/Page';

const LegalNotice = () => (
  <Page>
    <Card>
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
              className="hover:bg-black"
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
            <a className=" hover:bg-black" href="https://ris.bka.gv.at/">
              Gewerbeordnung
            </a>
          </div>
          <div>
            Member of{' '}
            <a className=" hover:bg-black" href="https://wko.at/">
              WKO
            </a>
          </div>
          <br />
          <div>
            Complaint can be submitted to the email above or directly to the
            online dispute resolution platform of the
            <br />
            <a className=" hover:bg-black" href="http://ec.europa.eu/odr">
              European Comission
            </a>
            .
          </div>
        </div>
      </div>
    </Card>
  </Page>
);

export default LegalNotice;
