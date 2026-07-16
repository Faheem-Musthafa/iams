import SEO from '../components/SEO';
import CourseLanding from '../components/CourseLanding';
import commerceTuitionImg from '../assets/courses/commerce_tuition.webp';

const questions = [
  {
    question: 'Where can I find +1 Commerce tuition near Tirurangadi?',
    answer: 'IAMS Campus is located at NP Center, Kakkad and serves Commerce students from Tirurangadi, Malappuram, and nearby areas. Contact admissions for current batch timings and availability.',
  },
  {
    question: 'What does the +1 Commerce tuition focus on?',
    answer: 'The program focuses on clear Commerce concepts, structured revision, exam preparation, and the confidence to handle subjects such as Accountancy, Business Studies, and Economics.',
  },
  {
    question: 'Can I continue at IAMS after +1 and +2 Commerce?',
    answer: 'Yes. IAMS Campus also offers career pathways including Business Management, Corporate Accounts with GST, B.Com, BBA, digital marketing, and other professional skill programs.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://iamscampus.in/plus-one-commerce-tuition-malappuram#course',
      name: '+1 and +2 Commerce Tuition',
      description: 'Exam-focused +1 and +2 Commerce tuition for students in Malappuram, Tirurangadi, Kakkad, and nearby areas.',
      provider: { '@type': 'EducationalOrganization', '@id': 'https://iamscampus.in/#organization', name: 'IAMS Campus', url: 'https://iamscampus.in' },
      educationalLevel: 'Higher Secondary',
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
        { '@type': 'ListItem', position: 3, name: '+1 Commerce Tuition', item: 'https://iamscampus.in/plus-one-commerce-tuition-malappuram' },
      ],
    },
  ],
};

const CommerceTuitionPage = () => (
  <>
    <SEO
      title="Best +1 Commerce Tuition in Malappuram | IAMS Campus"
      description="Looking for +1 Commerce tuition in Malappuram or Tirurangadi? Build strong concepts with focused exam preparation and personal mentoring at IAMS Campus."
      path="/plus-one-commerce-tuition-malappuram"
      schema={schema}
    />
    <CourseLanding
      eyebrow="+1 & +2 Commerce • Kakkad, Malappuram"
      title="Looking for the best +1 Commerce tuition in Malappuram?"
      intro="Build clear concepts, prepare confidently for exams, and create a strong foundation for higher studies in Commerce, accounting, and business. Convenient for students from Tirurangadi and nearby areas."
      image={commerceTuitionImg}
      imageAlt="Commerce tuition students learning at IAMS Campus near Tirurangadi, Malappuram"
      highlights={['Exam-focused preparation', 'Clear concept teaching', 'Personal mentoring', 'Commerce career guidance']}
      learnItems={[
        { title: 'Core Commerce concepts', description: 'Understand the ideas behind Accountancy, Business Studies, and Economics instead of relying only on memorisation.' },
        { title: 'Exam confidence', description: 'Use structured revision and practice to approach school examinations with better speed, accuracy, and clarity.' },
        { title: 'Consistent learning', description: 'Stay on track through guided classroom learning and a focused academic environment.' },
        { title: 'Career direction', description: 'Explore pathways such as B.Com, BBA, business management, accounting, and professional skill courses.' },
      ]}
      questions={questions}
      whatsappText="Hi IAMS Campus, I would like batch timings and admission details for +1 Commerce tuition."
    >
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Why families choose IAMS</p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-brand-dark mb-6">Commerce learning with a clear path beyond the classroom</h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          IAMS Campus combines higher-secondary Commerce support with practical career education under one roof. Students can strengthen their school foundation now and make informed choices about degree, accounting, and business programs later.
        </p>
      </div>
    </CourseLanding>
  </>
);

export default CommerceTuitionPage;
