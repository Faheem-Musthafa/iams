import SEO from '../components/SEO';
import CourseLanding from '../components/CourseLanding';
import businessManagementImg from '../assets/courses/business_management.webp';

const questions = [
  {
    question: 'How long is the Business Management course at IAMS Campus?',
    answer: 'The Business Management program runs for one year and is designed to build a practical foundation in management, communication, and business decision-making.',
  },
  {
    question: 'Who can join the Business Management course?',
    answer: 'The program suits learners who want to develop business and workplace skills for further study, entrepreneurship, or entry-level corporate opportunities. Contact admissions to confirm current eligibility requirements.',
  },
  {
    question: 'Does IAMS Campus provide placement support?',
    answer: 'Yes. IAMS Campus provides career guidance, interview preparation, and dedicated placement support to help eligible students move towards suitable opportunities.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://iamscampus.in/business-management-course-malappuram#course',
      name: 'Business Management Course',
      description: 'A one-year practical Business Management course with career guidance and placement support in Malappuram, Kerala.',
      provider: { '@type': 'EducationalOrganization', '@id': 'https://iamscampus.in/#organization', name: 'IAMS Campus', url: 'https://iamscampus.in' },
      timeRequired: 'P1Y',
      areaServed: ['Malappuram', 'Tirurangadi', 'Kakkad'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
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
        { '@type': 'ListItem', position: 3, name: 'Business Management', item: 'https://iamscampus.in/business-management-course-malappuram' },
      ],
    },
  ],
};

const BusinessManagementPage = () => (
  <>
    <SEO
      title="Business Management Course in Malappuram | IAMS Campus"
      description="Join a practical 1-year Business Management course near Tirurangadi, Malappuram. Build leadership and workplace skills with career and placement support."
      path="/business-management-course-malappuram"
      schema={schema}
    />
    <CourseLanding
      eyebrow="1-Year Program • Malappuram"
      title="Build practical business skills for the real world"
      intro="Study Business Management at IAMS Campus near Tirurangadi and develop the communication, leadership, and decision-making skills needed for higher studies, entrepreneurship, and corporate careers."
      image={businessManagementImg}
      imageAlt="Business Management students developing professional skills at IAMS Campus in Malappuram"
      highlights={['One-year structured program', 'Practical business learning', 'Career guidance', 'Placement support']}
      learnItems={[
        { title: 'Management foundations', description: 'Understand how organisations plan, coordinate teams, serve customers, and make responsible decisions.' },
        { title: 'Professional communication', description: 'Build clearer workplace communication, presentation confidence, and collaborative habits.' },
        { title: 'Business thinking', description: 'Approach everyday business situations with structured problem-solving and practical judgement.' },
        { title: 'Career readiness', description: 'Prepare for interviews and next steps with guidance from experienced mentors and the placement team.' },
      ]}
      questions={questions}
      whatsappText="Hi IAMS Campus, I would like the syllabus, fees, and admission details for the Business Management course."
    >
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Career-focused learning</p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-brand-dark mb-6">Learn management by connecting ideas to real workplace situations</h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          The course is designed for students who want more than theory. Guided learning, professional skill development, and career support help you build a practical base for business and corporate environments.
        </p>
      </div>
    </CourseLanding>
  </>
);

export default BusinessManagementPage;
