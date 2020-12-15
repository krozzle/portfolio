import Fade from 'react-reveal/Fade';

const skills = [
  {
    title: 'UI/UX Design',
    img: '/ui-ux.svg',
    alt: 'illustration of a computer screen showing an html tag',
    tech: [
      {
        name: 'CSS',
        url: 'https://w3.org/TR/CSS/#css',
      },
      {
        name: 'HTML',
        url: 'https://html.spec.whatwg.org/',
      },
      {
        name: 'Adobe XD',
        url: 'https://adobe.com/products/xd.html',
      },
      {
        name: 'Figma',
        url: 'https://figma.com',
      },
    ],
  },
  {
    title: 'Frontend',
    img: '/frontend.svg',
    alt: 'html body tag',
    tech: [
      {
        name: 'React',
        url: 'https://reactjs.org',
      },
      {
        name: 'Next.js',
        url: 'https://nextjs.org',
      },
      {
        name: 'GraphQL',
        url: 'https://graphql.org',
      },
      {
        name: 'TypeScript',
        url: 'https://typescriptlang.org',
      },
    ],
  },
  {
    title: 'Backend',
    img: '/backend.svg',
    alt: 'illustration of a server',
    tech: [
      {
        name: 'Node.js',
        url: 'https://nodejs.org',
      },
      {
        name: 'PostgreSQL',
        url: 'https://postgresql.org',
      },
      {
        name: 'TypeORM',
        url: 'https://typeorm.io',
      },
      {
        name: 'Apollo',
        url: 'https://apollographql.com/',
      },
    ],
  },
];

const Skills = () => (
  <div
    id="skills"
    className="pt-12 bg-gray-300 text-gray-700 tracking-wide leading-relaxed flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-end"
  >
    {skills.map((skill) => (
      <Fade bottom>
        <div
          key={skill.title}
          className="z-10 relative py-12 px-16 my-24 lg:mx-12 lg:-mb-24 bg-gray-100 rounded-2xl h-96 flex flex-col justify-center lg:justify-between items-center"
        >
          <img src={skill.img} alt={skill.alt} className="w-40 h-40 mb-8" />
          <h3>{skill.title}</h3>
          {skill.tech.map((technology, j) => (
            <a className="no-underline" key={j} href={technology.url}>
              <p>{technology.name}</p>
            </a>
          ))}
        </div>
      </Fade>
    ))}
  </div>
);

export default Skills;
