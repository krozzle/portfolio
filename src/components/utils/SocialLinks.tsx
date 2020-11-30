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
    href: 'https://linkedin/in/christopher-wataul',
    alt: 'linkedin',
  },
];

const SocialLinks = () => (
  <div className="hidden md:w-1/3 md:h-24 md:flex justify-center items-center md:bg-gray-100">
    {socialLinks.map((social, i) => (
      <Link key={i} href={social.href}>
        <a>
          <img src={social.img} className="px-4 w-16 h-16" />
        </a>
      </Link>
    ))}
  </div>
);

export default SocialLinks;
