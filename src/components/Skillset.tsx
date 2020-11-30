const skills = [
  {
    title: 'UI/UX Design',
    img: '/ui-ux.svg',
    alt: 'illustration of a computer screen showing an html tag',
    tech: [
      {
        name: 'CSS',
        url: 'https://www.w3.org/TR/CSS/#css',
      },
      {
        name: 'HTML',
        url: 'https://html.spec.whatwg.org/',
      },
      {
        name: 'Prototyping',
        url: 'https://www.adobe.com/products/xd.html',
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
        url: 'https://www.reactjs.org',
      },
      {
        name: 'Next.js',
        url: 'https://www.nextjs.org',
      },
      {
        name: 'GraphQL',
        url: 'https://www.graphql.org',
      },
      {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org',
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
        url: 'https://www.nodejs.org',
      },
      {
        name: 'PostgreSQL',
        url: 'https://www.postgresql.org',
      },
      {
        name: 'TypeORM',
        url: 'https://www.typeorm.io',
      },
    ],
  },
];

const Skillset = () => (
  <div>
    <div className="pt-12 bg-gray-300 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-end">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="py-12 px-24 my-12 md:mx-12 md:-mb-24 bg-gray-100 rounded-2xl h-96 flex flex-col justify-center md:justify-end items-center"
        >
          <img src={skill.img} alt={skill.alt} className="w-32 pb-16" />
          <div>{skill.title}</div>
          {skill.tech.map((technology, j) => (
            <a href={technology.url}>
              <div key={j} className="">
                {technology.name}
              </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Skillset;
