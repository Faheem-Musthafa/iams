import SEO from '../components/SEO';
import CourseLanding from '../components/CourseLanding';

const ProgramPage = ({ program }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `https://iamscampus.in${program.path}#course`,
        url: `https://iamscampus.in${program.path}`,
        name: program.name,
        description: program.schemaDescription,
        educationalLevel: program.educationalLevel,
        areaServed: ['Malappuram', 'Tirurangadi', 'Kakkad'],
        ...(program.duration ? { timeRequired: program.duration } : {}),
        provider: {
          '@type': 'EducationalOrganization',
          '@id': 'https://iamscampus.in/#organization',
          name: 'IAMS Campus',
          url: 'https://iamscampus.in',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: program.questions.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iamscampus.in/' },
          { '@type': 'ListItem', position: 2, name: 'Courses', item: 'https://iamscampus.in/courses' },
          { '@type': 'ListItem', position: 3, name: program.name, item: `https://iamscampus.in${program.path}` },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title={program.seoTitle}
        description={program.seoDescription}
        path={program.path}
        image={`https://iamscampus.in${program.image}`}
        schema={schema}
      />
      <CourseLanding
        eyebrow={program.eyebrow}
        title={program.title}
        intro={program.intro}
        image={program.image}
        imageAlt={program.imageAlt}
        highlights={program.highlights}
        outcomesTitle={program.outcomesTitle}
        learnItems={program.learnItems}
        questions={program.questions}
        whatsappText={program.whatsappText}
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{program.sectionEyebrow}</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-brand-dark mb-6">{program.sectionTitle}</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">{program.sectionBody}</p>
        </div>
      </CourseLanding>
    </>
  );
};

export default ProgramPage;
