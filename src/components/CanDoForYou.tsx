const CanDoForYou = () => (
  <div>
    <div className="flex flex-col items-start justify-center text-left">
      <h1 className="text-gray-50">Services</h1>
      <div className="lg:w-2/3">
        <p>
          Do you have an idea that <br className="lg:hidden" /> you would like
          to have realized?
        </p>
        <p>
          Your team needs a pair of hands <br className="lg:hidden" /> to put
          the finalizing touches on a <br className="lg:hidden" /> project
          before shipment?
        </p>

        <p>
          If any of my{' '}
          <a
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('skills');
              console.log(element.offsetTop - 96);

              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: element.offsetTop - 96,
                  left: 0,
                  behavior: 'smooth',
                });
                window.history.pushState(null, '', '#skills');
              }
            }}
            href="#skills"
          >
            skills
          </a>{' '}
          are helpful <br className="lg:hidden" /> to your team or project, or
          would <br className="lg:hidden" />
          like to get support while learning <br className="lg:hidden" /> about
          web development yourself...
        </p>
      </div>
    </div>
  </div>
);

export default CanDoForYou;
