const navLinks = [
  {
    title: 'Work',
    id: 'work',
    ref: 'workRef',
  },
  {
    title: 'Skills',
    id: 'skills',
    ref: 'skillsRef',
  },
  {
    title: 'About',
    id: 'about',
    ref: 'aboutRef',
  },
];

const NavLinks = () => {
  return (
    <div className="w-full md:w-2/3 h-24 flex justify-between items-center px-12 lg:px-32 2xl:px-48 bg-indigo-900 text-xl">
      <div className="">
        <a href="/">Chris Wattaul</a>
      </div>

      <ul className="flex justify-around items-center space-x-4 text-lg">
        {navLinks.map((nav) => (
          <a
            key={nav.id}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(nav.id);
              console.log(element.offsetTop - 96);

              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: element.offsetTop - 96,
                  left: 0,
                  behavior: 'smooth',
                });
                window.history.pushState(null, '', '#' + nav.id);
              }
            }}
            href={'#' + nav.id}
          >
            <li>{nav.title}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};
export default NavLinks;
