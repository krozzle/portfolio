const skillLinks = [
  {
    title: 'React',
    url: 'https://www.reactjs.org',
    logo: '/reactjs.svg',
    alt: 'react js logo',
  },
  {
    title: 'Next.js',
    url: 'https://www.nextjs.org',
    logo: '/nextjs.svg',
    alt: 'next.js logo',
  },
  {
    title: 'TypeScript',
    url: 'https://www.typescriptlang.org',
    logo: '/typescript.svg',
    alt: 'typescript logo',
  },
  {
    title: 'GraphQL',
    url: 'https://www.graphql.org',
    logo: '/graphql.svg',
    alt: 'graph-ql logo',
  },
  {
    title: 'Node',
    url: 'https://www.nodejs.org',
    logo: '/nodejs.svg',
    alt: 'node logo',
  },
  {
    title: 'TailwindCSS',
    url: 'https://www.tailwindcss.com',
    logo: '/tailwindcss.svg',
    alt: 'tailwind css logo',
  },
];

const Skills = () => (
  <div
    id="skills"
    className="flex flex-col py-6 items-center justify-center text-center text-gray-800 tracking-wide"
  >
    <h1 className="uppercase text-5xl font-extrabold">skills</h1>
    <div className="flex flex-wrap py-6 justify-around items-center text-gray-900">
      {skillLinks.map((skill, i) => (
        <div
          key={i}
          className="flex flex-col w-1/2 lg:w-1/3 justify-center items-center"
        >
          <div className="flex flex-col py-12 mx-2 lg:mx-16">
            <a href={skill.url}>
              <img src={skill.logo} alt={skill.alt} className="w-24 h-24" />
              <div className="py-4 text-lg tracking-wide">{skill.title}</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
