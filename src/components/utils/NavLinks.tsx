import Link from 'next/link';

const navLinks = [
  {
    title: 'Work',
    href: '#work',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'About',
    href: '#about',
  },
];

const NavLinks = () => (
  <div className="w-full md:w-2/3 h-24 flex justify-between items-center px-32 bg-indigo-900 text-xl">
    <div>
      <a href="/">Chris Wattaul</a>
    </div>

    <ul className="flex justify-around items-center text-lg">
      {navLinks.map((nav, i) => (
        <Link href={nav.href}>
          <a>
            <li key={i} className="px-4">
              {nav.title}
            </li>
          </a>
        </Link>
      ))}
    </ul>
  </div>
);

export default NavLinks;
