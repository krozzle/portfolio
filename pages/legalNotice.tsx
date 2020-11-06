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
              className="hover:shadow-md"
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
            <a className="hover:shadow-inner" href="https://ris.bka.gv.at/">
              Gewerbeordnung
            </a>
          </div>
          <div>
            Member of{' '}
            <a className="hover:shadow-inner" href="https://wko.at/">
              WKO
            </a>
          </div>
        </div>
      </div>
    </Card>
  </Page>
);

export default LegalNotice;
