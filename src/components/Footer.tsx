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
      {/* Marquee Section */}
      <div className="overflow-hidden">
        <div className="inline-flex marquee whitespace-nowrap py-4">
          {marqueeItems.map((text, idx) => (
            <div
              key={idx}
              className="flex items-center px-8 gap-8 sm:px-4 sm:gap-4"
            >
              <img src={Separator} alt="separator" className="h-4 w-4 sm:h-3 sm:w-3" />
              <span className="text-[56px] sm:text-[28px] font-bold inline-block">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="flex flex-col items-center gap-2 mt-8 text-center px-4">
        <p className="text-6xl sm:text-3xl font-extrabold">LET'S TALK</p>
        <a
          href="mailto:ayushsoam@gmail.com"
          className="flex items-center gap-2 text-[18px] font-[400] hover:text-gray-400 transition-colors sm:text-base"
        >
          <span>ayushsoam@gmail.com</span>
          <img src={RightArrow} alt="Right arrow" className="h-4 w-4" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-[18px] font-[400] sm:text-sm">
            © Ayush Soam - {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:text-sm">
            <a href="#" className="hover:text-gray-400 transition-colors">Dribbble</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Behance</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
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
