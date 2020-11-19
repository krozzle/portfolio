const skillLinks = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    logo: '/reactjs.svg',
    alt: 'react js logo',
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
    alt: 'graph-ql logo',
  },
  {
    title: 'Node',
    url: 'https://nodejs.org',
    logo: '/nodejs.svg',
    alt: 'node logo',
  },
  {
    title: 'TailwindCSS',
    url: 'https://tailwindcss.com',
    logo: '/tailwindcss.svg',
    alt: 'tailwind css logo',
  },
];

const Skills = () => (
  <div
    id="skills"
    className="flex flex-col items-center justify-center text-center text-gray-800 tracking-wide"
  >
    <h1 className="uppercase text-5xl font-extrabold">skills</h1>
    <div className="flex flex-wrap justify-around items-center text-gray-900">
      {skillLinks.map((skill, i) => (
        <div key={i} className="flex flex-col w-1/2 lg:w-1/3 ">
          <div className="flex flex-col py-12 mx-2 lg:mx-16 justify-center items-center">
            <a href={skill.url}>
              <img
                src={skill.logo}
                alt={skill.alt}
                className="w-24 h-24 object-contain object-center"
              />
              <div className="py-2 px-4 text-lg tracking-wide">
                {skill.title}
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
