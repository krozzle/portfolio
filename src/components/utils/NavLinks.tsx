import Link from 'next/link';

const navLinks = [
  {
    title: 'Work',
    section: '#work',
    ref: 'workRef',
  },
  {
    title: 'Skills',
    section: '#skills',
    ref: 'skillsRef',
  },
  {
    title: 'About',
    section: '#about',
    ref: 'aboutRef',
  },
];

const NavLinks = () => {
  return (
    <div className="w-full md:w-2/3 h-24 flex justify-between lg:justify-between items-center px-12 lg:px-32 bg-indigo-900 text-xl">
      <div className="">
        <a href="/">Chris Wattaul</a>
      </div>

      <ul className="flex justify-around items-center space-x-4 text-lg">
        {navLinks.map((nav, i) => (
          <Link href={nav.section} key={i}>
            <a ref={nav.ref}>
              <li key={i}>{nav.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default NavLinks;
