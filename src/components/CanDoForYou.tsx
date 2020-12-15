const CanDoForYou = () => (
  <div>
    <div className="h-full flex flex-col items-start justify-center text-left">
      <h1 className="text-gray-50">What I Can Do For You</h1>
      <div>
        <p>
          Do you have an idea that you would like <br />
          to have realized? Your team needs help <br />
          finalizing a project before shipment?
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
          might be helpful <br /> to your team or project, <br />
          or would like support
          <br />
          to learn about <br /> web development yourself...
        </p>
      </div>
    </div>
  </div>
);

export default CanDoForYou;
