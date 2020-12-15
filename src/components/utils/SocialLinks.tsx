import Link from 'next/link';

const socialLinks = [
  {
    title: 'Github',
    img: '/github.svg',
    href: 'https://github.com/krozzle',
    alt: 'github',
  },
  {
    title: 'Twitter',
    img: '/twitter.svg',
    href: 'https://twitter.com/krozzler',
    alt: 'twitter',
  },
  {
    title: 'LinkedIn',
    img: '/linkedin.svg',
    href: 'https://linkedin.com/in/christopher-wattaul',
    alt: 'linkedin',
  },
];

const SocialLinks = () => (
  <div className="hidden md:w-1/3 md:h-24 pr-12 lg:pr-32 2xl:pr-48 md:flex justify-end items-center md:bg-gray-100">
    {socialLinks.map((social, i) => (
      <Link key={i} href={social.href}>
        <a>
          <img src={social.img} className="py-4 pl-4 h-16" />
        </a>
      </Link>
    ))}
  </div>
);

export default SocialLinks;
