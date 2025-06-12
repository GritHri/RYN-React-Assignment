import RightArrow from '../assets/RightArrow.svg';
import Separator from '../assets/List.svg';

const Footer = () => {
  const items = [
    "LET'S WORK TOGETHER",
    "GET IN TOUCH",
    "CONTACT ME",
  ];

  const marqueeItems = [...items, ...items];

  return (
    <footer className="bg-black text-white py-8">
      <div className="overflow-hidden">
        <div className="inline-flex marquee whitespace-nowrap py-4">
          {marqueeItems.map((text, idx) => (
            <div key={idx} className="flex items-center px-8 gap-8">
              <img src={Separator} alt="separator" />
              <span className="text-[56px] font-bold inline-block">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 mt-8">
        <p className="text-6xl font-extrabold">LET'S TALK</p>
        <a
          href="mailto:ayushsoam@gmail.com"
          className="flex items-center gap-2 text-[18px] font-[400] hover:text-gray-400 transition-colors"
        >
          <span>ayushsoam@gmail.com</span>
          <img src={RightArrow} alt="Right arrow" />
        </a>
      </div>

      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[18px] font-[400] mb-4 md:mb-0">
            © Ayush Soam - {new Date().getFullYear()}
          </p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Dribbble
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Behance
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
