import Link from 'next/link';

const navLinks = [
  {
    title: 'Work',
    section: '/',
  },
  {
    title: 'Skills',
    section: '#skills',
  },
  {
    title: 'About',
    section: '#about',
  },
];

const NavLinks = () => (
  <div className="w-full md:w-2/3 h-24 flex justify-between lg:justify-between items-center pl-12 lg:px-32 bg-indigo-900 text-xl">
    <div className="">
      <a href="/">Chris Wattaul</a>
    </div>

    <ul className="flex justify-around items-center text-lg">
      {navLinks.map((nav, i) => (
        <Link href={nav.section} key={i}>
          <a>
            <li key={i} className="pr-4">
              {nav.title}
            </li>
          </a>
        </Link>
      ))}
    </ul>
  </div>
);

export default NavLinks;
