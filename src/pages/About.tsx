import Headings from '../components/Headings';
import ExpertiseCard from '../components/ExpertiseCards';

export default function About() {
  const skills = [
    { title: 'UI/UX Design', description: 'Crafting intuitive and engaging user experiences with a focus on usability and aesthetics.' },
    { title: 'Frontend Development', description: 'Building responsive and performant web applications using modern frameworks.' },
    { title: 'Brand Identity', description: 'Creating memorable brand experiences that resonate with target audiences.' },
    { title: 'User Research', description: 'Conducting research to understand user needs and validate design decisions.' }
  ];

  const experience = [
    { role: 'Senior Product Designer', company: 'Design Studio Inc.', duration: '2020 - Present' },
    { role: 'UI/UX Designer', company: 'Creative Agency', duration: '2018 - 2020' },
    { role: 'Junior Designer', company: 'Startup Ventures', duration: '2016 - 2018' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Hello, I'm <span className="text-blue-400">Ayush Soam</span>
          </h1>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate designer and developer based in San Francisco, dedicated to creating beautiful and functional digital experiences. With over 7 years of experience in the industry, I've helped numerous clients bring their ideas to life.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in design and development started when I was studying Computer Science at Stanford University. Since then, I've had the privilege of working with startups and established companies, helping them craft meaningful digital products that users love.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not designing or coding, you can find me hiking in the Bay Area, reading about new technologies, or mentoring aspiring designers and developers in my free time.
            </p>
            
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Contact Me
                </a>
                <a href="/work" className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I've honed my skills across various disciplines to deliver comprehensive design solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <ExpertiseCard key={index} title={skill.title}>
                {skill.description}
              </ExpertiseCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Headings title="Experience" />
          <div className="mt-12 space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-800 pb-6">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 sm:mt-0">{exp.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
