const skillLinks = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    logo: '/reactjs.svg',
    alt: 'react logo',
  },
  {
    title: 'Next.js',
    url: 'https://nextjs.org',
    logo: '/nextjs.svg',
    alt: 'next.js logo',
  },
  {
    title: 'TypeScript',
    url: 'https://typescriptlang.org',
    logo: '/typescript.svg',
    alt: 'typescript logo',
  },
  {
    title: 'GraphQL',
    url: 'https://graphql.org',
    logo: '/graphql.svg',
    alt: 'graphql logo',
  },
  {
    title: 'Node',
    url: 'https://nodejs.org',
    logo: '/nodejs.svg',
    alt: 'node logo',
  },
  {
    title: 'TailwindCss',
    url: 'https://tailwindcss.com',
    logo: '/tailwindcss.svg',
    alt: 'tailwind logo',
  },
];

const Skills = () => (
  <div
    id="skills"
    className="flex flex-col items-center lg:items-center justify-center text-center text-gray-800 tracking-wide bg-gray-300"
  >
    <div className="">
      <h1 className="p-12 uppercase text-5xl font-extrabold">skills</h1>
    </div>
    <div className="flex flex-wrap justify-around items-center text-gray-900">
      {skillLinks.map((skill, i) => (
        <a href={skill.url}>
          <div
            key={i}
            className="flex flex-col my-12 mx-16 sm:mx-24 lg:mx-20 lg:px-2 xl:mx-32 xl:p-0 justify-center items-center"
          >
            <div>
              <img src={skill.logo} alt={skill.alt} className="w-24 h-24" />
            </div>
            <div>{skill.title}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Skills;
